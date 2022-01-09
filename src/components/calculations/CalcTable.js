import React from "react";
import { Box, Button, IconButton, Modal, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { DataGrid } from "@material-ui/data-grid";
import { Pagination } from "@material-ui/lab";
import ColoredBox from "../ColoredBox";
import { ReactComponent as EditIcon } from "../../images/editIcon.svg";
import { ReactComponent as InfoIcon } from "../../images/infoIcon.svg";
import { ReactComponent as DeleteIcon } from "../../images/deleteIcon.svg";
import { ReactComponent as WarningIcon } from "../../images/WarningIcon.svg";
import useWindowDimensions from "../windowDimension";
import types from "../../helper/data.json";

//add pagination to the datagrid
function CustomPagination(props) {
    const { state, api } = props;
    const [displayPage, setDisplayPage] = React.useState(1);

    //inital page number is 0
    //added varibale displaypage which displays the correct page
    React.useEffect(() => {
        setDisplayPage(state.pagination.page + 1);
    }, [state]);

    return (
        <Pagination
            page={displayPage}
            shape="rounded"
            color="primary"
            count={state.pagination.pageCount}
            onChange={(event, value) => api.current.setPage(value - 1)}
        />
    );
}

export default function Calctable(props) {
    const [openDialog, setOpenDialog] = React.useState(false);
    const { width } = useWindowDimensions();
    const [isLoading, setIsLoading] = React.useState(true);

    const [data, setData] = React.useState(props.data);

    React.useEffect(() => {
        setIsLoading(props.data.length === 0);
        setData(props.data);
    }, [props.data]);

    const columns = [
        {
            field: "Name",
            headerName: "Name",
            headerClassName: "headerClass",
            headerAlign: "center",
            align: "center",

            width: width * 0.1,
            renderCell: (params) => (
                <Typography style={{marginLeft: "20%", marginRight: "auto"}}>
                    {params.value}
                </Typography>
            )
        },
        {
            field: "Date",
            headerName: "Date",
            type: "date",
            width: width * 0.095,
            headerClassName: "headerClass",
            headerAlign: "center",
            align: "center",
            hide: width < 600 ? true : false,
            renderCell: (params) => (
                <Typography style={{marginLeft: "20%", marginRight: "auto"}}>
                    {params.value}
                </Typography>
            )
        },
        {
            field: "Category",
            headerName: "Category",
            headerAlign: "center",
            headerClassName: "headerClass",
            align: "center",
            width: width * 0.14,
            renderCell: (params) => (
              <ColoredBox style={{marginLeft: "20%", marginRight: "auto"}}
                  text={<Typography>{types.by_id[params.value].value}</Typography>}
                  //color={params.value.color}
                  //backgroundcolor={types.by_id[params.value].color}
              />
          )
        },
        {
            field: "Type",
            headerName: "Type",
            headerClassName: "headerClass",
            headerAlign: "center",
            cellClassName: "typeClass",
            hide: width < 600 ? true : false,

            align: "center",
            width: width * 0.13,
            sortComparator: (v1, v2, params1) => v1.text > v2.text,
            filterable: false,
            renderCell: (params) => (
              <ColoredBox
                style={{marginLeft: "auto", marginRight: "10%"}}
                text={params.value.text}
                backgroundcolor={params.value.text === "New production" ? "#9BFF93" : "#B4E7FF"}
              />
            )
        },
        {
            field: "Area",
            headerName: "Area",
            width: width * 0.13,
            headerClassName: "headerClass",
            headerAlign: "center",
            align: "center",
            hide: width < 600 ? true : false,
            renderCell: (params) => (
                <Typography
                    style={{marginLeft: "auto", marginRight: "20%"}}
                >
                    {params.value}
                </Typography>
            )
        },
        {
            field: "Actions",
            headerName: "Actions",
            width: width * 0.08,
            headerClassName: "headerClass",
            headerAlign: "center",
            align: "center",
            renderCell: (params) => (
                <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    style={{ marginLeft: "auto", marginRight: "auto" }}
                >
                    <IconButton style={{ padding: 8 }}>
                        <InfoIcon />
                    </IconButton>
                    <IconButton
                        style={{ padding: 8 }}
                        onClick={handleDeleteClick}
                    >
                        <DeleteIcon />
                    </IconButton>
                </Box>
            ),
            sortable: false
        },
    ];

    const handleDeleteClick = () => {
        if (!openDialog) {
            setOpenDialog(true);
        } else {
            //need to implement delete item..
            console.log("deleting");
            setOpenDialog(false);
        }
    };
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <DataGrid
                pagination
                loading={isLoading}
                rows={data}
                rowHeight={70}
                columns={columns}
                hideFooterSelectedRowCount
                pageSize={5}
                className={classes.dataGrid}
                //autoHeight
                density="comfortable"
                components={{ Pagination: CustomPagination }}
                onPageChange={async (page) => {
                    if (page.page % 2 == 1) {
                        const moreData = await props.downloadMoreData(page.page + 1);
                        setData([
                            ...data,
                            ...moreData
                        ]);
                    }
                }}
            />
            <Modal
                open={openDialog}
                onClose={() => {
                    setOpenDialog(false);
                }}
                className={classes.dialog}
            >
                <Box className={classes.paper}>
                    <WarningIcon />
                    <Typography style={{ fontSize: 21.37 }}>
                        Are you Sure?
                    </Typography>
                    <Button
                        className={classes.dialogbtn}
                        color="primary"
                        variant="contained"
                        onClick={handleDeleteClick}
                    >
                        Yes, I Am
                    </Button>
                    <Button
                        className={classes.dialogbtn}
                        color="primary"
                        variant="contained"
                        onClick={() => {
                            setOpenDialog(false);
                        }}
                    >
                        No
                    </Button>
                </Box>
            </Modal>
        </Box>
    );
}

//add new styles here
const useStyles = makeStyles((theme) => ({
    root: {
        height: "100%",
        "& .headerClass": {
            fontWeight: 500,
            fontSize: 20,
            color: "black",
        },
        "& .typeClass": {
            display: "flex",
            justifyContent: "center",
        },
    },
    dataGrid: {
        border: "none",
        boxSizing: "content-box",
        "& .MuiDataGrid-footer": {
            justifyContent: "center",
            marginTop: theme.spacing(2),
        },
        "& .MuiDataGrid-cell": {
            borderBottom: "none",
        },
    },
    headerClass: {
        fontWeight: 500,
        fontSize: 20,
        color: "black",
    },
    paper: {
        outline: 0,
        background: "white",
        width: 524,
        height: 383,
        borderRadius: 7,
        textAlign: "center",
        fontWeight: 500,
        "& > *": {
            marginTop: 60,
        },
        [theme.breakpoints.down("xs")]: {
            width: "80%",
            height: "auto",
            "& > *": {
                marginTop: 30,
            },
        },
    },
    dialog: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    dialogbtn: {
        textTransform: "none",
        width: 122,
        height: 46,
        fontSize: 17.41,
        fontWeight: 500,
        marginInline: theme.spacing(1),
        [theme.breakpoints.down("xs")]: {
            fontSize: 15,
            height: "auto",
            marginBottom: theme.spacing(2),
        },
    },
}));

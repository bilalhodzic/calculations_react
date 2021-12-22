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

const rows = [
  {
    id: 1,
    Name: "Name",
    Date: "02/05/2021",
    Category: "Building",
    Type: { text: "Building", color: "#0EBD00", backgroundcolor: "#9BFF93" },
    Area: "Adress1",
  },
  {
    id: 2,
    Name: "Name1",
    Date: "04/03/2021",
    Category: "Building",
    Type: { text: "School", color: "#00ADFF", backgroundcolor: "#B4E7FF" },
    Area: "Adress2",
    Actions: "actions",
  },
  {
    id: 3,
    Name: "Name2",
    Date: "04/08/2021",
    Category: "Building",
    Type: {
      text: "Hospital",
      color: "#FF4100",
      backgroundcolor: "#FFCEBD",
    },
    Area: "Adress3",
    Actions: "actions",
  },
  {
    id: 4,
    Name: "Name3",
    Date: "12/08/2021",
    Category: "Building",
    Type: {
      text: "Hotel",
      color: "#3F75BD",
      backgroundcolor: "#C2DCFF",
    },
    Area: "Adress4",
    Actions: "actions",
  },
  {
    id: 5,
    Name: "Name4",
    Date: "24/03/2021",
    Category: "Building",
    Type: {
      text: "Hospital",
      color: "#FF4100",
      backgroundcolor: "#FFCEBD",
    },
    Area: "Adress5",
    Actions: "actions",
  },
  {
    id: 6,
    Name: "Name5",
    Date: "02/01/2021",
    Category: "Building",
    Type: { text: "Building", color: "#0EBD00", backgroundcolor: "#9BFF93" },
    Area: "Adress6",
    Actions: "actions",
  },
];

export default function Calctable(props) {
  const [openDialog, setOpenDialog] = React.useState(false);
  const { width } = useWindowDimensions();

  const data = props.data;

  const columns = [
    {
      field: "Name",
      headerName: "Name",
      headerClassName: "headerClass",
      headerAlign: "center",
      align: "center",

      width: 140,
    },
    {
      field: "Date",
      headerName: "Date",
      type: "date",
      width: 130,
      headerClassName: "headerClass",
      headerAlign: "center",
      align: "center",
      hide: width < 600 ? true : false,
    },
    {
      field: "Category",
      headerName: "Category",
      headerAlign: "center",
      headerClassName: "headerClass",
      align: "center",
      width: 200
    },
    {
      field: "Type",
      headerName: "Type",
      headerClassName: "headerClass",
      headerAlign: "center",
      cellClassName: "typeClass",
      hide: width < 600 ? true : false,

      align: "center",
      width: 170,
      renderCell: (params) => (
        <ColoredBox
          text={params.value.text}
          color={params.value.color}
          backgroundcolor={params.value.backgroundcolor}
        />
      ),
      sortComparator: (v1, v2, params1) => v1.text > v2.text,
      filterable: false,
    },
    {
      field: "Area",
      headerName: "Area",
      width: 200,
      headerClassName: "headerClass",
      headerAlign: "center",
      align: "center",
      hide: width < 600 ? true : false,
    },
    {
      field: "Actions",
      headerName: "Actions",
      width: 150,
      headerClassName: "headerClass",
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"} style={{marginLeft: "auto", marginRight: "auto"}}>
          <IconButton style={{ padding: 8 }}>
            <InfoIcon />
          </IconButton>
          <IconButton style={{ padding: 8 }} onClick={handleDeleteClick}>
            <DeleteIcon />
          </IconButton>
        </Box>
      ),
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
        rows={data}
        columns={columns}
        hideFooterSelectedRowCount
        pageSize={5}
        className={classes.dataGrid}
        //autoHeight
        density="comfortable"
        components={{ Pagination: CustomPagination }}
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
          <Typography style={{ fontSize: 21.37 }}>Are you Sure?</Typography>
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

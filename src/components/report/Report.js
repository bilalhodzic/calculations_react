import React from "react";
import { Box, Button, Divider, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useLocation } from "react-router";
import Layout from "../Layout";
import { Pagination } from "@material-ui/lab";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Scrollbars from "react-custom-scrollbars";

export default function Report(props) {
    React.useEffect(() => {
        //call function while first time render
    }, []);

    const classes = useStyles();
    const location = useLocation();

    const [currentPage, setCurrentPage] = React.useState(1);

    if (!props.data && !location.state && !location.state.data) {
        return "No data for report";
    }

    const calculationData = props.data || location.state.data;
    const token = location.state.token;

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const PageComponent = () => {
        switch(currentPage){
            case 1:
                return <Page1 calculationData={calculationData}/>
            case 2:
                return <Page2 calculationData={calculationData}/>
            case 3:
                return <Page3 calculationData={calculationData}/>
            case 4:
                return <Page4 calculationData={calculationData}/>
            default:
                return "nothing";
        }
    };

    return (
        <Layout token={token}>
            <Paper className={classes.paper}>
                <Box height={100} display={"flex"} alignItems={"center"} style={{ background: "white"}}>
                    <Typography className={classes.headerText}>Preview</Typography>
                    <Typography style={{marginLeft: "auto", marginRight: "auto"}}>Dummy</Typography>
                    <Button className={classes.headerButton} size="large">Export to PDF</Button>
                </Box>
                <Divider/>
                <Scrollbars style={{width: "100%", height: "70vh"}}>
                    <Page1 calculationData={calculationData}/>
                    <Page1 calculationData={calculationData}/>
                </Scrollbars>
            </Paper>
        </Layout>
    );
}

//add new styles here
const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
        },
    },
    paper: {
        minHeight: "85vh",
        margin: theme.spacing(5),
        borderRadius: 7,
        fontFamily: "Poppins",
        minWidth: 600,
        background: "#F1F3F5",
        height: "max-content",
        position: "relative",
        [theme.breakpoints.down("xs")]: {
            margin: theme.spacing(1),
            minWidth: 0,
        },
    },
    footer: {
        position: "absolute",
        bottom: 5,
        left: "5%"
    },
    headerText: {
        fontSize: 26,
        fontWeight: 500,
        width: "20%",
        marginLeft: theme.spacing(5)
    },
    headerButton: {
        background: "#21344D",
        color: "white",
        borderRadius: 10,
        textTransform: "none",
        marginLeft: "auto",
        marginRight: theme.spacing(5),
        width: "15%",
        fontSize: 18,
        fontWeight: 600
    }
}));

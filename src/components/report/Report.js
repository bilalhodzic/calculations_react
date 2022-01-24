import React from "react";
import { Box, Button, Divider, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useLocation } from "react-router";
import Layout from "../Layout";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Scrollbars from "react-custom-scrollbars";

export default function Report(props) {
    React.useEffect(() => {
    }, []);

    const classes = useStyles();
    const location = useLocation();


    if (!props.data && !location.state && !location.state.data) {
        return "No data for report";
    }

    const calculationData = props.data || location.state.data;
    const token = location.state.token;

    return (
        <Layout token={token}>
            <Paper className={classes.paper}>
                <Box
                    height={100}
                    display={"flex"}
                    alignItems={"center"}
                    style={{ background: "white" }}
                >
                    <Typography className={classes.headerText}>
                        Preview
                    </Typography>
                    {false && <Typography
                        style={{ marginLeft: "auto", marginRight: "auto" }}
                    >
                        {calculationData.name}
                    </Typography>}
                    {false && <Button className={classes.headerButton} size="large">
                        Export to PDF
                    </Button>}
                </Box>
                <Divider />
                <Scrollbars
                    color="#fff"
                    style={{ width: "100%", height: "70vh" }}
                    renderThumbVertical={({ style, ...props }) => (
                        <div
                            {...props}
                            style={{
                                ...style,
                                backgroundColor: "#21344D",
                                width: "7px",
                            }}
                        />
                    )}
                >
                    <Page1 type={calculationData.type} title={calculationData.name}/>
                    <Page2 calculationData={calculationData} />
                    <Page3 calculationData={calculationData} />
                    <Page4 calculationData={calculationData} />
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
        left: "5%",
    },
    headerText: {
        fontSize: 26,
        fontWeight: 500,
        marginLeft: theme.spacing(5),
        [theme.breakpoints.down("xs")]: {
            fontSize: 22
        }
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
        fontWeight: 600,
        [theme.breakpoints.down("xs")]: {
            fontSize: 14,
            width: "20%"
        }
    },
    trackHorizontal: {
        backgroundColor: "blue",
        width: "100%",
        left: 0,
        bottom: 0,
        height: "10 !important",
    },
}));

import React, { useRef } from "react";
import {
    Box,
    Button,
    CircularProgress,
    Divider,
    Paper,
    Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useLocation } from "react-router";
import Layout from "../Layout";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Scrollbars from "react-custom-scrollbars";

import { useReactToPrint } from "react-to-print";
import { getCalculationById } from "../../helper/externalCalls";

const CHEAP = 1;
const EXPENSIVE = 0;

export default function Report(props) {
    const location = useLocation();
    React.useEffect(() => {
        setIsLoading(true);
        getCalculationById(
            location.state.id,
            localStorage.getItem("token")
        ).then((response) => {
            setCalculation(response.data);
            setIsLoading(false);
        });
    }, [location.state.id]);

    const classes = useStyles();
    const pdfRef = useRef();
    const [calculation, setCalculation] = React.useState([]);
    const [reportOption, setReportOption] = React.useState(EXPENSIVE);
    const [isLoading, setIsLoading] = React.useState(true);

    const handleExport = useReactToPrint({
        content: () => pdfRef.current,
        documentTitle: `${calculation[reportOption]}-calculation`,
    });

    if (!props.data && !location.state && !location.state.id) {
        return "No data for report";
    }

    return (
        <Layout>
            <Paper className={classes.paper}>
                {isLoading ? (
                    <Box width={"100%"} height={"100vh"} display={"flex"}>
                        <CircularProgress style={{ margin: "auto" }} />
                    </Box>
                ) : (
                    <>
                        <Box
                            height={100}
                            display={"flex"}
                            alignItems={"center"}
                            style={{ background: "white" }}
                            position="relative"
                        >
                            <Typography className={classes.headerText}>
                                Preview
                            </Typography>
                            {calculation.length !== 0 && (
                                <Box className={classes.buttonGroup}>
                                    <Button
                                        className={`${classes.button} ${
                                            reportOption === EXPENSIVE &&
                                            classes.selectedButton
                                        }`}
                                        onClick={() => {
                                            if (reportOption !== EXPENSIVE)
                                                setReportOption(EXPENSIVE);
                                        }}
                                    >
                                        Inkl entreprenadskostnad (+10%)
                                    </Button>
                                    <Button
                                        className={`${classes.button} ${
                                            reportOption === CHEAP &&
                                            classes.selectedButton
                                        }`}
                                        onClick={() => {
                                            if (reportOption !== CHEAP)
                                                setReportOption(CHEAP);
                                        }}
                                    >
                                        Exkl entreprenadskostnad (-10%)
                                    </Button>
                                </Box>
                            )}
                            <Button
                                className={classes.headerButton}
                                size="large"
                                onClick={() => handleExport()}
                            >
                                Export to PDF
                            </Button>
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
                            <div ref={pdfRef}>
                                <Page1
                                    type={calculation[reportOption].type}
                                    title={calculation[reportOption].name}
                                    category={
                                        calculation[reportOption].category
                                    }
                                />
                                <Page2
                                    calculationData={calculation[reportOption]}
                                />
                                <Page3
                                    calculationData={calculation[reportOption]}
                                />
                                <Page4
                                    calculationData={calculation[reportOption]}
                                />
                            </div>
                        </Scrollbars>
                    </>
                )}
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
        left: "2%",
        display: "flex",
        flexBasis: 2,
        width: "15%",
    },
    headerText: {
        fontSize: 26,
        fontWeight: 500,
        marginLeft: theme.spacing(5),
        [theme.breakpoints.down("xs")]: {
            fontSize: 22,
        },
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
        "&:hover": {
            background: "#21344D",
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: 14,
            width: "20%",
        },
    },
    trackHorizontal: {
        backgroundColor: "blue",
        width: "100%",
        left: 0,
        bottom: 0,
        height: "10 !important",
    },
    button: {
        border: "1px solid black",
        background: "white",
        borderRadius: "8px",
        boxShadow: "0px 1px 6px rgba(96, 96, 96, 0.25)",
        color: "black",
        fontWeight: 600,
        flex: 1,
        width: "50%",
    },
    selectedButton: {
        background: "#21344D",
        color: "white",
        "&:hover": {
            background: "#21344D",
        },
    },
    buttonGroup: {
        position: "absolute",
        left: "25%",
        right: "25%",
    },
}));

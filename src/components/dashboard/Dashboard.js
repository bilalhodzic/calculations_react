import React from "react";
import Layout from "../Layout";
import {
    Paper,
    Divider,
    Box,
    CircularProgress,
    Hidden,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import NoCalculations from "./NoCalculations";
import { useHistory } from "react-router";
import { icons } from "../../helper/CategoryIcons";
import DashboardCard from "./DashboardCard";
import { getLatestCalculations } from "../../helper/externalCalls";
import types from "../../helper/data.json";
import { useTranslation } from "react-i18next";

export default function Dashboard() {
    const classes = useStyles();
    const history = useHistory();

    const [latestCalc, setLatestCalc] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const { t } = useTranslation();

    if (!localStorage.getItem("token")) {
        history.push("/");
    }
    const token = localStorage.getItem("token");

    React.useEffect(() => {
        try {
            getLatestCalculations(token).then((data) => {
                setLatestCalc(data.data);
                setIsLoading(false);
            });
        } catch (err) {
            setIsLoading(false);
        }
    }, []);

    const handleCardClick = (index) => {
        history.push({
            pathname: "/report",
            state: { id: latestCalc[index].id },
        });
    };

    const latestCalculationItems = latestCalc.map((el, index) => {
        return (
            <DashboardCard
                name={el.name}
                icon={icons()[el.category] || "?"}
                price={el.totalInclVat}
                category={types.by_id[el.category].value}
                handleCardClick={handleCardClick}
                value={index}
            ></DashboardCard>
        );
    });
    const rows = [];
    for (let i = 0; i < latestCalculationItems.length; i += 3) {
        rows.push(
            <Box className={classes.root}>
                {latestCalculationItems[i]}
                {i + 1 < latestCalculationItems.length &&
                    latestCalculationItems[i + 1]}
                {i + 2 < latestCalculationItems.length &&
                    latestCalculationItems[i + 2]}
            </Box>
        );
    }

    const responsiveRows = [];
    for (let i = 0; i < latestCalculationItems.length; i += 2) {
        responsiveRows.push(
            <Box className={classes.root}>
                {latestCalculationItems[i]}
                {i + 1 < latestCalculationItems.length &&
                    latestCalculationItems[i + 1]}
            </Box>
        );
    }

    return (
        <Layout>
            <Paper elevation={5} className={classes.paper}>
                {t("Latest calculations.1")}
                <Divider className={classes.divider} />
                {latestCalc.length !== 0 ? (
                    <>
                        <Hidden xsDown>{rows.map((e) => e)}</Hidden>
                        <Hidden smUp>
                            {responsiveRows.map((e) => e)}
                        </Hidden>
                    </>
                ) : !isLoading ? (
                    <NoCalculations />
                ) : (
                    <CircularProgress
                        style={{
                            marginLeft: "50%",
                            marginRight: "50%",
                            marginTop: "25%",
                        }}
                    />
                )}
            </Paper>
        </Layout>
    );
}

//add new styles here
const useStyles = makeStyles((theme) => ({
    paper: {
        margin: theme.spacing(5),
        borderRadius: 7,
        padding: theme.spacing(5),
        paddingLeft: theme.spacing(8),
        paddingRight: theme.spacing(8),
        fontSize: "3.2vh",
        fontFamily: "Poppins",
        color: "black",
        fontWeight: 500,
        display: "flex",
        flexDirection: "column",
        width: "85%",
        height: "70vh",
        overflow: "auto",
        [theme.breakpoints.down("xs")]: {
            margin: "auto",
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
        },
    },
    divider: {
        height: 2,
        color: "#686868",
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    calcBoxes: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: theme.spacing(3),
    },
    menuItem: {
        width: "17vw",
        height: "30vh",
        boxShadow: "0px 6px 14px 3px rgba(186, 186, 186, 0.28)",
        borderRadius: 15,
        fontSize: "1.6vh",
        fontWeight: 600,
        position: "relative",
        textAlign: "center",
        "&:hover": {
            cursor: "pointer",
        },
        margin: theme.spacing(2),
        [theme.breakpoints.down("xs")]: {
            width: "19vh",
            height: "28vh",
        },
    },
    menuIcon: {
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "17%",
        paddingTop: theme.spacing(3),
        width: "10vw",
        height: "10vh",
    },
    menuName: {
        fontWeight: 600,
        margin: 8,
        fontSize: "1.9vh",
    },
    root: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        height: "40%",
        [theme.breakpoints.down("xs")]: {
            // flexDirection: "column",
            // display: "inline-flex",
            "&>*": {
                margin: 10,
            },
        },
    },
    icon: {
        transform: "scale(2)",
        [theme.breakpoints.down("xs")]: {
            transform: "scale(1)",
        },
    },
}));

import React from "react";
import Layout from "../Layout";
import { Paper, Divider, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import NoCalculations from "./NoCalculations";
import { useHistory, useLocation } from "react-router";
import { icons } from "../../helper/CategoryIcons";
import DashboardCard from "./DashboardCard";
import { getLatestCalculations } from "../../helper/externalCalls";
import types from "../../helper/data.json";
import { GridLoadIcon } from "@material-ui/data-grid";

export default function Dashboard() {
    const classes = useStyles();
    const history = useHistory();

    const [latestCalc, setLatestCalc] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    const location = useLocation();

    if(!location.state || !location.state.token){
        history.push("/");
    }
    const token = location.state.token;

    React.useEffect(async () => {
        setLatestCalc((await getLatestCalculations(token)).data);
        setIsLoading(false);
    }, []);

    const handleCardClick = (index) => {
        console.log(index);
        history.push({ pathname: "/report", state: { data: latestCalc[index], token: token } });
    };

    const latestCalculationItems = latestCalc.map((el, index) => {
        return (
            <DashboardCard name={el.name} icon={icons[el.category]} price={el.totalInclVat} category={types.by_id[el.category].value} handleCardClick={handleCardClick} value={index} ></DashboardCard>
        );
    });
    const rows = [];
    for (let i = 0; i < latestCalculationItems.length; i+=3) {
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

    return (
        <Layout token={token}>
            <Paper elevation={5} className={classes.paper}>
                Latest Calculations
                <Divider className={classes.divider} />
                {latestCalc.length != 0 ? (
                    rows.map((e) => e)
                ) :(!isLoading ? (
                    <NoCalculations />
                ) : <GridLoadIcon/>)}
            </Paper>
        </Layout>
    );
}

//add new styles here
const useStyles = makeStyles((theme) => ({
    paper: {
 //       height: "72vh",
        margin: theme.spacing(5),
        borderRadius: 7,
        padding: theme.spacing(5),
        paddingLeft: theme.spacing(8),
        paddingRight: theme.spacing(8),

        //maxHeight: "80vh",
        fontSize: 31,
        fontFamily: "Poppins",
        color: "black",
        fontWeight: 500,
//        minWidth: 600,
        position: "absolute",
        bottom: "-90vh",
        top: "-5vh",
        left: 0,
        right: 0,
        [theme.breakpoints.down("xs")]: {
            margin: theme.spacing(1),
            marginBottom: -10,
            bottom: "-103vh"
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
        fontSize: 15,
        fontWeight: 600,
        position: "relative",
        textAlign: "center",
        "&:hover": {
            cursor: "pointer",
        },
        margin: theme.spacing(2),
        [theme.breakpoints.down("xs")]: {
            width: "19vh",
            height: "28vh"
        }
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
        fontSize: 18
    },
    root: {
        display: "flex",
        justifyContent: "center",
        [theme.breakpoints.down("xs")]: {
            flexDirection: "column",
            display: "inline-flex",
            "&>*": {
                margin: 10,
            },
        },
    },
    icon: {
        transform: "scale(2)",
        [theme.breakpoints.down("xs")]: {
            transform: "scale(1)"
        }
    },
}));

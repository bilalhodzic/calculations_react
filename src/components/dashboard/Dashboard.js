import React from "react";
import Layout from "../Layout";
import { Paper, Divider, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { BuildingIcon } from "../svgIcons/BuildingIcon";
import { HospitalIcon } from "../svgIcons/HospitalIcon";
import { SchoolIcon } from "../svgIcons/SchoolIcon";
import { HotelIcon } from "../svgIcons/HotelIcon";

import NoCalculations from "./NoCalculations";
import ColoredBox from "../ColoredBox";

const initialData = [
    {
        name: "Building in Stockholm Sweden",
        price: "1.854.456",
        icon: <BuildingIcon color="#21344D" size={49} />,
        type: "Building",
        color: "#0EBD00",
        backgroundColor: "#9BFF93",
    },
    {
        name: "Hospital in Stockholm Sweden",
        price: "2.854.456",
        icon: <HospitalIcon color="#21344D" size={49} />,
        type: "Hospital",
        color: "#ff4100",
        backgroundColor: "#FFcebd",
    },
    {
        name: "School in Stockholm Sweden",
        price: "854.456",
        icon: <SchoolIcon color="#21344D" size={49} />,
        type: "School",
        color: "#00adff",
        backgroundColor: "#b4e7ff",
    },
    {
        name: "School in Norway",
        price: "1.054.456",
        icon: <SchoolIcon color="#21344D" size={49} />,
        type: "School",
        color: "#00adff",
        backgroundColor: "#b4e7ff",
    },
    {
        name: "Hotel in Stockholm Sweden",
        price: "4.854.456",
        icon: <HotelIcon color="#21344D" size={49} />,
        type: "Hotel",
        color: "#3F75BD",
        backgroundColor: "#C2DCFF",
    },
];

export default function Dashboard() {
    const [totalBuildings, setTotalBuildings] = React.useState(32456);
    const [totalHospital, setTotalHospital] = React.useState(15256);
    const [totalSchool, setTotalSchool] = React.useState(15256);
    const [latestCalc, setLatestCalc] = React.useState(initialData);
    const [calculations, setCalculations] = React.useState([]);

    React.useEffect(() => {
        //call function while first time render
    }, []);

    const classes = useStyles();

    const latestCalculationItems = latestCalc.map((el, index) => {
        return (
            <Box className={classes.menuItem} key={index}>
                <Box className={classes.menuIcon}>{el.icon}</Box>
                <Typography style={{ fontWeight: 600, margin: 8 }}>
                    {el.name}
                </Typography>
                <Typography
                    style={{ color: "#6B6B6B", fontSize: 13.69, margin: 10 }}
                >
                    {el.price}$
                </Typography>

                <ColoredBox
                    color={el.color}
                    backgroundcolor={el.backgroundColor}
                    text={el.type}
                    position="absolute"
                />
            </Box>
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
        <Layout>
            <Paper elevation={5} className={classes.paper}>
                Latest Calculations
                <Divider className={classes.divider} />
                {latestCalc.length != 0 ? (
                    rows.map((e) => e)
                ) : (
                    <NoCalculations />
                )}
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
            minWidth: 0,
            fontSize: 23,
            height: "100%",
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
        width: 207,
        height: 200,
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
    },
    menuIcon: {
        paddingTop: theme.spacing(3),
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
}));

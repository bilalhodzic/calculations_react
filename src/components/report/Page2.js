import React from "react";
import { Box, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import types from "../../helper/data.json";

const mainData = [
    {
        label: "Projektets nummer",
        property: "projectNumber",
    },
    {
        label: "Område",
        property: "location",
    },
    {
        label: "Inom tätort?",
        property: "urbanArea",
        margin: true,
    },
    {
        label: "Produktionsstart planerad",
        property: "startDate",
        date: true,
    },
    {
        label: "Produktionen kommer att pågå",
        property: "years",
        property2: "months",
    },
    {
        label: "Kalkyleringens underlag/ritningar",
        property: "architectDate",
        margin: true,
        date: true,
    },
    {
        label: "Beräkning av nyckeltal har tagits fram",
        property: "dateCalculated",
        date: true,
    },
    {
        label: "Beräkningen av nyckeltal har tagits fram av",
        property: "projectLeadName",
    },
];

const dataLeft = [
    {
        label: "BOA m2",
        property: "boa",
        meter: true,
    },
    {
        label: "Lätt BTA m2",
        property: "lightBta",
        meter: true,
    },
    {
        label: "Mörk BTA m2",
        property: "darkBta",
        meter: true,
    },
    {
        label: "Totalt BTA m2",
        property: "lightBta",
        property2: "darkBta",
        margin: true,
        meter: true,
    },
];

const dataRight = [
    {
        label: "LOA m2",
        property: "loa",
        meter: true,
    },
    {
        label: "Antal lägenheter",
        property: "apartmentNumber",
    },
    {
        label: "Antal wcs/duschar/bad",
        property: "bathNumber",
    },
    {
        label: "Antal toaletter",
        property: "toiletNumber",
        margin: true,
    },
];

export default function Page2(props) {
    React.useEffect(() => {
        //call function while first time render
    }, []);

    const classes = useStyles();
    const calculationData = props.calculationData;

    const mainDataItems = setData(mainData, calculationData, 2, classes);
    const itemsLeft = getCalculatedData(dataLeft, calculationData, classes);
    const itemsRight = getCalculatedData(dataRight, calculationData, classes);
    const itemStandards = getStandards(calculationData, classes);

    return (
        <Paper variant="outlined" className={classes.paper}>
            <Typography>{calculationData.name}</Typography>
            <Typography className={classes.title}>
                Grundläggande information
            </Typography>
            {mainDataItems.map((e) => e)}
            <Box className={classes.root}>
                <Box className={classes.side} style={{ marginRight: 20 }}>
                    {itemsLeft.map((e) => e)}
                </Box>
                <Box className={classes.side}>{itemsRight.map((e) => e)}</Box>
            </Box>
            <Box
                display={"flex"}
                flexDirection={"column"}
                width={"100%"}
                style={{ marginTop: "10%" }}
            >
                {itemStandards}
            </Box>
        </Paper>
    );
}

function setData(data, calculationData, padding, classes) {
    const items = [];
    for (const entry of data) {
        const style = {
            marginBottom: entry.margin ? 30 : 0,
        };
        if (entry.property2) {
            items.push(
                <Box
                    display={"flex"}
                    flexDirection={"row"}
                    paddingTop={padding}
                    style={style}
                >
                    <Typography className={classes.label}>
                        {entry.label}:
                    </Typography>
                    <Typography
                        className={classes.value}
                        style={{ marginLeft: 10 }}
                    >
                        {calculationData[entry.property]} years and{" "}
                        {calculationData[entry.property2]} months
                    </Typography>
                </Box>
            );
            continue;
        }
        const value =
            calculationData[entry.property] ||
            calculationData[entry.property] === false
                ? entry.date
                    ? formatDate(calculationData[entry.property])
                    : calculationData[entry.property].toLocaleString()
                : "/";
        items.push(
            <Box
                display={"flex"}
                flexDirection={"row"}
                paddingTop={padding}
                style={style}
            >
                <Typography className={classes.label}>
                    {entry.label}:
                </Typography>
                <Typography
                    className={classes.value}
                    style={{ marginLeft: 10 }}
                >
                    {value} {entry.meter && value !== "/" && "m2"}
                </Typography>
            </Box>
        );
    }
    return items;
}

function formatDate(date) {
    const today = new Date(date);

    return (
        today.getFullYear() +
        "/" +
        (today.getMonth() + 1).toString().padStart(2, "0") +
        "/" +
        today.getDate().toString().padStart(2, "0")
    );
}

function getCalculatedData(data, calculationData, classes) {
    const items = [];
    for (const entry of data) {
        const value =
            calculationData[entry.property] ||
            calculationData[entry.property] === false
                ? calculationData[entry.property2]
                    ? (
                          calculationData[entry.property] +
                          calculationData[entry.property2]
                      ).toLocaleString()
                    : calculationData[entry.property].toLocaleString()
                : "/";
        items.push(
            <Box display={"flex"} flexDirection={"row"}>
                <Box style={{ width: "80%" }}>
                    <Typography className={classes.label}>
                        {entry.label}
                    </Typography>
                </Box>
                <Box style={{ width: "20%" }}>
                    <Typography className={classes.value}>
                        {value} {value !== "/" && entry.meter && "m2"}
                    </Typography>
                </Box>
            </Box>
        );
    }
    return items;
}

function getStandards(calculationData, classes) {
    return (
        <>
            <Box display={"flex"} flexDirection={"column"}>
                <Box display={"flex"} flexDirection={"row"}>
                    <Typography className={classes.label}>
                        Intern standard:
                    </Typography>
                    <Typography
                        style={{ marginLeft: "2%" }}
                        className={classes.value}
                    >
                        {types.standard[calculationData.internalStandard]}
                    </Typography>
                </Box>
                <Typography
                    style={{ marginTop: "1%" }}
                    className={classes.details}
                >
                    (Standard mellan normal och högnormal design med större
                    inslag av värdehöjande delar. Normalt materialval som ligger
                    i genomsnitt i materialprisklassen med enstaka värdehöjande
                    delar. Uppfyller betydligt högre krav än BBR-kraven.)
                </Typography>
            </Box>
            <Box
                display={"flex"}
                flexDirection={"column"}
                style={{ marginTop: "5%" }}
            >
                <Box display={"flex"} flexDirection={"row"}>
                    <Typography className={classes.label}>
                        Extern standard:
                    </Typography>
                    <Typography
                        style={{ marginLeft: "2%" }}
                        className={classes.value}
                    >
                        {types.standard[calculationData.externalStandard]}
                    </Typography>
                </Box>
                <Typography
                    style={{ marginTop: "1%" }}
                    className={classes.details}
                >
                    (Standard mellan normal och högnormal design med större
                    inslag av värdehöjande delar. Normalt materialval som ligger
                    i genomsnitt i materialprisklassen med enstaka värdehöjande
                    delar. Uppfyller betydligt högre krav än BBR-kraven.)
                </Typography>
            </Box>
        </>
    );
}

//add new styles here
const useStyles = makeStyles((theme) => ({
    root: {
        display: "inline-flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        marginTop: theme.spacing(10),
        [theme.breakpoints.down("xs")]: {
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        },
    },
    side: {
        display: "flex",
        flexDirection: "column",
        width: "50%",
        [theme.breakpoints.down("xs")]: {
            marginRight: 20,
            marginLeft: 0,
            width: "80%",
        },
    },
    paper: {
        height: 1010,
        width: 800,
        marginTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
        marginLeft: "auto",
        marginRight: "auto",
        padding: theme.spacing(5),
        paddingLeft: theme.spacing(8),
        paddingRight: theme.spacing(8),
        [theme.breakpoints.down("xs")]: {
            width: "70%",
        },
    },
    title: {
        marginTop: theme.spacing(7),
        marginBottom: theme.spacing(5),
        fontSize: "3.1vh",
        textAlign: "center",
        color: "#21344D",
        fontWeight: 600,
    },
    label: {
        color: "black",
        fontSize: "1.5vh",
        [theme.breakpoints.down("xs")]: {
            fontSize: 14,
        },
    },
    value: {
        fontSize: "1.5vh",
        color: "#606060",
        [theme.breakpoints.down("xs")]: {
            fontSize: 14,
        },
    },
    dataRight: {
        marginLeft: "10%",
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0,
        },
    },
    details: {
        fontSize: "1.1vh",
        color: "#606060",
        [theme.breakpoints.down("xs")]: {
            fontSize: 10,
        },
    },
}));

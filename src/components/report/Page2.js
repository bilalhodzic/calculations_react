import React from "react";
import { Box, Divider, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import types from "../../helper/data.json";

const mainData = [
    {
        label: "Project number",
        property: "projectNumber",
    },
    {
        label: "Area",
        property: "location",
    },
    {
        label: "Within urban area?",
        property: "urbanArea",
        margin: true,
    },
    {
        label: "Production start planned",
        property: "startDate",
        date: true,
    },
    {
        label: "Production will last",
        property: "years",
        property2: "months",
    },
    {
        label: "Calculculation's basis/drawings",
        property: "architectDate",
        margin: true,
        date: true,
    },
    {
        label: "Key figures calculation has been developed",
        property: "dateCalculated",
        date: true,
    },
    {
        label: "Key figures calculation has been produced by",
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
        label: "BTA m2",
        property: "",
        meter: true,
    },
    {
        label: "BTA m2",
        property: "",
        meter: true,
    },
    {
        label: "Total BTA m2",
        property: "",
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
        label: "Number of apartments",
        property: "apartmentNumber",
        meter: true,
    },
    {
        label: "Number of wcs/showers/baths",
        property: "bathNumber",
        meter: true,
    },
    {
        label: "Number of toilets",
        property: "toiletNumber",
        margin: true,
        meter: true,
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
            <Typography className={classes.title}>Basic information</Typography>
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
            marginBottom: entry.margin ? 40 : 0,
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
                        style={{marginLeft: 10}}
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
                    ? new Date(calculationData[entry.property]).toLocaleDateString("en-GB")
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
                    style={{marginLeft: 10}}
                >
                    {value} {entry.meter && value !== "/" && "m2"}
                </Typography>
            </Box>
        );
    }
    return items;
}

function getCalculatedData(data, calculationData, classes) {
    const items = [];
    for (const entry of data) {
        const value = entry.standard
            ? types.standard[calculationData[entry.property]]
            : calculationData[entry.property] ||
              calculationData[entry.property] === false
            ? calculationData[entry.property].toLocaleString()
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
                        {value} {value !== "/" && "m2"}
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
                        Internal standard:
                    </Typography>
                    <Typography style={{ marginLeft: "2%"}} className={classes.value}>
                        {types.standard[calculationData.internalStandard]}
                    </Typography>
                </Box>
                <Typography
                    style={{ marginTop: "1%" }}
                    className={classes.details}
                >
                    (Standard between normal and highNormal design with larger
                    elements of value-enhancing parts. Normal material selection
                    that is in the average in the material price range with
                    single value-enhancing parts. Meets significantly higher
                    requirements than BBR requirements.)
                </Typography>
            </Box>
            <Box
                display={"flex"}
                flexDirection={"column"}
                style={{ marginTop: "5%" }}
            >
                <Box display={"flex"} flexDirection={"row"}>
                    <Typography className={classes.label}>
                        External standard:
                    </Typography>
                    <Typography style={{ marginLeft: "2%"}} className={classes.value}>
                        {types.standard[calculationData.externalStandard]}
                    </Typography>
                </Box>
                <Typography
                    style={{ marginTop: "1%" }}
                    className={classes.details}
                >
                    (Standard between normal and highNormal design with larger
                    elements of value-enhancing parts. Normal material selection
                    that is in the average in the material price range with
                    single value-enhancing parts. Meets significantly higher
                    requirements than BBR requirements.)
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
        marginTop: theme.spacing(15),
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
            width: "80%"
        }
    },
    paper: {
        height: 1100,
        width: 800,
        marginTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
        marginLeft: "auto",
        marginRight: "auto",
        padding: theme.spacing(5),
        paddingLeft: theme.spacing(8),
        paddingRight: theme.spacing(8),
        [theme.breakpoints.down("xs")]: {
            width: "70%"
        }
    },
    title: {
        marginTop: theme.spacing(7),
        marginBottom: theme.spacing(5),
        fontSize: 30,
        textAlign: "center",
        color: "#21344D",
        fontWeight: 600,
    },
    label: {
        color: "black",
        fontSize: 16,
        [theme.breakpoints.down("xs")]: {
            fontSize: 14
        }
    },
    value: {
        fontSize: 16,
        color: "#606060",
        [theme.breakpoints.down("xs")]: {
            fontSize: 14,
        }
    },
    dataRight: {
        marginLeft: "10%",
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0
        }
    },
    details: {
        fontSize: 12,
        color: "#606060",
        [theme.breakpoints.down("xs")]: {
            fontSize: 10
        }
    }
}));

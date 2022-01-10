import React from "react";
import { Box, Divider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import types from "../../helper/data.json";

const dataLeft = [
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
    },
    {
        label: "Production start planned",
        property: "startDate",
    },
    {
        label: "Production will last",
        property: "years",
        property2: "months",
    },
    {
        label: "Key figures calculation has been developed",
        property: "architectDate",
    },
    {
        label: "Key figures calculation has been produced by",
        property: "projectLeadName",
    },
];

const dataRight = [
    {
        label: "BOA m2",
        property: "boa",
        meter: true
    },
    {
        label: "BTA m2",
        property: "",
        meter: true
    },
    {
        label: "BTA m2",
        property: "",
        meter: true
    },
    {
        label: "Total BTA m2",
        property: "",
        margin: true,
        meter: true
    },
    {
        label: "LOA m2",
        property: "loa",
        meter: true
    },
    {
        label: "Number of apartments",
        property: "apartmentNumber",
        meter: true
    },
    {
        label: "Number of wcs/showers/baths",
        property: "bathNumber",
        meter: true
    },
    {
        label: "Number of toilets",
        property: "toiletNumber",
        margin: true,
        meter: true
    },
    {
        label: "Internal standard",
        property: "internalStandard",
        standard: true,
    },
    {
        label: "External standard",
        property: "externalStandard",
        standard: true,
    },
];

export default function Page1(props) {
    React.useEffect(() => {
        //call function while first time render
    }, []);

    const classes = useStyles();
    const calculationData = props.calculationData;

    console.log(calculationData);

    const itemsLeft = setData(dataLeft, calculationData, 5);
    const itemsRight = setData(dataRight, calculationData, 2);

    return (
        <Box className={classes.root}>
            <Box className={classes.side} style={{ left: "5%", borderRight: "1px solid #D3D3D3", paddingRight: "10%" }}>
                {itemsLeft.map((e) => e)}
            </Box>
            <Box className={classes.side} style={{ right: "20%" }}>
                {itemsRight.map((e) => e)}
            </Box>
        </Box>
    );
}

function setData(data, calculationData, padding) {
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
                    <Typography style={{ fontWeight: "bold", fontSize: 18 }}>
                        {entry.label}:
                    </Typography>
                    <Typography style={{ marginLeft: 10, fontSize: 18, color: "#606060" }}>
                        {calculationData[entry.property]} years and{" "}
                        {calculationData[entry.property2]} months
                    </Typography>
                </Box>
            );
            continue;
        }
        const value = entry.standard
            ? types.standard[calculationData[entry.property]]
            : (calculationData[entry.property] || calculationData[entry.property] === false)
            ? calculationData[entry.property].toLocaleString()
            : "/";
        items.push(
            <Box
                display={"flex"}
                flexDirection={"row"}
                paddingTop={padding}
                style={style}
            >
                <Typography style={{ fontWeight: "bold", fontSize: 18 }}>
                    {entry.label}:
                </Typography>
                <Typography style={{ marginLeft: 10, fontSize: 18, color: "#606060" }}>
                    {value} {entry.meter && value !== '/' && "m2"}
                </Typography>
            </Box>
        );
    }
    return items;
}

//add new styles here
const useStyles = makeStyles((theme) => ({
    root: {
        display: "inline-flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: theme.spacing(5),
        [theme.breakpoints.down("xs")]: {
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        },
    },
    side: {
        display: "flex",
        flexDirection: "column",
        position: "absolute",
    },
}));

import React from "react";
import { Container, Button, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useLocation } from "react-router";

const data = [
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
    {
        label: "Boa",
        property: "boa"
    }
];

export default function Report(props) {
    React.useEffect(() => {
        //call function while first time render
    }, []);

    const classes = useStyles();
    const location = useLocation();

    if (!props.data && !location.state && !location.state.data) {
        return "No data for report";
    }

    const calculationData = props.data || location.state.data;

    const items = [];
    for (const entry of data) {
        if (entry.property2) {
            items.push(
                <Box display={"flex"} flexDirection={"row"} paddingTop={2} paddingBottom={2}>
                    <Typography style={{ fontWeight: "bold" }}>
                        {entry.label}:
                    </Typography>
                    <Typography style={{marginLeft: 10}}>{calculationData[entry.property]} years and {calculationData[entry.property2]} months</Typography>
                </Box>
            );
            continue;
        }
        items.push(
            <Box display={"flex"} flexDirection={"row"} paddingTop={2} paddingBottom={2}>
                <Typography style={{ fontWeight: "bold" }}>
                    {entry.label}:
                </Typography>
                <Typography style={{marginLeft: 10}} >{calculationData[entry.property] ? calculationData[entry.property].toString() : "/"}</Typography>
            </Box>
        );
    }

    return <Box className={classes.root}>{items.map((e) => e)}</Box>;
}

//add new styles here
const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
        },
    },
}));

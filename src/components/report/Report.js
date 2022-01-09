import React from "react";
import { Container, Button, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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

    if (!props.data) {
        return "No data for report";
    }

    const items = [];
    for (const entry of data) {
        if (entry.property2) {
            items.push(
                <Box display={"flex"} flexDirection={"row"} paddingTop={2} paddingBottom={2}>
                    <Typography style={{ fontWeight: "bold" }}>
                        {entry.label}:
                    </Typography>
                    <Typography style={{marginLeft: 10}}>{props.data[entry.property]} years and {props.data[entry.property2]} months</Typography>
                </Box>
            );
            continue;
        }
        items.push(
            <Box display={"flex"} flexDirection={"row"} paddingTop={2} paddingBottom={2}>
                <Typography style={{ fontWeight: "bold" }}>
                    {entry.label}:
                </Typography>
                <Typography style={{marginLeft: 10}} >{props.data[entry.property] ? props.data[entry.property].toString() : "/"}</Typography>
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

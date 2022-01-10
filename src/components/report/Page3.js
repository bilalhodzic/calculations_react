import React from "react";
import { Box, Divider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const data = [
    {
        label: "Total kostnad",
        noMoms: "productionExclVat",
        moms: "productionInclVat",
    },
    {
        label: "*Total kostnad vid egen regi",
        noMoms: "",
        moms: "",
        margin: true,
    },
    {
        label: "Kostnad per m2 BOA/LOA",
        noMoms: "productionBoaLoaExclVat",
        moms: "productionBoaLoaInclVat",
    },
    {
        label: "Kostnad per m2 ljus BTA",
        noMoms: "productionLightBtaExclVat",
        moms: "productionLightBtaInclVat",
    },
    {
        label: "Kostnad per m2 total BTA",
        noMoms: "productionTotalBtaExclVat",
        moms: "productionTotalBtaInclVat",
    },
    {
        label: "Kostnad per Igh",
        noMoms: "productionPerIghExclVat",
        moms: "productionPerIghInclVat",
    },
];

export default function Page3(props) {
    const classes = useStyles();
    const calculationData = props.calculationData;

    const items = setData(data, calculationData, classes);

    return (
    <Box>
        <Box className={classes.row} style={{marginTop: "5%"}}>
            <Typography className={classes.valueText}>Endast produktionskostnad</Typography>
        </Box>
        {items.map((e) => e)}
    </Box>
    );
}

function setData(data, calculationData, classes) {
    const items = [];
    items.push(
        <Box className={classes.row} padding={1.5}>
            <Box className={classes.item}>
            </Box>
            <Box className={classes.item}>
                <Typography
                    className={classes.label}
                    style={{ marginLeft: "auto" }}
                >
                    Exclusive moms
                </Typography>
            </Box>
            <Box className={classes.item}>
                <Typography
                    className={classes.label}
                    style={{ marginLeft: "auto" }}
                >
                    Inclusive moms
                </Typography>
            </Box>
        </Box>
    );
    for (const entry of data) {
        const style = {
            marginBottom: entry.margin ? 40 : 0,
        };
        items.push(
            <Box className={classes.row} style={style} padding={0.5}>
                <Box className={classes.item}>
                    <Typography
                        className={classes.label}
                        style={{ marginRight: "auto" }}
                    >
                        {entry.label}
                    </Typography>
                </Box>
                <Box className={classes.item}>
                    <Typography
                        className={classes.valueText}
                        style={{ marginLeft: "auto" }}
                    >
                        {(calculationData[entry.noMoms] || 0).toLocaleString()} kr
                    </Typography>
                </Box>
                <Box className={classes.item}>
                    <Typography
                        className={classes.valueText}
                        style={{ marginLeft: "auto" }}
                    >
                        {(calculationData[entry.moms] || 0).toLocaleString()} kr
                    </Typography>
                </Box>
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
    row: {
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
    item: {
        width: "22%",
        display: "flex",
    },
    side: {
        display: "flex",
        flexDirection: "column",
        position: "absolute",
    },
    label: {
        fontSize: 20,
        color: "#606060"
    },
    valueText: {
        fontSize: 20,
        fontWeight: 600,
    },
}));

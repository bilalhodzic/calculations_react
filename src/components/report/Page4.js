import React from "react";
import { Box, Divider, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ReportTable from "./ReportTable";

const firstTableData = [
    {
        label: "Total kostnad",
        noMoms: "productionExclVat",
        moms: "productionInclVat",
    },
    {
        label: "*Total kostnad vid egen regi",
        noMoms: "",
        moms: "",
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

const secondTableData = [
    {
        label: "Total kostnad",
        noMoms: "clientExclVat",
        moms: "clientInclVat",
        margin: true
    },
    {
        label: "Kostnad per m2 BOA/LOA",
        noMoms: "clientBoaLoaExclVat",
        moms: "clientBoaLoaInclVat",
    },
    {
        label: "Kostnad per m2 ljus BTA",
        noMoms: "clientLightBtaExclVat",
        moms: "clientLightBtaInclVat",
    },
    {
        label: "Kostnad per m2 total BTA",
        noMoms: "clientTotalBtaExclVat",
        moms: "clientTotalBtaInclVat",
    },
    {
        label: "Kostnad per Igh",
        noMoms: "clientPerIghExclVat",
        moms: "clientPerIghInclVat",
    },
];

export default function Page4(props) {
    const classes = useStyles();
    const calculationData = props.calculationData;

    const items = setData(firstTableData, calculationData, classes);

    return (
        <Paper variant="outlined" className={classes.paper}>
            <Typography>{calculationData.name}</Typography>
            <ReportTable style={{marginBottom: "7%", marginTop: "5%"}} data={firstTableData} calculationData={calculationData} title="Endast produktionskostnad"/>
            <ReportTable data={secondTableData} calculationData={calculationData} title="Endast byggherrekostnad"/>
        </Paper>
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
    }
}));

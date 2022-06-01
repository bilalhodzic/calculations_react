import React from "react";
import { Box, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ReportTable from "./ReportTable";

const data = [
    {
        label: "Total kostnad",
        noMoms: "totalExclVat",
        moms: "totalInclVat",
    },
    {
        label: "Kostnad per m2 BOA/LOA",
        noMoms: "totalBoaLoaExclVat",
        moms: "totalBoaLoaInclVat",
    },
    {
        label: "Kostnad per m2 ljus BTA",
        noMoms: "totalLightBtaExclVat",
        moms: "totalLightBtaInclVat",
    },
    {
        label: "Kostnad per m2 total BTA",
        noMoms: "totalTotalBtaExclVat",
        moms: "totalTotalBtaInclVat",
    },
    {
        label: "Kostnad per Igh",
        noMoms: "totalPerIghExclVat",
        moms: "totalPerIghInclVat",
    },
];

export default function Page3(props) {
    const classes = useStyles();
    const calculationData = props.calculationData;

    const costs = getCosts(calculationData, classes);

    return (
        <Paper variant="outlined" className={classes.paper}>
            <Typography>{calculationData.name}</Typography>
            <Typography className={classes.title}>
                Indikerad nyckeltalsberäkning för projektet
            </Typography>
            {costs}
            <ReportTable
                data={data}
                calculationData={calculationData}
                title="Total kostnad (bade byggherre och produktion)"
            ></ReportTable>
            <Box style={{ marginTop: "5%" }}>
                <Typography className={classes.details}>
                    (*Om produktionen planeras att utföras internt där
                    byggavgifter betalas, måste man utgå från sammanställd
                    kostnad specificerad *Total kostnad i sig;. *Observera att
                    kostnader för m2 BOA/LOA, Ljus BTA, total BTA baseras på
                    aggregerade kostnader specificerade Total kostnad och tar
                    inte hänsyn till totala kostnader i egen förvaltning.)
                </Typography>
            </Box>
        </Paper>
    );
}

function getCosts(calculationData, classes) {
    return (
        <Box style={{ marginBottom: "7%" }}>
            <Box display={"flex"} flexDirection={"column"}>
                <Box display={"flex"} flexDirection={"row"}>
                    <Typography className={classes.label}>
                        Utvecklarkostnader:
                    </Typography>
                    <Typography className={classes.value}>{4501}</Typography>
                </Box>
                <Typography className={classes.details}>
                    (Alla utvecklarkostnader som gatu- och utvecklingskostnader
                    utanför tomtgränsen, inteckningar, lagfartskostnader,
                    anslutningskostnader, statliga kostnader, byggnadskredit /
                    ränta, specifikation för specifikationer, utvecklarna andra
                    tjänstemannakostnader som projektledare, designchef,
                    byggledare, kvalitetschef och mer.)
                </Typography>
            </Box>
            <Box
                display={"flex"}
                flexDirection={"column"}
                style={{ marginTop: "5%" }}
            >
                <Box display={"flex"} flexDirection={"row"}>
                    <Typography className={classes.label}>
                        Produktionskostnader:
                    </Typography>
                    <Typography className={classes.value}>{3000}</Typography>
                </Box>
                <Typography className={classes.details}>
                    (Alla produktionskostnader som design för konstruktion,
                    etablering, plasthantering, alla extra kostnader under
                    produktionen, byggavgifter och mer.)
                </Typography>
            </Box>
        </Box>
    );
}

//add new styles here
const useStyles = makeStyles((theme) => ({
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
        marginLeft: "2%",
        fontSize: "1.5vh",
        color: "#606060",
        [theme.breakpoints.down("xs")]: {
            fontSize: 14,
        },
    },
    details: {
        fontSize: "1.1vh",
        color: "#606060",
        marginTop: "1%",
        [theme.breakpoints.down("xs")]: {
            fontSize: 10,
        },
    },
}));

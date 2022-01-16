import React from "react";
import { Box, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import types from "../../helper/data.json";
import ReportTable from "./ReportTable";

const data = [
    {
        label: "Total kostnad",
        noMoms: "totalExclVat",
        moms: "totalInclVat",
    },
    {
        label: "*Total kostnad vid egen regi",
        noMoms: "",
        moms: "",
        margin: true,
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
                Indicated Key Figure Calculation For The Project
            </Typography>
            {costs}
            <ReportTable
                data={data}
                calculationData={calculationData}
                title="Total kostnad (bade byggherre och produktion)"
            ></ReportTable>
            <Box style={{ marginTop: "5%"}}>
                <Typography className={classes.details}>
                    (*If the production is planned to be carried out in-house
                    where construction fees are paid, one must start from
                    compileda cost specified *Total cost on own;. *Please note
                    that costs for m2 BOA/LOA, Ljus BTA, total BTA are based on
                    aggregated costs specified Total cost and do not take into
                    account total costs in own management.)
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
                        Developer costs:
                    </Typography>
                    <Typography className={classes.value}>
                        {4501}
                    </Typography>
                </Box>
                <Typography
                    className={classes.details}
                >
                    (All developer costs such as street and development costs
                    outside the plot boundary, mortgages, title deed costs,
                    connection costs, government costs, building
                    credit/interest, specification for specifications, the
                    developers other civil servant costs such as project
                    manager, design manager, construction manager, quality
                    manager, and more.)
                </Typography>
            </Box>
            <Box
                display={"flex"}
                flexDirection={"column"}
                style={{ marginTop: "5%" }}
            >
                <Box display={"flex"} flexDirection={"row"}>
                    <Typography className={classes.label}>
                        Production costs:
                    </Typography>
                    <Typography className={classes.value}>
                        {3000}
                    </Typography>
                </Box>
                <Typography
                    className={classes.details}
                >
                    (All production costs such as design for construction,
                    establishment, plastics management, all additional costs
                    during production, construction fees, and more.)
                </Typography>
            </Box>
        </Box>
    );
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
        marginLeft: "2%",
        color: "#606060",
        [theme.breakpoints.down("xs")]: {
            fontSize: 14
        }
    },
    details: {
        fontSize: 12,
        color: "#606060",
        marginTop: "1%",
        [theme.breakpoints.down("xs")]: {
            fontSize: 10
        }
    }
}));

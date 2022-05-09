import React from "react";
import { Box, Button, makeStyles, Paper, Typography } from "@material-ui/core";
import { Scrollbars } from "react-custom-scrollbars";

import { ReactComponent as MedalIcon } from "../../images/medalIcon.svg";
import { ReactComponent as ExclusiveIcon } from "../../images/exclusiveIcon.svg";
import { ReactComponent as InfoIcon } from "../../images/infoIcon.svg";
import { useTranslation } from "react-i18next";

const standards = [
    {
        name: "Enkel utformning.\nEnkel materialval som ligger lägst i materialprisintervallet.\nUppfyller inte mer än BBR krav",
        icon: <MedalIcon />,
        value: 1,
    },
    {
        name: "Enkel utformning med inslag av några värdehöjande delar.\nEnkel materialval som ligger lägst i materialprisintervallet med enstaka värdehöjande delar.\nUppfyller inte mer än BBR krav.",
        icon: <MedalIcon />,
        value: 2,
    },
    {
        name: "Normal utformning.\nNormalt materialval som ligger i medel i materialprisintervallet.\nUppfyller generellt något högre krav än BBR krav.",
        icon: <MedalIcon />,
        value: 3,
    },
    {
        name: "Normal utformning med större inslag av värdehöjande delar.\nNormalt materialval som ligger i medel i materialprisintervallet med enstaka värdehöjande delar.\nUppfyller väsentligt högre krav än BBR krav.",
        icon: <MedalIcon />,
        value: 4,
    },
    {
        name: "Projektet formas md hög arkitektoniskt inslag och har generellt värdehöjande och projektspecifika kvalitéer, både invändigt och utvändigt.\nMaterialval som ligger genomgående i högpris materialprisintervallet.\nUppfyller mycket högre krav än BBR krav.",
        icon: <ExclusiveIcon />,
        value: 5,
    },
];

export default function Step5(props) {
    const classes = useStyles();
    const { t } = useTranslation();

    const [indoorSelected, setIndoorSelected] = React.useState(true);
    const [externalStandard, setExternalStandard] = React.useState(
        props.data.externalStandard || 0
    );
    const [internalStandard, setInternalStandard] = React.useState(
        props.data.internalStandard || 0
    );

    if (props.data.type === 2) {
        props.handleChange("externalStandard", 1);
    }

    const paperItems = standards.map((e, index) => {
        return (
            <Box
                className={`${classes.paperBox} ${classes.standardsBoxHeight}`}
            >
                <Paper
                    elevation={4}
                    className={`${classes.standardsSize} ${
                        ((!indoorSelected && index + 1 === externalStandard) ||
                            (indoorSelected &&
                                internalStandard === index + 1)) &&
                        classes.selectedStandard
                    }`}
                    onClick={() => {
                        if (indoorSelected) {
                            props.handleChange("internalStandard", e.value);
                            setInternalStandard(e.value);
                        } else {
                            props.handleChange("externalStandard", e.value);
                            setExternalStandard(e.value);
                        }
                    }}
                >
                    <abbr title={e.name}>
                        <InfoIcon
                            style={{ position: "absolute", right: 5, top: 5 }}
                        />
                    </abbr>
                    {e.icon}
                    <Typography className={classes.standardsText}>
                        {e.value}
                    </Typography>
                </Paper>
            </Box>
        );
    });
    const Row = () => (
        <Box
            className={`${classes.root} ${classes.initialRoot} ${classes.lastRoot}`}
        >
            {paperItems.map((e) => e)}
        </Box>
    );

    return (
        <Box maxHeight={"80vh"} overflow="auto">
            <Scrollbars style={{ width: "100%", height: "45vh" }}>
                <Box className={classes.root}>
                    <Box className={classes.paperBox} style={{ height: 80 }}>
                        <Typography className={classes.paperText}>
                            {t("Choose your standard.1")}
                        </Typography>
                    </Box>
                </Box>
                <Box className={classes.root}>
                    <Box
                        className={`${classes.paperBox} ${classes.buttonGroup}`}
                        style={{ height: 80 }}
                    >
                        <Button
                            className={`${classes.button} ${
                                indoorSelected && classes.selectedButton
                            }`}
                            onClick={() => {
                                setIndoorSelected(true);
                            }}
                        >
                            {props.data.type === 2
                                ? "Standard"
                                : t("Indoor standard.1")}
                        </Button>
                        {props.data.type !== 2 && (
                            <Button
                                className={`${classes.button} ${
                                    !indoorSelected && classes.selectedButton
                                }`}
                                onClick={() => {
                                    setIndoorSelected(false);
                                }}
                            >
                                {t("Outdoor standard.1")}
                            </Button>
                        )}
                    </Box>
                </Box>
                <Row/>
                <Box className={classes.root} style={{ borderTop: "2px solid #21344D", marginTop: "2%", marginLeft: "auto", marginRight: "auto", justifyContent: "space-between", width: "90%"}}>
                    <Typography style={{ marginTop: "1%", fontWeight: "bold"}}>Lägst standard</Typography>
                    <Typography style={{ marginTop: "1%", fontWeight: "bold"}}>Högst standard</Typography>
                </Box>
            </Scrollbars>
        </Box>
    );
}

const useStyles = makeStyles((theme) => ({
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
    paperBox: {
        minWidth: 250,
        height: 140,
        textAlign: "center",
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        border: "4px solid white",
        [theme.breakpoints.down("xs")]: {
            width: 140,
        },
    },
    standardsBoxHeight: {
        minHeight: 150,
        marginTop: theme.spacing(1),
    },
    standardsSize: {
        width: 250,
        minHeight: 150,
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        "&:hover": {
            cursor: "pointer",
            border: "3px solid #21344d",
        },
    },
    selectedStandard: {
        border: "3px solid #21344d",
    },
    standardsText: {
        fontSize: 18,
        fontWeight: 600,
        marginTop: theme.spacing(3),
    },
    paperText: {
        fontSize: 20,
        fontWeight: 600,
        color: "black",
        [theme.breakpoints.down("xs")]: {
            fontSize: 20,
        },
        marginTop: theme.spacing(2),
    },
    buttonGroup: {
        display: "flex",
        flexDirection: "row",
        [theme.breakpoints.down("xs")]: {
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        },
    },
    button: {
        width: 400,
        height: 50,
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "black",
        backgroundColor: "white",
        color: "#21344d",
        fontWeight: "1000",
        fontSize: 18,
        "&:hover": {
            color: "white",
            backgroundColor: "#21344d",
        },
        margin: theme.spacing(1),
        textTransform: "none",
        [theme.breakpoints.down("xs")]: {
            width: "50vw",
        },
    },
    selectedButton: {
        color: "white",
        backgroundColor: "#21344d",
    },
    initialRoot: {
        [theme.breakpoints.down("xs")]: {
            marginTop: theme.spacing(5),
        },
    },
    lastRoot: {
        [theme.breakpoints.down("xs")]: {
            paddingBottom: theme.spacing(8),
        },
    },
}));

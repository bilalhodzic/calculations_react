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
                className={`${classes.card}`}
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
                        <Box className={classes.infoIconContainer}>
                            <InfoIcon />
                        </Box>
                    </abbr>
                    <Box className={classes.paperIcon}>
                        {e.icon}
                    </Box>
                    <Typography className={classes.standardsText}>
                        {e.value}
                    </Typography>
                </Paper>
            </Box>
        );
    });
    const Row = () => (
        <Box
            className={`${classes.row} ${classes.initialRoot} ${classes.lastRoot}`}
        >
            {paperItems.map((e) => e)}
        </Box>
    );

    return (
        <Box maxHeight={"80vh"} overflow="auto">
            <Scrollbars style={{ width: "100%", height: "45vh" }}>
                <Box className={classes.root} style={{ marginTop: "2%"}}>
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
                <Box className={classes.root} style={{ borderTop: "2px solid #21344D", marginTop: "2%", marginLeft: "auto", marginRight: "auto", justifyContent: "space-between", width: "80%", height: "7.5vh"}}>
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
    row: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flexBasis: 5,
        [theme.breakpoints.down("xs")]: {
            flexDirection: "column",
            display: "inline-flex",
            "&>*": {
                margin: 10,
            },
        },
    },
    card: {
        display: "flex",
        width: "10vw",
        height: "14vh",
        marginLeft: "1%",
        marginRight: "1%",
        justifyContent: "center",
        textAlign: "center",
        border: "4px solid white",
        [theme.breakpoints.down("xs")]: {
            width: "80vw",
            height: "20vh"
        }
    },
    paperBox: {
        height: 140,
        justifyContent: "center",
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
        width: "4vw"
    },
    standardsSize: {
        width: "100%",
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
        fontSize: "3.1vh",
        fontWeight: 600,
        color: "black",
        marginTop: "2%",
    },
    paperText: {
        fontSize: "2.1vh",
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
        width: "13vw",
        height: 50,
        borderStyle: "solid",
        borderWidth: 2,
        boxShadow: "0px 1px 6px rgba(96, 96, 96, 0.25)",
        borderRadius: "8px",
        borderColor: "black",
        backgroundColor: "white",
        color: "#21344d",
        fontWeight: "1000",
        fontSize: "1.9vh",
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
    paperIcon: {
        display: "flex",
        flexDirection: "column",
        maxWidth: "30%",
        maxHeight: "40%",
        marginLeft: "7%",
        marginRight: "auto",
        marginTop: "-12%"
    },
    infoIconContainer: {
        position: "absolute",
        top: 5,
        right: 5,
        display: "flex",
        flexDirection: "column",
        maxHeight: "20%",
        maxWidth: "15%"
    }
}));

import React from "react";
import { Box, Button, makeStyles, Paper, Typography } from "@material-ui/core";
import { Scrollbars } from "react-custom-scrollbars";

import { ReactComponent as MedalIcon } from "../../images/medalIcon.svg";
import { ReactComponent as ExclusiveIcon } from "../../images/exclusiveIcon.svg";

const standards = [
    {
        name: "Normal Standard",
        icon: <MedalIcon />,
        value: 1,
    },
    {
        name: "Fourth Standard",
        icon: <MedalIcon />,
        value: 2,
    },
    {
        name: "High Standard",
        icon: <MedalIcon />,
        value: 3,
    },
    {
        name: "Fifth Standard",
        icon: <MedalIcon />,
        value: 4,
    },
    {
        name: "Exclusive Standard",
        icon: <ExclusiveIcon />,
        value: 5,
    },
];

export default function Step5(props) {
    const classes = useStyles();

    const [indoorSelected, setIndoorSelected] = React.useState(true);
    const [externalStandard, setExternalStandard] = React.useState(0);
    const [internalStandard, setInternalStandard] = React.useState(0);

    const paperItems = standards.map((e, index) => {
        return (
            <Box
                className={`${classes.paperBox} ${classes.standardsBoxHeight}`}
            >
                <Paper
                    elevation={4}
                    className={`${classes.standardsSize} ${
                        (!indoorSelected && index + 1 === externalStandard || indoorSelected && internalStandard === index + 1) && classes.selectedStandard
                    }`}
                    onClick={() => {
                        if(indoorSelected){
                            props.handleChange("internalStandard", e.value);
                            setInternalStandard(e.value);
                        }else{
                            props.handleChange("externalStandard", e.value);
                            setExternalStandard(e.value);
                        }
                    }}
                >
                    {e.icon}
                    <Typography className={classes.standardsText}>
                        {e.name}
                    </Typography>
                </Paper>
            </Box>
        );
    });
    const rows = [];
    for (let i = 0; i < paperItems.length; i += 3) {
        rows.push(
            <Box className={`${classes.root} ${i === 0 && classes.initialRoot} ${i + 3 >= paperItems.length && classes.lastRoot}`}>
                {paperItems[i]}
                {i + 1 < paperItems.length && paperItems[i + 1]}
                {i + 2 < paperItems.length && paperItems[i + 2]}
            </Box>
        );
    }

    return (
        <Box maxHeight={"80vh"} overflow="auto">
            <Scrollbars style={{ width: "100%", height: "55vh" }}>
                <Box className={classes.root}>
                    <Box className={classes.paperBox} style={{ height: 80 }}>
                        <Typography className={classes.paperText}>
                            Choose your standard
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
                            Indoor standard
                        </Button>
                        <Button
                            className={`${classes.button} ${
                                !indoorSelected && classes.selectedButton
                            }`}
                            onClick={() => {
                                setIndoorSelected(false);
                            }}
                        >
                            Outdoor standard
                        </Button>
                    </Box>
                </Box>
                {rows.map((e) => e)}
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
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
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
        minWidth: 200,
        minHeight: 150,
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
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
            alignItems: "center"
        }
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
            width: "50vw"
        }
    },
    selectedButton: {
        color: "white",
        backgroundColor: "#21344d",
    },
    initialRoot: {
        [theme.breakpoints.down("xs")]: {
            marginTop: theme.spacing(5)
        }
    },
    lastRoot: {
        [theme.breakpoints.down("xs")]: {
            paddingBottom: theme.spacing(8)
        }
    }
}));

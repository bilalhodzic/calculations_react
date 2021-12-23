import React from "react";
import { Box, Button, makeStyles, Paper, Typography } from "@material-ui/core";
import { Scrollbars } from "react-custom-scrollbars";

import { ReactComponent as MedalIcon } from "../../images/medalIcon.svg";
import { ReactComponent as ExclusiveIcon } from "../../images/exclusiveIcon.svg";

export default function Step5(props) {
    const classes = useStyles();

    return (
        <Box maxHeight={"30em"} overflow="auto">
            <Scrollbars style={{ width: "100%", height: "20em"}}>
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
                        <Button className={classes.button}>
                            Indoor standard
                        </Button>
                        <Button className={classes.button}>
                            Outdoor standard
                        </Button>
                    </Box>
                </Box>
                <Box className={classes.root}>
                    <Box
                        className={`${classes.paperBox} ${classes.standardsBoxHeight}`}
                    >
                        <Paper elevation={4} className={classes.standardsSize}>
                            <MedalIcon />
                            <Typography className={classes.standardsText}>
                                Normal Standard
                            </Typography>
                        </Paper>
                    </Box>
                    <Box
                        className={`${classes.paperBox} ${classes.standardsBoxHeight}`}
                    >
                        <Paper elevation={4} className={classes.standardsSize}>
                            <MedalIcon />
                            <Typography className={classes.standardsText}>
                                Fourth Standard
                            </Typography>
                        </Paper>
                    </Box>
                    <Box
                        className={`${classes.paperBox} ${classes.standardsBoxHeight}`}
                    >
                        <Paper elevation={4} className={classes.standardsSize}>
                            <MedalIcon />
                            <Typography className={classes.standardsText}>
                                High Standard
                            </Typography>
                        </Paper>
                    </Box>
                </Box>
                <Box className={classes.root}>
                    <Box
                        className={`${classes.paperBox} ${classes.standardsBoxHeight}`}
                    >
                        <Paper elevation={4} className={classes.standardsSize}>
                            <MedalIcon />
                            <Typography className={classes.standardsText}>
                                Fifth Standard
                            </Typography>
                        </Paper>
                    </Box>
                    <Box
                        className={`${classes.paperBox} ${classes.standardsBoxHeight}`}
                    >
                        <Paper elevation={4} className={classes.standardsSize}>
                            <ExclusiveIcon />
                            <Typography className={classes.standardsText}>
                                Exclusive Standard
                            </Typography>
                        </Paper>
                    </Box>
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
        },
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
    },
}));

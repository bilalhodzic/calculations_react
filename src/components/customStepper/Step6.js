import React from "react";
import { Box, makeStyles, TextField } from "@material-ui/core";
import { Scrollbars } from "react-custom-scrollbars";

import { ReactComponent as DatePickerIcon } from "../../images/datePickerIcon.svg";

export default function Step6(props) {
    const classes = useStyles();
    return (
        <Box maxHeight={"30em"} overflow="auto">
            <Scrollbars style={{ width: "100%", height: "20em"}}>
                <Box className={classes.root} style={{ marginTop: 2 }}>
                    <Box className={classes.paperBox}>
                        <TextField
                            type="date"
                            label="Start date"
                            onKeyDown={(e) => e.preventDefault()}
                            InputLabelProps={{ shrink: true }}
                        ></TextField>
                    </Box>
                    <Box className={classes.paperBox}>
                        <TextField
                            type="date"
                            label="End date"
                            onKeyDown={(e) => e.preventDefault()}
                            InputLabelProps={{ shrink: true }}
                        ></TextField>
                    </Box>
                </Box>
                <Box className={classes.root}>
                    <Box className={classes.paperBox}>
                        <DatePickerIcon />
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
        width: 250,
        height: 140,
        textAlign: "center",
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        "&:hover": {
            cursor: "pointer",
        },
        [theme.breakpoints.down("xs")]: {
            width: 140,
        },
    },
    paperText: {
        fontSize: 24,
        fontWeight: 600,
        color: "black",
        [theme.breakpoints.down("xs")]: {
            fontSize: 20,
        },
    },
}));

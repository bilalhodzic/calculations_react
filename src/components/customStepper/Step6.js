import React from "react";
import { Box, InputLabel, makeStyles, TextField } from "@material-ui/core";
import { Scrollbars } from "react-custom-scrollbars";

import { ReactComponent as DatePickerIcon } from "../../images/DatePickerIcon.svg";
import { useState } from "react";

export default function Step6(props) {
    const classes = useStyles();

    const [yearsValue, setYearsValue] = useState(0);
    const [monthsValue, setMonthsValue] = useState(0);

    return (
        <Box maxHeight={"80vh"} overflow="auto">
            <Scrollbars style={{ width: "100%", height: "55vh"}}>
                <Box className={classes.root} style={{ marginTop: 2 }}>
                    <Box className={classes.paperBox}>
                        <InputLabel className={classes.label}>Start date</InputLabel>
                        <TextField
                            style={{marginRight: 100}}
                            type="date"
                            onKeyDown={(e) => e.preventDefault()}
                            InputLabelProps={{ shrink: true }}
                            variant="outlined"
                            size="small"
                            onChange={(e) => {
                                props.handleChange("startDate", e.target.value);
                            }}
                        ></TextField>
                    </Box>
                    <Box className={classes.paperBox}>
                        <InputLabel className={classes.label}>Duration - years</InputLabel>
                        <TextField
                            className={classes.numberInput}
                            type="number"
                            size="small"
                            variant="outlined"
                            value={yearsValue}
                            inputProps={{ shrink: true }}
                            onChange={(e) => {
                                let value = parseInt(e.target.value, 10);

                                if(value < 0) value = 0;
                                setYearsValue(value);

                                props.handleChange("years", value);
                            }}
                        ></TextField>
                    </Box>
                    <Box className={classes.paperBox}>
                        <InputLabel className={classes.label}>Duration - months</InputLabel>
                        <TextField
                            type="number"
                            size="small"
                            value={monthsValue}
                            variant="outlined"
                            inputProps={{ shrink: true }}
                            onChange={(e) => {
                                let value = parseInt(e.target.value, 10);

                                if(value < 0) value = 0;
                                if(value > 11) value = 11;
                                setMonthsValue(value);

                                props.handleChange("months", e.target.value);
                            }}
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
    label: {
        textAlign: "start",
        fontWeight: 600,
        marginBottom: theme.spacing(2.5),
        color: "black",
    },
    numberInput: {
        "& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
            "-webkit-appearance": "none"
     }
    }
}));

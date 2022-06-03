import React from "react";
import { Box, InputLabel, makeStyles, TextField } from "@material-ui/core";
import { Scrollbars } from "react-custom-scrollbars";

import { ReactComponent as DatePickerIcon } from "../../images/DatePickerIcon.svg";
import { useState } from "react";

export default function Step6(props) {
    const classes = useStyles();

    const [yearsValue, setYearsValue] = useState(props.data.years || 0);
    const [monthsValue, setMonthsValue] = useState(props.data.months || 0);

    props.handleChange("years", yearsValue);
    props.handleChange("months", monthsValue);

    const todaysDateValue = () => {
        const d = new Date();
        return `${d.getFullYear()}-${(d.getMonth()+1).toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false})}-${d.getDate().toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false})}`;
    }

    return (
        <Box maxHeight={"80vh"} overflow="auto">
            <Scrollbars style={{ width: "100%", height: "45vh"}}>
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
                            defaultValue={props.data.startDate || ""}
                            inputProps={{
                                min: todaysDateValue()
                            }}
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

                                if(e.target.value === ''){
                                    return;
                                }
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

                                if(e.target.value === ''){
                                    return;
                                }
                                props.handleChange("months", value);
                            }}
                        ></TextField>
                    </Box>
                </Box>
                <Box className={classes.paperIcon}>
                    <DatePickerIcon className={classes.svg}/>
                </Box>
            </Scrollbars>
        </Box>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        maxHeight: "50%",
        [theme.breakpoints.down("xs")]: {
            flexDirection: "column",
            alignItems: "center"
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
            width: 210,
        },
    },
    paperText: {
        fontSize: "2.5vh",
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
    },
    svg: {
        [theme.breakpoints.down("xs")]: {
            paddingBottom: theme.spacing(8)
        }
    },
    paperIcon: {
        display: "flex",
        flexDirection: "column",
        maxWidth: "30%",
        maxHeight: "40%",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "2%"
    }
}));

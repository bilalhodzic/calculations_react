import React from "react";
import {
    Box,
    InputAdornment,
    InputLabel,
    makeStyles,
    TextField,
    Typography,
} from "@material-ui/core";
import { Scrollbars } from "react-custom-scrollbars";

import types from "../../helper/data.json";
import { getFieldsNewBuilding, getFieldsRebuilding } from "../../helper/Fields";
import { ReactComponent as InfoIcon } from "../../images/infoIcon.svg";

export default function Step3(props) {
    const classes = useStyles();
    const data = props.data;

    const fields = data.type === types.types.new_production.id ? getFieldsNewBuilding(data.category) : getFieldsRebuilding(data.category);
    const [itemValues, setItemValues] = React.useState(initializeItems(props, fields));

    const formItems = fields.map((entry, index) => {
        return (
            <Box className={classes.paperBox}>
                <InputLabel
                    className={classes.label}
                >
                    {entry.label}{" "}
                    {entry.info ? (
                        <abbr title={entry.info}>
                            <Box className={classes.infoIconContainer}>
                                <InfoIcon
                                    // style={{ height: 12, width: 12, marginLeft: 5 }}
                                />
                            </Box>
                        </abbr>
                    ) : null}
                </InputLabel>

                <TextField
                    size="small"
                    type="number"
                    className={classes.input}
                    placeholder={0}
                    variant="outlined"
                    value={itemValues[index]}
                    onChange={(e) => {
                        let value = parseInt(e.target.value);

                        if(value < 0){
                            value = 0;
                        }
                        const tempArray = [...itemValues];
                        tempArray[index] = value;
                        setItemValues(tempArray);

                        if(e.target.value === ''){
                            return;
                        }
                        props.handleChange(`${entry.id}`, value);
                    }}
                    style={{ position: "absolute", bottom: 0, left: 0, right: 0}}
                    InputProps={
                        entry.isRight
                            ? {
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <Typography
                                                style={{ fontSize: "1.5vh" }}
                                            >
                                                {entry.placeholder}
                                                <sup>{entry.superscript}</sup>
                                            </Typography>
                                        </InputAdornment>
                                    ),
                                    classes: {
                                        adornedEnd: classes.adornedEnd,
                                    },
                                    inputProps: {
                                        min: 0
                                    }
                                }
                            : {
                                inputProps: {
                                    min: 0
                                }
                            }
                    }
                ></TextField>
            </Box>
        );
    });
    let form = [];
    for (let i = 0; i < formItems.length; i += 3) {
        form.push(
            <Box className={`${classes.root} ${i + 3 >= formItems.length && classes.lastRoot}`}>
                {formItems[i]}
                {i + 1 < formItems.length && formItems[i + 1]}
                {i + 2 < formItems.length && formItems[i + 2]}
            </Box>
        );
    }

    return (
        <Box maxHeight={"80vh"} overflow="auto">
            <Scrollbars style={{ width: "100%", height: "45vh"}}>
                {form.map((item) => item)}
            </Scrollbars>
        </Box>
    );
}

function initializeItems(props, fields){
    const array = [];
    fields.forEach((entry) => {
        array.push(props.data[entry.id]);
    });
    return array;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: "65%",
        marginLeft: "auto",
        marginRight: "auto",
        display: "flex",
        alignItems: "center",
        marginTop: theme.spacing(5),
        [theme.breakpoints.down("xs")]: {
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 0
        },
    },
    paperBox: {
        width: 250,
        height: 90,
        textAlign: "center",
        marginLeft: theme.spacing(4),
        marginRight: theme.spacing(4),
        [theme.breakpoints.down("xs")]: {
            width: 200,
            marginTop: theme.spacing(2)
        },
        position: "relative"
    },
    label: {
        textAlign: "start",
        fontWeight: 600,
        marginBottom: theme.spacing(2),
        color: "black",
    },
    labelLong: {
        marginBottom: theme.spacing(1),
    },
    adornedEnd: {
        background: "linear-gradient(-90deg, #F0F2F5 22%, #FFFFFF 22%)",
    },
    lastRoot: {
        [theme.breakpoints.down("xs")]:{
            paddingBottom: theme.spacing(8)
        }
    },
    input: {
        '& input[type=number]': {
            '-moz-appearance': 'textfield'
        },
        '& input[type=number]::-webkit-outer-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0
        },
        '& input[type=number]::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0
        }
    },
    infoIconContainer: {
        position: "absolute",
        top: 0,
        right: 5,
        display: "flex",
        flexDirection: "column",
        maxHeight: "20%",
        maxWidth: "10%"
    }
}));

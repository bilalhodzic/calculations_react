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
    const setData = props.setData;

    const fields = data.type == types.types.new_production.id ? getFieldsNewBuilding(data.category) : getFieldsRebuilding(data.category);
    if(!data.details){
        data.details = {};
    }

    const formItems = fields.map((entry) => {
        return (
            <Box className={classes.paperBox}>
                <InputLabel
                    className={classes.label}
                >
                    {entry.label}{" "}
                    {entry.info ? (
                        <abbr title={entry.info}>
                            <InfoIcon
                                style={{ height: 12, width: 12, marginLeft: 5 }}
                            />
                        </abbr>
                    ) : null}
                </InputLabel>

                <TextField
                    size="small"
                    type="number"
                    placeholder={!entry.isRight ? entry.placeholder : null}
                    variant="outlined"
                    onChange={(e) => {
                        data.details[entry.id] = e.target.value;
                        setData(data);
                    }}
                    style={{ position: "absolute", bottom: 0, left: 0, right: 0}}
                    InputProps={
                        entry.isRight
                            ? {
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <Typography
                                                style={{ fontSize: 14 }}
                                            >
                                                {entry.placeholder}
                                                <sup>{entry.superscript}</sup>
                                            </Typography>
                                        </InputAdornment>
                                    ),
                                    classes: {
                                        adornedEnd: classes.adornedEnd,
                                    },
                                }
                            : null
                    }
                ></TextField>
            </Box>
        );
    });
    let form = [];
    for (let i = 0; i < formItems.length; i += 3) {
        form.push(
            <Box className={classes.root}>
                {formItems[i]}
                {i + 1 < formItems.length ? formItems[i + 1] : null}
                {i + 2 < formItems.length ? formItems[i + 2] : null}
            </Box>
        );
    }

    return (
        <Box maxHeight={"30em"} overflow="auto">
            <Scrollbars style={{ width: "100%", height: "20em"}}>
                {form.map((item) => item)}
            </Scrollbars>
        </Box>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: theme.spacing(5),
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
        height: 90,
        textAlign: "center",
        marginLeft: theme.spacing(4),
        marginRight: theme.spacing(4),
        [theme.breakpoints.down("xs")]: {
            width: 140,
        },
        position: "relative"
    },
    label: {
        textAlign: "start",
        fontWeight: 600,
        marginBottom: theme.spacing(2.5),
        color: "black",
    },
    labelLong: {
        marginBottom: theme.spacing(1),
    },
    adornedEnd: {
        background: "linear-gradient(-90deg, #F0F2F5 22%, #FFFFFF 22%)",
    },
}));

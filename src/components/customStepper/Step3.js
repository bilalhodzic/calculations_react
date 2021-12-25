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

    console.log(data.category);
    const fields = data.type == types.types.new_production.id ? getFieldsNewBuilding(data.category) : getFieldsRebuilding(data.category);
    if(!data.details){
        data.details = {};
    }

    const formItems = fields.map((entry) => {
        return (
            <Box className={classes.paperBox}>
                <InputLabel
                    className={`${classes.label} ${
                        entry.label.length >= 30 && classes.labelLong
                    }`}
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

                <Box position="relative" display="inline-block">
                    <TextField
                        size="small"
                        type="number"
                        placeholder={!entry.isRight ? entry.placeholder : null}
                        variant="outlined"
                        onChange={(e) => {
                            data.details[entry.id] = e.target.value;
                            setData(data);
                        }}
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
        height: 100,
        textAlign: "center",
        marginLeft: theme.spacing(4),
        marginRight: theme.spacing(4),
        [theme.breakpoints.down("xs")]: {
            width: 140,
        },
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
        background: "linear-gradient(-90deg, #E5E5E5 22%, #FFF 22%)",
    },
}));

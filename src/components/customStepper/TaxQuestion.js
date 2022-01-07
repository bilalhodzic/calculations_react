import React from "react";
import {
    Typography,
    Paper,
    RadioGroup,
    FormControlLabel,
    Radio,
    Box,
    FormControl,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "../Layout";
import { ReactComponent as TaxesIcon } from "../../images/TaxesIcon.svg";

export default function TaxQuestion(props) {
    React.useEffect(() => {
        //call function while first time render
    }, []);
    const [withTax, setWithTax] = React.useState(true);
    const classes = useStyles();

    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            marginTop={5}
        >
            <Typography className={classes.text}>
                Da li zelis report sa kamatom ili bez kamate?
            </Typography>
            <FormControl component={"fieldset"}>
                <RadioGroup
                    style={{ marginTop: 30 }}
                    value={withTax}
                    name="radio-buttons-group"
                >
                    <FormControlLabel
                        value={true}
                        control={
                            <Radio
                                checked={withTax}
                                classes={{
                                    root: classes.radio,
                                    checked: classes.checked,
                                }}
                                onClick={(e) => setWithTax(true)}
                            />
                        }
                        label={
                            <Typography className={classes.radioButton}>
                                Prikazi report sa kamatom
                            </Typography>
                        }
                    />
                    <FormControlLabel
                        value={false}
                        control={
                            <Radio
                                checked={!withTax}
                                classes={{
                                    root: classes.radio,
                                    checked: classes.checked,
                                }}
                                onClick={(e) => setWithTax(false)}
                            />
                        }
                        label={
                            <Typography className={classes.radioButton}>
                                Prikazi report bez kamate
                            </Typography>
                        }
                    />
                </RadioGroup>
            </FormControl>
            <TaxesIcon className={classes.icon} />
        </Box>
    );
}

//add new styles here
const useStyles = makeStyles((theme) => ({
    paper: {
        //       height: "72vh",
        margin: theme.spacing(5),
        borderRadius: 7,
        padding: theme.spacing(5),
        paddingLeft: theme.spacing(8),
        paddingRight: theme.spacing(8),

        //maxHeight: "80vh",
        fontSize: 31,
        fontFamily: "Poppins",
        color: "black",
        fontWeight: 500,
        //        minWidth: 600,
        position: "absolute",
        bottom: "-90vh",
        top: "-5vh",
        left: 0,
        right: 0,
        [theme.breakpoints.down("xs")]: {
            margin: theme.spacing(1),
            bottom: "-80vh",
            marginTop: theme.spacing(10),
        },
    },
    text: {
        fontWeight: 600,
        fontSize: 22,
    },
    radioButton: {
        fontSize: 18,
    },
    radio: {
        "&$checked": {
            color: "#21344D",
        },
    },
    checked: {},
    icon: {
        marginTop: theme.spacing(10),
    },
}));

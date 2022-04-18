import { useState } from "react";
import {
    Box,
    Button,
    InputLabel,
    makeStyles,
    MenuItem,
    Select,
    Typography,
} from "@material-ui/core";
import { Scrollbars } from "react-custom-scrollbars";

import { ReactComponent as Step4Icon } from "../../images/step4Icon.svg";
import { useTranslation } from "react-i18next";

export default function Step4(props) {
    const classes = useStyles();
    const {t, i18n} = useTranslation();

    const [selectedIn, setSelectedIn] = useState(props.data.urbanArea);
    const [selectedValue, setSelectedValue] = useState(props.data.location || "");

    const locations = getLocations(t);

    return (
        <Box maxHeight={"80vh"} overflow="auto">
            <Scrollbars style={{ width: "100%", height: "45vh"}}>
                <Box className={classes.root}>
                    <Box className={classes.paperBox} style={{ height: 100 }}>
                        <InputLabel
                            className={`${classes.inputLabel} ${classes.select}`}
                        >
                            {t("Tell us your project's location.1")}
                        </InputLabel>
                        <Select
                            displayEmpty
                            style={{ width: 250 }}
                            variant="outlined"
                            size="small"
                            label="City"
                            value={selectedValue}
                            className={`${classes.select} ${selectedValue === "" && classes.placeholderText}`}
                            onChange={(e) => {
                                props.handleChange("location", e.target.value);
                                setSelectedValue(e.target.value);
                            }}
                        >
                            {locations.map((city) => {
                                return <MenuItem value={city.value} >{city.city}</MenuItem>;
                            })}
                        </Select>
                    </Box>
                    <Box
                        className={classes.paperBox}
                        style={{ width: 430, height: 100 }}
                    ></Box>
                </Box>
                <Box className={classes.root} style={{marginTop: 50}}>
                    <Box className={`${classes.paperBox} ${classes.buttonGroup}`}>
                        <Button
                            className={`${classes.button} ${
                                selectedIn && props.data.urbanArea !== undefined && classes.selectedButton
                            }`}
                            onClick={() => {
                                props.handleChange("urbanArea", true);
                                setSelectedIn(true);
                            }}
                        >
                            {t("In the city.1")}
                        </Button>
                        <Button
                            className={`${classes.button} ${
                                !selectedIn && props.data.urbanArea !== undefined && classes.selectedButton
                            } ${classes.buttonRight}`}
                            onClick={() => {
                                props.handleChange("urbanArea", false);
                                setSelectedIn(false);
                            }}
                        >
                            {t("Outside the city.1")}
                        </Button>
                    </Box>
                    <Box className={classes.paperBox}>
                        <Step4Icon className={classes.svg} />
                    </Box>
                </Box>
            </Scrollbars>
        </Box>
    );
}

function getLocations(t){
    return [
        {
            value: "",
            city: t("City.1")
        },
        {
            value: "Stockholm",
            city: "Stockholm"
        },
        {
            value: "Lulea",
            city: "Lulea"
        },
        {
            value: "Sundsvall",
            city: "Sundsvall"
        },
        {
            value: "Malmo",
            city: "Malmo"
        },
        {
            value: "Goteborg",
            city: "Goteborg"
        },
        {
            value: "Norrkoping",
            city: "Norrkoping"
        },
        {
            value: t("Other.1"),
            city: "Other"
        },
    ];
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        [theme.breakpoints.down("xs")]: {
            flexDirection: "column",
            alignItems: "center"
        },
        marginTop: theme.spacing(2),
    },
    paperBox: {
        minWidth: 250,
        height: 140,
        textAlign: "center",
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.down("xs")]: {
            width: 140,
        },
        display: "inline-block",
    },
    select: {
        //marginRight: theme.spacing(22),
    },
    inputLabel: {
        marginBottom: 20,
        fontSize: 18,
        color: "black",
        fontWeight: "bold",
    },
    button: {
        width: 250,
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
        marginLeft: theme.spacing(8),
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0,
            marginBottom: theme.spacing(2)
        }
    },
    buttonGroup: {
        display: "flex",
        flexDirection: "row",
        textAlign: "center",
        marginLeft: theme.spacing(10),
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0,
            flexDirection: "column",
            marginTop: theme.spacing(-7)
        }
    },
    // buttonRight: {
    //     marginLeft: theme.spacing(5),
    // },
    selectedButton: {
        color: "white",
        backgroundColor: "#21344d",
    },
    svg: {
        marginTop: theme.spacing(-9),
        [theme.breakpoints.down("xs")]: {
            marginTop: theme.spacing(2),
            paddingBottom: theme.spacing(10)
        }
    },
    placeholderText: {
        textAlign: "left",
        color: "grey"
    }
}));

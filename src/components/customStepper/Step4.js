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

const locations = [
    {
        value: 0,
        city: "City"
    },
    {
        value: 1,
        city: "Stockholm"
    },
    {
        value: 2,
        city: "Lulea"
    },
    {
        value: 3,
        city: "Sundsvall"
    },
    {
        value: 4,
        city: "Malmo"
    },
    {
        value: 5,
        city: "Goteborg"
    },
    {
        value: 6,
        city: "Norrkoping"
    },
    {
        value: 7,
        city: "Other"
    },
];

export default function Step4(props) {
    const classes = useStyles();

    const [selectedIn, setSelectedIn] = useState(true);
    const [selectedValue, setSelectedValue] = useState("City");

    props.handleChange("urbanArea", selectedIn);

    return (
        <Box maxHeight={"80vh"} overflow="auto">
            <Scrollbars style={{ width: "100%", height: "55vh"}}>
                <Box className={classes.root}>
                    <Box className={classes.paperBox} style={{ height: 100 }}>
                        <InputLabel
                            className={`${classes.inputLabel} ${classes.select}`}
                        >
                            Tell us yout project's location
                        </InputLabel>
                        <Select
                            displayEmpty
                            style={{ width: 250 }}
                            variant="outlined"
                            size="small"
                            label="City"
                            value={selectedValue}
                            className={`${classes.select} ${selectedValue === "City" && classes.placeholderText}`}
                            onChange={(e) => {
                                props.handleChange("location", e.target.value);
                                setSelectedValue(e.target.value);
                            }}
                        >
                            {locations.map((city) => {
                                return <MenuItem value={city.city} >{city.city}</MenuItem>;
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
                                selectedIn ? classes.selectedButton : ""
                            }`}
                            onClick={() => {
                                props.handleChange("urbanArea", true);
                                setSelectedIn(true);
                            }}
                        >
                            In The City
                        </Button>
                        <Button
                            className={`${classes.button} ${
                                !selectedIn ? classes.selectedButton : ""
                            } ${classes.buttonRight}`}
                            onClick={() => {
                                props.handleChange("urbanArea", false);
                                setSelectedIn(false);
                            }}
                        >
                            Outside The City
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

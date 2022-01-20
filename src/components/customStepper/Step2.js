import React from "react";
import {
    Box,
    createMuiTheme,
    InputLabel,
    makeStyles,
    MuiThemeProvider,
    TextField,
} from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { Scrollbars } from "react-custom-scrollbars";

import { ReactComponent as Step2Icon } from "../../images/step2Icon.svg";

const formLabelsTheme = createMuiTheme({
    overrides: {
        MuiFormLabel: {
            asterisk: {
                color: "#a50021",
            },
        },
    },
});

export default function Step2(props) {
    const classes = useStyles();
    const { t, i18n } = useTranslation();
    const [projectNumber, setProjectNumber] = React.useState(props.data.projectNumber || 0);

    const inputLabelProps = {
        fontSize: 16,
        fontWeight: "bold",
        color: "black",
        textAlign: "start",
        marginLeft: 10,
        marginBottom: 15,
    };

    const inputFields = (
        <>
            <MuiThemeProvider theme={formLabelsTheme}>
                <Box className={classes.root} style={{ marginTop: 20 }}>
                    <Box className={classes.paperBox}>
                        <InputLabel style={inputLabelProps} required>
                            {t("Name your project.1")}
                        </InputLabel>
                        <TextField
                            key={1}
                            placeholder={t("Name your project.1")}
                            variant="outlined"
                            defaultValue={props.data.name || ""}
                            onChange={(e) => {
                                props.handleChange("name", e.target.value);
                            }}
                            className={classes.input}
                        ></TextField>
                    </Box>
                    <Box className={classes.paperBox}>
                        <InputLabel style={inputLabelProps}>
                            {t("Project number.1")}
                        </InputLabel>
                        <TextField
                            key={2}
                            type="number"
                            placeholder={t("Project number.1")}
                            variant="outlined"
                            value={projectNumber}
                            onChange={(e) => {
                                let value = parseInt(e.target.value);

                                if(value < 0){
                                    value = 0;
                                }

                                setProjectNumber(value);
                                if(e.target.value === ''){
                                    return;
                                }
                                props.handleChange(
                                    "projectNumber",
                                    value
                                );
                            }}
                            className={classes.input}
                        ></TextField>
                    </Box>
                    <Box className={classes.paperBox}>
                        <InputLabel style={inputLabelProps}>
                            {t("Responsible project manager.1")}
                        </InputLabel>
                        <TextField
                            key={3}
                            placeholder={t("Responsible project manager.1")}
                            variant="outlined"
                            defaultValue={props.data.projectLeadName || ""}
                            onChange={(e) => {
                                props.handleChange(
                                    "projectLeadName",
                                    e.target.value
                                );
                            }}
                            className={classes.input}
                        ></TextField>
                    </Box>
                </Box>
                <Box className={classes.root}>
                    <Box className={classes.paperBox}>
                        <InputLabel style={inputLabelProps}>
                            {t("Date for drawings and documents.1")}
                        </InputLabel>
                        <TextField
                            key={4}
                            type="date"
                            onKeyDown={(e) => e.preventDefault()}
                            variant="outlined"
                            defaultValue={props.data.architectDate || ""}
                            onChange={(e) => {
                                props.handleChange(
                                    "architectDate",
                                    e.target.value
                                );
                            }}
                            className={classes.input}
                        ></TextField>
                    </Box>
                    <Box className={classes.paperBox}></Box>
                    <Box className={classes.paperBox}>
                        <Step2Icon className={classes.svg} />
                    </Box>
                </Box>
            </MuiThemeProvider>
        </>
    );

    return (
        <Box maxHeight={"80vh"} overflow="auto">
            <Scrollbars style={{ width: "100%", height: "45vh" }}>
                {inputFields}
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
            justifyContent: "center",
            alignItems: "center",
        },
    },
    paperBox: {
        width: 250,
        height: 140,
        textAlign: "center",
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.down("xs")]: {
            width: 200,
        },
    },
    svg: {
        width: 150,
        marginLeft: theme.spacing(10),
        [theme.breakpoints.down("xs")]: {
            marginTop: theme.spacing(-10),
        },
    },
    input: {
        width: "100%",
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
    }
}));

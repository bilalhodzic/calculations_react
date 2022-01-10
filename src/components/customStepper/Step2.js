import {
    Box,
    createMuiTheme,
    InputLabel,
    makeStyles,
    MuiThemeProvider,
    TextField,
} from "@material-ui/core";
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
                            Name your project!
                        </InputLabel>
                        <TextField
                            key={1}
                            placeholder="Project name"
                            variant="outlined"
                            defaultValue={props.data.name || ""}
                            onChange={(e) => {
                                props.handleChange("name", e.target.value);
                            }}
                        ></TextField>
                    </Box>
                    <Box className={classes.paperBox}>
                        <InputLabel style={inputLabelProps}>
                            Project number
                        </InputLabel>
                        <TextField
                            key={2}
                            placeholder="Project number"
                            variant="outlined"
                            defaultValue={props.data.projectNumber || ""}
                            onChange={(e) => {
                                props.handleChange(
                                    "projectNumber",
                                    e.target.value
                                );
                            }}
                        ></TextField>
                    </Box>
                    <Box className={classes.paperBox}>
                        <InputLabel style={inputLabelProps}>
                            Responsible project manager
                        </InputLabel>
                        <TextField
                            key={3}
                            placeholder="Responsible project manager"
                            variant="outlined"
                            defaultValue={props.data.projectLeadName || ""}
                            onChange={(e) => {
                                props.handleChange(
                                    "projectLeadName",
                                    e.target.value
                                );
                            }}
                        ></TextField>
                    </Box>
                </Box>
                <Box className={classes.root}>
                    <Box className={classes.paperBox}>
                        <InputLabel style={inputLabelProps}>
                            Date for drawings and documents
                        </InputLabel>
                        <TextField
                            key={4}
                            placeholder="Date for drawings and documents"
                            variant="outlined"
                            defaultValue={props.data.architectDate || ""}
                            onChange={(e) => {
                                props.handleChange(
                                    "architectDate",
                                    e.target.value
                                );
                            }}
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
            <Scrollbars style={{ width: "100%", height: "55vh" }}>
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
}));

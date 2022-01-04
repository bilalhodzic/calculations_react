import { Box, InputLabel, makeStyles, TextField } from "@material-ui/core";
import { Scrollbars } from "react-custom-scrollbars";

import { ReactComponent as Step2Icon } from "../../images/step2Icon.svg";

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
    return (
        <Box maxHeight={"80vh"} overflow="auto">
            <Scrollbars style={{ width: "100%", height: "55vh"}}>
                <Box className={classes.root} style={{ marginTop: 20 }}>
                    <Box className={classes.paperBox}>
                        <InputLabel style={inputLabelProps} required>
                            Name your project!
                        </InputLabel>
                        <TextField
                            placeholder="Project name"
                            variant="outlined"
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
                            placeholder="Project number"
                            variant="outlined"
                            onChange={(e) => {
                                props.handleChange("projectNumber", e.target.value);
                            }}
                        ></TextField>
                    </Box>
                    <Box className={classes.paperBox}>
                        <InputLabel style={inputLabelProps}>
                            Ansvarig projektledare
                        </InputLabel>
                        <TextField
                            placeholder="Ansvarig projektledare"
                            variant="outlined"
                            onChange={(e) => {
                                props.handleChange("projectSomething", e.target.value);
                            }}
                        ></TextField>
                    </Box>
                </Box>
                <Box className={classes.root}>
                    <Box className={classes.paperBox}>
                        <InputLabel style={inputLabelProps}>
                            Datering på ritningar och underlag
                        </InputLabel>
                        <TextField
                            placeholder="Datering på ritningar och underlag"
                            variant="outlined"
                            onChange={(e) => {
                                props.handleChange("projectAnotherThing", e.target.value);
                            }}
                        ></TextField>
                    </Box>
                    <Box className={classes.paperBox}></Box>
                    <Box className={classes.paperBox}>
                        <Step2Icon className={classes.svg} />
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
        [theme.breakpoints.down("xs")]: {
            width: 140,
        },
    },
    svg: {
        width: 150,
        marginLeft: theme.spacing(10),
    },
}));

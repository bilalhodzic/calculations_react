import { Box, InputLabel, makeStyles, TextField } from "@material-ui/core";
import { Scrollbars } from "react-custom-scrollbars";

import { ReactComponent as Step2Icon } from "../../images/step2Icon.svg";

let projectName = "";
let projectNumber = "";
let projectSomething = "";
let projectAnotherThing = "";

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
            <Box className={classes.root} style={{ marginTop: 20 }}>
                <Box className={classes.paperBox}>
                    <InputLabel style={inputLabelProps} required>
                        Name your project!
                    </InputLabel>
                    <TextField
                        key={1}
                        placeholder="Project name"
                        variant="outlined"
                        defaultValue={""}
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
                        value={projectNumber}
                        onChange={(e) => {
                            projectNumber = e.target.value;
                            props.handleChange("projectNumber", e.target.value);
                        }}
                    ></TextField>
                </Box>
                <Box className={classes.paperBox}>
                    <InputLabel style={inputLabelProps}>
                        Ansvarig projektledare
                    </InputLabel>
                    <TextField
                        key={3}
                        placeholder="Ansvarig projektledare"
                        variant="outlined"
                        value={projectSomething}
                        onChange={(e) => {
                            projectSomething = e.target.value;
                            props.handleChange(
                                "projectSomething",
                                e.target.value
                            );
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
                        key={4}
                        placeholder="Datering på ritningar och underlag"
                        variant="outlined"
                        value={projectAnotherThing}
                        onChange={(e) => {
                            projectAnotherThing = e.target.value;
                            props.handleChange(
                                "projectAnotherThing",
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

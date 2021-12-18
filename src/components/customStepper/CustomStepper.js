import React from "react";
import {
    Button,
    Stepper,
    Step,
    StepLabel,
    Typography,
    StepConnector,
    Hidden,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";

import types from "../../helper/types.json";
import useWindowDimensions from "../windowDimension";
import { useThemeProps } from "@material-ui/data-grid";

const CustomConnector = withStyles({
    alternativeLabel: {
        top: 20,
    },
    active: {
        "& $line": {
            borderColor: "#21344d",
        },
    },
    completed: {
        "& $line": {
            borderColor: "#21344d",
        },
    },
    line: {
        borderColor: "#bababa",
        height: 3,
        borderTopWidth: 3,
    },
})(StepConnector);

export default function CustomStepper(props) {
    const [activeStep, setActiveStep] = React.useState(0);
    const { width } = useWindowDimensions();
    const [newCalculation, setNewCalculation] = React.useState({
        ProjectType: "",
    });
    const steps = [
        "Choose Project Type",
        "Project Info",
        "Project Details",
        "Project Location",
        "Project Standard",
        "Start date and end date",
    ];

    const handleChange = (propName, propValue) => {
        setNewCalculation({ ...newCalculation, [propName]: propValue });
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const SwitchStep = () => {
        console.log("SwitchStep: " + activeStep);
        switch (activeStep) {
            case 0:
                return (
                    <Step1
                        handleChange={handleChange}
                        type={newCalculation.ProjectType}
                    />
                );
            case 1:
                return <Step2 />;
            case 2:
                return <Step3 type={types.forskola}/>;
            case 3:
                return <Step4 />;
            case 4:
                return <Step5 />;
            case 5:
                return <Step6 />;

            default:
                return "nothing";
        }
    };

    const classes = useStyles();
    return (
        <>
            <Typography style={{}} className={classes.stepLabel}>
                {steps[activeStep]}
            </Typography>
            <Stepper
                alternativeLabel={width < 600 ? false : true}
                orientation={width < 600 ? "vertical" : "horizontal"}
                activeStep={activeStep}
                connector={<CustomConnector />}
            >
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel
                            classes={{
                                iconContainer: classes.icon,
                                labelContainer: classes.labelContainer,
                            }}
                        >
                            {width < 600 ? label : ""}
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div className={classes.stepContent}>
                <SwitchStep />
            </div>
            <div className={classes.stepFooter}>
                <Button
                    onClick={handleBack}
                    className={classes.stepBtn}
                    style={{
                        marginLeft: 30,
                        color: "#21344d",
                        visibility: activeStep === 0 ? "hidden" : "initial",
                    }}
                    color="secondary"
                    variant="contained"
                >
                    Previous
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.stepBtn}
                    style={{ marginRight: 30 }}
                    onClick={handleNext}
                >
                    {activeStep === steps.length - 1 ? "Submit" : "Next"}
                </Button>
            </div>
        </>
    );
}

//add new styles here
const useStyles = makeStyles((theme) => ({
    stepBtn: {
        textTransform: "none",
        width: 111,
        borderRadius: 8,
        marginBottom: 10,
    },
    stepFooter: {
        display: "flex",
        justifyContent: "space-between",
        margin: theme.spacing(1),
    },
    stepContent: {
        textAlign: "center",
    },
    stepLabel: {
        fontSize: 31.27,
        color: "black",
        textAlign: "center",
        [theme.breakpoints.down("xs")]: {
            display: "none",
        },
    },
    labelContainer: {
        fontWeight: 600,
        color: "black",
        marginLeft: theme.spacing(3),
        fontSize: 20,
        fontWeight: 600,
    },

    icon: {
        fontSize: 25,
        "& svg": {
            width: 45,
            height: 45,
            zIndex: 2,
            color: "#bababa",
            "& text": {
                fontSize: 10,
            },
            [theme.breakpoints.down("xs")]: {
                width: 30,
                //height: 30,
            },
        },
    },
}));

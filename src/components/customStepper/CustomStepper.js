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

import types from "../../helper/data.json";
import useWindowDimensions from "../windowDimension";
import { useThemeProps } from "@material-ui/data-grid";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

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
    const location = useLocation();
    const [betweenStepsData, setBetweenStepsData] = React.useState({ type: location.state.type });

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
        console.log(betweenStepsData);
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const SwitchStep = () => {
        switch (activeStep) {
            case 0:
                return (
                    <Step1
                        handleChange={handleChange}
                        category={newCalculation.ProjectType}
                        data={betweenStepsData}
                        setData={setBetweenStepsData}
                    />
                );
            case 1:
                return <Step2 data={betweenStepsData} setData={setBetweenStepsData} />;
            case 2:
                return <Step3 data={betweenStepsData} setData={setBetweenStepsData} />;
            case 3:
                return <Step4 data={betweenStepsData} setData={setBetweenStepsData} />;
            case 4:
                return <Step5 data={betweenStepsData} setData={setBetweenStepsData} />;
            case 5:
                return <Step6 data={betweenStepsData} setData={setBetweenStepsData} />;

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
                className={classes.stepper}
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
            <footer className={classes.stepFooter}>
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
            </footer>
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
        height: 40
    },
    stepFooter: {
        display: "flex",
        justifyContent: "space-between",
        background: "white",
        margin: theme.spacing(1),
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        paddingTop: theme.spacing(1),
        boxShadow: "0px -4px 12px rgba(167, 167, 167, 0.25)",
        position: "absolute",
        bottom: -40,
        left: 32,
        right: 32
    },
    stepContent: {
        textAlign: "center",
    },
    stepLabel: {
        fontSize: 26,
        marginTop: theme.spacing(4),
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
    stepper: {
        width: "75%",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: theme.spacing(2)
    }
}));

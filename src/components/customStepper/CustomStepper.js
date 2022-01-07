import React from "react";
import { useHistory } from "react-router";
import {
    Button,
    Stepper,
    Step,
    StepLabel,
    Typography,
    StepConnector,
    Hidden,
    Box,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { ReactComponent as CircleIcon } from "../../images/CircleIcon.svg";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import BetweenStep from "./BetweenStep";

import { newCalculation } from "../../helper/externalCalls";
import types from "../../helper/data.json";
import useWindowDimensions from "../windowDimension";
import { useThemeProps } from "@material-ui/data-grid";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import BetweenStepRebuilding from "./BetweenStepRebuilding";

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
    const history = useHistory();
    const [activeStep, setActiveStep] = React.useState(0);
    const { width } = useWindowDimensions();

    const location = useLocation();
    const betweenStepsData = React.useRef({
        type: location.state.type,
    });

    React.useEffect(() => {
        console.log(activeStep);
        props.emptySteps();
        props.pushStep("New Calculation");
        props.pushStep(
            betweenStepsData.current.type === 1 ? "New Production" : "Rebuilding"
        );
        switch (activeStep) {
            case 1:
            case 3:
            case 4:
            case 5:
                if (
                    [
                        types.category.varmlager,
                        types.category.kalllager,
                        types.category.kyllager,
                    ].includes(betweenStepsData.category)
                ) {
                    props.pushStep("Lager");
                }
                if (betweenStepsData.category) {
                    props.pushStep(betweenStepsData.category.value);
                }
                break;
            case 2:
                props.pushStep("Production Type");
                break;
            default:
        }
    }, [activeStep]);

    const classes = useStyles();
    const steps = [
        {
            label: "Choose Project Type",
            id: 1,
        },
        {
            label: "Choose Project Type",
            id: (
                <CircleIcon
                    className={activeStep !== 0 && classes.doneStep}
                    style={{ height: 30, width: 30, marginTop: 6 }}
                />
            ),
        },
        {
            label: "Project Info",
            id: 2,
        },
        {
            label: "Project Details",
            id: 3,
        },
        {
            label: "Project Location",
            id: 4,
        },
        {
            label: "Project Standard",
            id: 5,
        },
        {
            label: "Start date and end date",
            id: 6,
        },
    ];

    const handleChange = (propName, propValue) => {
        betweenStepsData.current[propName] = propValue;
    }

    const handleNext = () => {
        console.log(betweenStepsData.current);
        const betweenStepsCategories = [
            types.category.lager,
            types.rebuilding.omby,
            types.rebuilding.kontor,
            types.rebuilding.handel,
        ];
        setActiveStep(
            (prevActiveStep) =>
                prevActiveStep +
                1 +
                (prevActiveStep == 0 &&
                    !betweenStepsCategories.includes(
                        betweenStepsData.current.category
                    ) &&
                    1)
        );
    };

    const handleBack = () => {
        const betweenStepsCategories = [
            types.category.varmlager,
            types.category.kalllager,
            types.category.kyllager,
            types.rebuilding.omby,
            types.rebuilding.kontor,
            types.rebuilding.handel,
        ];
        setActiveStep(
            (prevActiveStep) =>
                prevActiveStep -
                1 -
                (prevActiveStep == 2 &&
                    !betweenStepsCategories.includes(
                        betweenStepsData.current.category
                    ) &&
                    1)
        );
    };

    const SwitchStep = () => {
        switch (activeStep) {
            case 0:
                return (
                    <Step1
                        handleChange={handleChange}
                        data={betweenStepsData.current}
                        pageNumber={activeStep}
                    />
                );
            case 1:
                if (betweenStepsData.type === types.types.rebuilding.id) {
                    return (
                        <BetweenStepRebuilding
                            data={betweenStepsData.current}
                            handleChange={handleChange}
                        />
                    );
                }
                return (
                    <BetweenStep
                        handleChange={handleChange}
                        data={betweenStepsData.current}
                    />
                );
            case 2:
                if(!betweenStepsData.current["category"]){
                    setActiveStep(0);
                    return "nothing";
                }
                return (
                    <Step2
                        data={betweenStepsData.current}
                        handleChange={handleChange}
                    />
                );
            case 3:
                if(!betweenStepsData.current["name"] || betweenStepsData.current["name"].trim() === ""){
                    setActiveStep(2);
                    return "nothing";
                }
                return (
                    <Step3
                        data={betweenStepsData.current}
                        handleChange={handleChange}
                    />
                );
            case 4:
                return (
                    <Step4
                        data={betweenStepsData.current}
                        handleChange={handleChange}
                    />
                );
            case 5:
                if(!betweenStepsData.current["location"]){
                    setActiveStep(4);
                    return "nothing";
                }
                return (
                    <Step5
                        data={betweenStepsData.current}
                        handleChange={handleChange}
                    />
                );
            case 6:
                if(!betweenStepsData.current["internalStandard"] || !betweenStepsData.current["externalStandard"]){
                    setActiveStep(5);
                    return "nothing";
                }
                return (
                    <Step6
                        data={betweenStepsData.current}
                        handleChange={handleChange}
                    />
                );
            case 7:
                if(!betweenStepsData.current["startDate"]){
                    setActiveStep(6);
                    return "nothing";
                }
                console.log(`Data: ${JSON.stringify(betweenStepsData.current)}`);
                let id = 0;
                if(betweenStepsData.current["category"]){
                    id = betweenStepsData.current["category"].id;
                    handleChange("category", id);
                    newCalculation(betweenStepsData.current);
                }
                history.push("/tax");

            default:
                return "nothing";
        }
    };

    return (
        <>
            <Typography style={{}} className={classes.stepLabel}>
                {steps[activeStep] && steps[activeStep].label}
            </Typography>
            <Stepper
                alternativeLabel={width < 600 ? false : true}
                orientation={width < 600 ? "vertical" : "horizontal"}
                activeStep={activeStep}
                connector={<CustomConnector />}
                className={classes.stepper}
            >
                {steps.map((e, index) => (
                    <Step key={e.label}>
                        <StepLabel
                            icon={e.id}
                            classes={{
                                iconContainer: `${classes.icon}`,
                                labelContainer: classes.labelContainer,
                            }}
                        >
                            {width < 600 ? e.label : ""}
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
        height: 40,
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
        right: 32,
        [theme.breakpoints.down("xs")]: {
            left: 0,
            right: 0
        }
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
        //marginBottom: theme.spacing(1),
    },
    doneStep: {
        filter: "brightness(0) saturate(100%) invert(15%) sepia(9%) saturate(3603%) hue-rotate(175deg) brightness(91%) contrast(86%)",
    },
}));

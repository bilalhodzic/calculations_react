import React from "react";
import { useHistory } from "react-router";
import { useTranslation } from "react-i18next";
import {
    Button,
    Stepper,
    Step,
    StepLabel,
    Typography,
    StepConnector,
    Hidden,
    Box,
    CircularProgress,
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
import ValidateData from "../../helper/ValidateData";
import useWindowDimensions from "../windowDimension";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import BetweenStepRebuilding from "./BetweenStepRebuilding";
import { Alert } from "@material-ui/lab";

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
    if(!location){
        history.push("/add");
    }
    const betweenStepsData = React.useRef({
        type: location.state.type,
    });
    const { t, i18n } = useTranslation();

    const [errorMessage, setErrorMessage] = React.useState("");

    React.useEffect(() => {
        props.emptySteps();
        props.pushStep(t('New calculation.1'));
        props.pushStep(
            betweenStepsData.current.type === 1
                ? t('New production.1')
                : t('Rebuilding.1')
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

    if(!props.token){
        return "Unauthorized";
    }
    const token = props.token;

    const steps = [
        {
            label: "Choose Project Category",
            id: 1,
        },
        {
            label: "Choose Project Subcategory",
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
    };

    const handleNext = () => {
        const validate = ValidateData(activeStep, betweenStepsData);
        if(!validate.hideError){
            console.log("Ovdje");
            setErrorMessage(validate.message);
            return;
        }
        console.log(betweenStepsData.current);
        const betweenStepsCategories = [
            types.category.lager,
            types.category.ombyggnad,
            types.category.kontor,
            types.category.handel,
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
        console.log(betweenStepsData.current.category);
        setActiveStep(
            (prevActiveStep) =>
                prevActiveStep -
                1 -
                (prevActiveStep == 2 && 1)
        );
    };

    const SwitchStep = () => {
        switch (activeStep) {
            case 0:
                if(!betweenStepsData.current.type){
                    history.push("/add");
                }
                if(errorMessage !== "" && errorMessage !== ValidateData(activeStep, 0).message){
                    setErrorMessage("");
                }
                return (
                    <Step1
                        handleChange={handleChange}
                        data={betweenStepsData.current}
                        pageNumber={activeStep}
                    />
                );
            case 1:
                if(errorMessage !== "" && errorMessage !== ValidateData(activeStep, 0).message){
                    setErrorMessage("");
                }
                if (betweenStepsData.current.type === types.types.rebuilding.id) {
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
                if(errorMessage !== "" && errorMessage !== ValidateData(activeStep, 0).message){
                    setErrorMessage("");
                }
                return (
                    <Step2
                        data={betweenStepsData.current}
                        handleChange={handleChange}
                    />
                );
            case 3:
                if(errorMessage !== "" && errorMessage !== ValidateData(activeStep, 0).message){
                    setErrorMessage("");
                }
                return (
                    <Step3
                        data={betweenStepsData.current}
                        handleChange={handleChange}
                    />
                );
            case 4:
                if(errorMessage !== "" && errorMessage !== ValidateData(activeStep, 0).message){
                    setErrorMessage("");
                }
                return (
                    <Step4
                        data={betweenStepsData.current}
                        handleChange={handleChange}
                    />
                );
            case 5:
                if(errorMessage !== "" && errorMessage !== ValidateData(activeStep, 0).message){
                    setErrorMessage("");
                }
                return (
                    <Step5
                        data={betweenStepsData.current}
                        handleChange={handleChange}
                    />
                );
            case 6:
                if(errorMessage !== "" && errorMessage !== ValidateData(activeStep, 0).message){
                    setErrorMessage("");
                }
                return (
                    <Step6
                        data={betweenStepsData.current}
                        handleChange={handleChange}
                    />
                );
            case 7:
                if(errorMessage !== "" && errorMessage !== ValidateData(activeStep, 0).message){
                    setErrorMessage("");
                }
                console.log(
                    `Data: ${JSON.stringify(betweenStepsData.current)}`
                );
                let id = 0;
                if (betweenStepsData.current["category"]) {
                    id = betweenStepsData.current["category"].id;
                    handleChange("category", id);
                    newCalculation(betweenStepsData.current, token).then((res) => {
                        console.log("Done");
                        history.push({pathname: "/report", state: { data: res.data, token: token }});
                    });
                }

            default:
                return <CircularProgress />;
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
                className={`${classes.stepper} ${activeStep>=7 && classes.hidden}`}
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
            {errorMessage !== '' && <Alert severity="error">
                {errorMessage}
            </Alert>}
            <div className={classes.stepContent}>
                <SwitchStep />
            </div>
            <footer className={classes.stepFooter}>
                <Button
                    onClick={handleBack}
                    className={classes.stepBtn}
                    style={{
                        marginLeft: 30,
                        color: "white",
                        visibility: activeStep === 0 ? "hidden" : "initial",
                    }}
                    color="secondary"
                    variant="contained"
                >
                    {t("Previous.1")}
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.stepBtn}
                    style={{ marginRight: 30 }}
                    onClick={handleNext}
                >
                    {activeStep === steps.length - 1 ? t("Submit.1") : t("Next.1")}
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
        fontWeight: "bold"
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
            right: 0,
        },
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
    hidden: {
        display: "none"
    }
}));

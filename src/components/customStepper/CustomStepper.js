import React from "react";
import {
  Button,
  Stepper,
  Step,
  StepLabel,
  StepConnector,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Step1 from "./Step1";

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
  const [activeStep, setActiveStep] = React.useState(1);
  const [newCalculation, setNewCalculation] = React.useState({
    ProjectType: "",
  });
  const steps = [1, 2, 3, 4, 5];

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
    switch (activeStep) {
      case 0:
        return (
          <Step1
            handleChange={handleChange}
            type={newCalculation.ProjectType}
          />
        );

      default:
        return "nothing";
    }
  };

  const classes = useStyles();
  return (
    <>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<CustomConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel classes={{ iconContainer: classes.icon }} />
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
  },
  stepFooter: {
    display: "flex",
    justifyContent: "space-between",
    margin: theme.spacing(1),
  },
  stepContent: {
    //height: "100%",
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
    },
  },
}));

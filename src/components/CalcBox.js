import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { BuildingIcon } from "./svgIcons/BuildingIcon";
import { ArrowIcon } from "./svgIcons/ArrowIcon";
import { HospitalIcon } from "./svgIcons/HospitalIcon";
import { SchoolIcon } from "./svgIcons/SchoolIcon";

export default function CalcBox(props) {
  const SwithcIcon = () => {
    switch (props.icon) {
      case "building":
        return <BuildingIcon className={classes.icon} color={props.color} />;
      case "hospital":
        return <HospitalIcon className={classes.icon} color={props.color} />;
      case "school":
        return <SchoolIcon className={classes.icon} color={props.color} />;
      default:
        break;
    }
  };

  const classes = useStyles();

  return (
    <Box
      className={classes.calcBox}
      style={{ color: props.color, backgroundColor: props.backgroundColor }}
    >
      <SwithcIcon />
      {props.text}
      <ArrowIcon color={props.color} className={classes.arrowicon} />
    </Box>
  );
}

//add new styles here
const useStyles = makeStyles((theme) => ({
  calcBox: {
    boxShadow: "0px 0px 14px 3px rgba(0, 0, 0, 0.25)",
    borderRadius: 15,
    height: 100,
    width: 187,
    fontSize: 19,
    fontWeight: 400,
    padding: theme.spacing(2),
    display: "inline-block",
    position: "relative",
    minWidth: 170,
  },
  icon: {
    display: "block",
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  arrowicon: {
    position: "absolute",
    right: theme.spacing(2),
    bottom: theme.spacing(5),
  },
}));

import React from "react";
import { Box, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { SchoolIcon } from "../svgIcons/SchoolIcon";
import { BuildingIcon } from "../svgIcons/BuildingIcon";
import { HotelIcon } from "../svgIcons/HotelIcon";
import { HospitalIcon } from "../svgIcons/HospitalIcon";
import { HomeIcon } from "../svgIcons/HomeIcon";
import { ChurchIcon } from "../svgIcons/ChurchIcon";

import types from "../../helper/types.json";

export default function Step1(props) {
  const projectType = props.type;

  const handleClickPaper = (prop) => {
    //setting the state property from parent component
    props.handleChange("ProjectType", prop);
  };

  const classes = useStyles();
  return (
    <Box maxHeight={300} overflow="auto">
      <Box className={classes.root}>
        <Paper
          elevation={4}
          onClick={() => handleClickPaper(types.school)}
          className={classes.paperBox}
          style={
            projectType === types.school
              ? { border: "4px solid #21344d" }
              : { border: "4px solid white" }
          }
        >
          <SchoolIcon color="#21344d" size={80} style={{ paddingTop: 10 }} />
          <Typography className={classes.paperText}>School</Typography>
        </Paper>
        <Paper
          elevation={4}
          onClick={() => handleClickPaper(types.building)}
          className={classes.paperBox}
          style={
            projectType === types.building
              ? { border: "4px solid #21344d" }
              : { border: "4px solid white" }
          }
        >
          <BuildingIcon color="#21344d" size={80} style={{ paddingTop: 10 }} />
          <Typography className={classes.paperText}>Building</Typography>
        </Paper>
        <Paper
          elevation={4}
          onClick={() => handleClickPaper(types.hospital)}
          className={classes.paperBox}
          style={
            projectType === types.hospital
              ? { border: "4px solid #21344d" }
              : { border: "4px solid white" }
          }
        >
          <HospitalIcon color="#21344d" size={80} style={{ paddingTop: 10 }} />
          <Typography className={classes.paperText}>Hospital</Typography>
        </Paper>
      </Box>
      <Box className={classes.root} style={{ marginTop: 20 }}>
        <Paper
          elevation={4}
          onClick={() => handleClickPaper(types.hotel)}
          className={classes.paperBox}
          style={
            projectType === types.hotel
              ? { border: "4px solid #21344d" }
              : { border: "4px solid white" }
          }
        >
          <HotelIcon color="#21344d" size={80} style={{ paddingTop: 10 }} />
          <Typography className={classes.paperText}>Hotel</Typography>
        </Paper>
        <Paper
          elevation={4}
          onClick={() => handleClickPaper(types.home)}
          className={classes.paperBox}
          style={
            projectType === types.home
              ? { border: "4px solid #21344d" }
              : { border: "4px solid white" }
          }
        >
          <HomeIcon color="#21344d" size={80} style={{ paddingTop: 10 }} />
          <Typography className={classes.paperText}>Home</Typography>
        </Paper>
        <Paper
          elevation={4}
          onClick={() => handleClickPaper(types.church)}
          className={classes.paperBox}
          style={
            projectType === types.church
              ? { border: "4px solid #21344d" }
              : { border: "4px solid white" }
          }
        >
          <ChurchIcon color="#21344d" size={80} style={{ paddingTop: 10 }} />
          <Typography className={classes.paperText}>Church</Typography>
        </Paper>
      </Box>
    </Box>
  );
}

//add new styles here
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
    border: "4px solid white",
    "&:hover": {
      cursor: "pointer",
    },
    [theme.breakpoints.down("xs")]: {
      width: 140,
    },
  },
  paperText: {
    fontSize: 24,
    fontWeight: 600,
    color: "black",
    [theme.breakpoints.down("xs")]: {
      fontSize: 20,
    },
  },
}));

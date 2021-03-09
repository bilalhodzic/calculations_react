import React from "react";
import { Box, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { SchoolIcon } from "../svgIcons/SchoolIcon";
import { BuildingIcon } from "../svgIcons/BuildingIcon";
import { HotelIcon } from "../svgIcons/HotelIcon";
import { HospitalIcon } from "../svgIcons/HospitalIcon";
import { HomeIcon } from "../svgIcons/HomeIcon";
import { ChurchIcon } from "../svgIcons/ChurchIcon";

export default function Step1(props) {
  const projectType = props.type;

  const handleClickPaper = (prop) => {
    //setting the state property from parent component
    props.handleChange("ProjectType", prop);
  };

  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}>
        <Paper
          elevation={4}
          onClick={() => handleClickPaper("School")}
          className={classes.paperBox}
          style={
            projectType === "School"
              ? { border: "4px solid #21344d" }
              : { border: "4px solid white" }
          }
        >
          <SchoolIcon color="#21344d" size={80} style={{ paddingTop: 10 }} />
          <Typography className={classes.paperText}>School</Typography>
        </Paper>
        <Paper
          elevation={4}
          onClick={() => handleClickPaper("Building")}
          className={classes.paperBox}
          style={
            projectType === "Building"
              ? { border: "4px solid #21344d" }
              : { border: "4px solid white" }
          }
        >
          <BuildingIcon color="#21344d" size={80} style={{ paddingTop: 10 }} />
          <Typography className={classes.paperText}>Building</Typography>
        </Paper>
        <Paper
          elevation={4}
          onClick={() => handleClickPaper("Hospital")}
          className={classes.paperBox}
          style={
            projectType === "Hospital"
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
          onClick={() => handleClickPaper("Hotel")}
          className={classes.paperBox}
          style={
            projectType === "Hotel"
              ? { border: "4px solid #21344d" }
              : { border: "4px solid white" }
          }
        >
          <HotelIcon color="#21344d" size={80} style={{ paddingTop: 10 }} />
          <Typography className={classes.paperText}>Hotel</Typography>
        </Paper>
        <Paper
          elevation={4}
          onClick={() => handleClickPaper("Home")}
          className={classes.paperBox}
          style={
            projectType === "Home"
              ? { border: "4px solid #21344d" }
              : { border: "4px solid white" }
          }
        >
          <HomeIcon color="#21344d" size={80} style={{ paddingTop: 10 }} />
          <Typography className={classes.paperText}>Home</Typography>
        </Paper>
        <Paper
          elevation={4}
          onClick={() => handleClickPaper("Church")}
          className={classes.paperBox}
          style={
            projectType === "Church"
              ? { border: "4px solid #21344d" }
              : { border: "4px solid white" }
          }
        >
          <ChurchIcon color="#21344d" size={80} style={{ paddingTop: 10 }} />
          <Typography className={classes.paperText}>Church</Typography>
        </Paper>
      </Box>
    </>
  );
}

//add new styles here
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
  },
  paperBox: {
    width: 250,
    height: 140,
    textAlign: "center",
    border: "4px solid white",
    "&:hover": {
      cursor: "pointer",
    },
    "&:active": {
      border: "4px solid #21344D",
    },
    "&:focus": {
      border: "4px solid #21344D",
    },
    "&::selection": {
      border: "4px solid #21344D",
    },
  },
  paperText: {
    fontSize: 24,
    fontWeight: 600,
    color: "black",
  },
}));

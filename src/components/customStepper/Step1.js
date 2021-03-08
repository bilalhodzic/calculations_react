import React from "react";
import { Box, Button, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { SchoolIcon } from "../svgIcons/SchoolIcon";
import { BuildingIcon } from "../svgIcons/BuildingIcon";
import { HotelIcon } from "../svgIcons/HotelIcon";
import { HospitalIcon } from "../svgIcons/HospitalIcon";
import { HomeIcon } from "../svgIcons/HomeIcon";
import { ChurchIcon } from "../svgIcons/ChurchIcon";

export default function Step1(props) {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.root}>
        <Paper elevation={4} className={classes.paperBox}>
          <SchoolIcon color="#21344d" size={80} style={{ paddingTop: 10 }} />
          <Typography className={classes.paperText}>School</Typography>
        </Paper>
        <Paper elevation={4} className={classes.paperBox}>
          <BuildingIcon color="#21344d" size={80} style={{ paddingTop: 10 }} />
          <Typography className={classes.paperText}>Building</Typography>
        </Paper>
        <Paper elevation={4} className={classes.paperBox}>
          <HospitalIcon color="#21344d" size={80} style={{ paddingTop: 10 }} />
          <Typography className={classes.paperText}>Hospital</Typography>
        </Paper>
      </Box>
      <Box className={classes.root} style={{ marginTop: 20 }}>
        <Paper elevation={4} className={classes.paperBox}>
          <HotelIcon color="#21344d" size={80} style={{ paddingTop: 10 }} />
          <Typography className={classes.paperText}>Hotel</Typography>
        </Paper>
        <Paper elevation={4} className={classes.paperBox}>
          <HomeIcon color="#21344d" size={80} style={{ paddingTop: 10 }} />
          <Typography className={classes.paperText}>Home</Typography>
        </Paper>
        <Paper elevation={4} className={classes.paperBox}>
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
    "&:focus-visible": {
      border: "4px solid #21344D",
    },
  },
  paperText: {
    fontSize: 24,
    fontWeight: 600,
    color: "black",
  },
}));

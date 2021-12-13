import React from "react";
import Layout from "../Layout";
import { Paper, Divider, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { BuildingIcon } from "../svgIcons/BuildingIcon";
import { HospitalIcon } from "../svgIcons/HospitalIcon";
import { SchoolIcon } from "../svgIcons/SchoolIcon";
import { HotelIcon } from "../svgIcons/HotelIcon";

import CalcBox from "./CalcBox";
import ScrollList from "./ScrollList";

export default function Dashboard() {
  const [totalBuildings, setTotalBuildings] = React.useState(32456);
  const [totalHospital, setTotalHospital] = React.useState(15256);
  const [totalSchool, setTotalSchool] = React.useState(15256);
  const [latestCalc, setLatestCalc] = React.useState([]);
  const [calculations, setCalculations] = React.useState([]);

  React.useEffect(() => {
    //call function while first time render
    setLatestCalc([
      /*{
        name: "Building in Stockholm Sweden",
        price: "1.854.456",
        icon: <BuildingIcon color="#21344D" size={49} />,
        type: "Building",
        color: "#0EBD00",
        backgroundColor: "#9BFF93",
      },
      {
        name: "Hospital in Stockholm Sweden",
        price: "2.854.456",
        icon: <HospitalIcon color="#21344D" size={49} />,
        type: "Hospital",
        color: "#ff4100",
        backgroundColor: "#FFcebd",
      },
      {
        name: "School in Stockholm Sweden",
        price: "854.456",
        icon: <SchoolIcon color="#21344D" size={49} />,
        type: "School",
        color: "#00adff",
        backgroundColor: "#b4e7ff",
      },
      {
        name: "School in Norway",
        price: "1.054.456",
        icon: <SchoolIcon color="#21344D" size={49} />,
        type: "School",
        color: "#00adff",
        backgroundColor: "#b4e7ff",
      },
      {
        name: "Hotel in Stockholm Sweden",
        price: "4.854.456",
        icon: <HotelIcon color="#21344D" size={49} />,
        type: "Hotel",
        color: "#3F75BD",
        backgroundColor: "#C2DCFF",
      },*/
    ]);
    setCalculations([
      {
        item: (
          <CalcBox
            text={`${totalBuildings} Building Calculations`}
            backgroundColor={"#9Bff93"}
            color="#0EBD00"
            icon="building"
          />
        ),
      },
      {
        item: (
          <CalcBox
            text={`${totalHospital} Hospital Calculations`}
            backgroundColor={"#FFCEBD"}
            color="#FF4100"
            icon="hospital"
          />
        ),
      },
      {
        item: (
          <CalcBox
            text={`${totalSchool} School Calculations`}
            backgroundColor={"#B4E7FF"}
            color="#00ADFF"
            icon="school"
          />
        ),
      },
    ]);
  }, []);

  const classes = useStyles();

  return (
    <Layout>
      <Paper elevation={5} className={classes.paper}>
        Calculations
        <Divider className={classes.divider} />
        <ScrollList list={calculations} type="calculations" />
        Latest Calculations
        <ScrollList list={latestCalc} type="latestCalc" />
      </Paper>
    </Layout>
  );
}

//add new styles here
const useStyles = makeStyles((theme) => ({
  paper: {
    height: "70vh",
    margin: theme.spacing(5),
    borderRadius: 7,
    padding: theme.spacing(5),
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),

    maxHeight: "80vh",
    fontSize: 31,
    fontFamily: "Poppins",
    color: "black",
    fontWeight: 500,
    minWidth: 600,
    [theme.breakpoints.down("xs")]: {
      margin: theme.spacing(1),
      minWidth: 0,
      fontSize: 23,
      height: "100%",
    },
  },
  divider: {
    height: 2,
    color: "#686868",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  calcBoxes: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(3),
  },
}));

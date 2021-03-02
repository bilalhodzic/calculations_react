import React from "react";
import Layout from "./Layout";
import { Paper, Divider, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import CalcBox from "./CalcBox";

export default function Dashboard() {
  const [totalBuildings, setTotalBuildings] = React.useState(32456);
  const [totalHospital, setTotalHospital] = React.useState(15256);
  const [totalSchool, setTotalSchool] = React.useState(15256);

  React.useEffect(() => {
    //call function while first time render
  }, []);

  const classes = useStyles();

  return (
    <Layout>
      <Paper elevation={5} className={classes.paper}>
        Calculations
        <Divider className={classes.divider} />
        <Box className={classes.calcBoxes}>
          <CalcBox
            text={`${totalBuildings} Building Calculations`}
            backgroundColor={"#9Bff93"}
            color="#0EBD00"
            icon="building"
          />
          <CalcBox
            text={`${totalHospital} Hospital Calculations`}
            backgroundColor={"#FFCEBD"}
            color="#FF4100"
            icon="hospital"
          />
          <CalcBox
            text={`${totalSchool} School Calculations`}
            backgroundColor={"#B4E7FF"}
            color="#00ADFF"
            icon="school"
          />
        </Box>
        Latest Calculations
      </Paper>
    </Layout>
  );
}

//add new styles here
const useStyles = makeStyles((theme) => ({
  paper: {
    height: "70vh",
    margin: theme.spacing(5),
    //width: "calc(100% - 100px)",
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

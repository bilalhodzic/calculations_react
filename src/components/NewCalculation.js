import React from "react";
import { Container, Divider, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "./Layout";
import CustomStepper from "./customStepper/CustomStepper";

export default function NewCalculation() {
  React.useEffect(() => {
    //call function while first time render
  }, []);

  const classes = useStyles();

  return (
    <Layout>
      <Paper elevation={5} className={classes.paper}>
        <Typography
          style={{
            fontSize: 21,
            color: "black",
            fontWeight: 600,
            margin: 15,
            paddingTop: 20,
          }}
        >
          New Calculation
        </Typography>
        <Divider style={{ color: "#D3D3D3" }} />
        <Typography
          style={{ fontSize: 31.27, color: "black", textAlign: "center" }}
        >
          Choose project type
        </Typography>
        <div>
          <CustomStepper />
        </div>
      </Paper>
    </Layout>
  );
}

//add new styles here
const useStyles = makeStyles((theme) => ({
  paper: {
    minHeight: "80vh",
    margin: theme.spacing(5),
    borderRadius: 7,
    fontFamily: "Poppins",
    minWidth: 600,
    height: "max-content",
  },
}));

import React from "react";
import {
  Container,
  Divider,
  Hidden,
  Paper,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "../Layout";
import CustomStepper from "../customStepper/CustomStepper";

export default function NewCalculation() {
  React.useEffect(() => {
    //call function while first time render
  }, []);

  const classes = useStyles();

  return (
    <Layout>
      <Paper elevation={5} className={classes.paper}>
        <Hidden xsDown>
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
        </Hidden>

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
    [theme.breakpoints.down("xs")]: {
      margin: theme.spacing(1),
      minWidth: 0,
    },
  },
}));

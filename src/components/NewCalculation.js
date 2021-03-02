import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "./Layout";

export default function NewCalculation() {
  React.useEffect(() => {
    //call function while first time render
  }, []);

  const classes = useStyles();

  return (
    <Layout>
      <Container className={classes.root}>New Calculation</Container>
    </Layout>
  );
}

//add new styles here
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

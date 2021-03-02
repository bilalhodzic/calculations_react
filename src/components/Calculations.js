import React from "react";
import { Container } from "@material-ui/core";
import Layout from "./Layout";

import { makeStyles } from "@material-ui/core/styles";

export default function Calculations() {
  React.useEffect(() => {
    //call function while first time render
  }, []);

  const classes = useStyles();

  return (
    <Layout>
      <Container className={classes.root}>This is Calculation</Container>
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

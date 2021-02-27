import React from "react";
import Layout from "./Layout";
import { Container, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default function Dashboard() {
  React.useEffect(() => {
    //call function while first time render
  }, []);

  const classes = useStyles();

  return (
    <Layout>
      <Container className={classes.root}>This is Dashboard</Container>
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

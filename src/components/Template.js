import React from "react";
import { Container, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default function NameOfComponent() {
  React.useEffect(() => {
    //call function while first time render
  }, []);

  const classes = useStyles();

  return <Container className={classes.root}></Container>;
}

//add new styles here
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

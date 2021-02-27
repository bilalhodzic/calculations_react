import React from "react";
import {
  Container,
  Button,
  Typography,
  Drawer,
  Divider,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default function Layout(props) {
  React.useEffect(() => {
    //call function while first time render
  }, []);

  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Drawer
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
        variant="permanent"
        anchor="left"
      >
        This is Layout
        <Divider />
      </Drawer>
      {props.children}
    </Box>
  );
}

const calculate = (objectPx, totalPx = 1440) => {
  return (objectPx / totalPx) * 100 + "%";
};

//add new styles here
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      // margin: theme.spacing(1),
    },
    display: "flex",
  },
  drawer: {
    width: calculate(266),
    flexShrink: 0,
  },
  drawerPaper: {
    color: "white",
    width: calculate(266),
    backgroundColor: "#21344D",
  },
}));

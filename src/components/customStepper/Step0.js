import React from "react";
import { Box, makeStyles, Typography, Hidden, Paper, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import {Helmet} from 'react-helmet';

import { ReactComponent as CalculatorIcon } from "../../images/calculatorIcon.svg";
import { ReactComponent as MenuIcon } from "../../images/burgerIcon.svg";

import types from "../../helper/data.json";

export default function Step0 (props){

    const [mobileOpen, setMobileOpen] = React.useState(false);
    const history = useHistory();
    const classes = useStyles();

    const handleDrawer = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <div style={{backgroundColor: "#E5E5E5"}}>
            <Helmet>
                <style>{'body { background-color: #E5E5E5; }'}</style>
            </Helmet>
            <Box className={classes.root}>
                <Box className={classes.header}>
                    <Box className={classes.drawerHeader} onClick={() => history.push("/")}>
                        <Typography className={classes.headerText}>Calculation</Typography>
                    </Box>
                    <Hidden smUp>
                        <MenuIcon className={classes.menuIcon} onClick={handleDrawer} />
                    </Hidden>
                </Box>

                <Paper className={classes.paper}>
                    <Typography className={classes.title}>What do you want ?</Typography>
                    <Box className={classes.buttonGroup}>
                        <Button className={classes.button} onClick={() => history.push({pathname: "/new", state: { type: types.types.rebuilding.id }})}>Rebuildings</Button>
                        <CalculatorIcon className={classes.image}/>
                        <Button className={classes.button} onClick={() => history.push({pathname: "/new", state: { type: types.types.new_production.id }})}>New production</Button>
                    </Box>
                </Paper>
            </Box>
        </div>
    );
}

const calculate = (objectPx, totalPx = 1440) => {
    return (objectPx / totalPx) * 100 + "%";
};

const useStyles = makeStyles((theme) => ({
    root: {
      //backgroundColor: "#E5E5E5",
      marginTop: theme.spacing(10),
      marginLeft: `max(180px, ${calculate(266)})`, // max calculation similarly picks the largest from a comma separated list of values (of any length).
      [theme.breakpoints.down("xs")]: {
        marginLeft: 0,
      },
    },
    menuIcon: {
      padding: theme.spacing(3),
      "&:hover": {
        cursor: "pointer",
      },
    },
    drawerHeader: {
      height: "100%",
      width: calculate(241),
      //backgroundColor: "#21344d",
      display: "flex",
      minWidth: 150,
  
      backgroundColor: "#21344D",
      justifyContent: "flex-start",
      alignItems: "inherit",
      "& p": {
        fontSize: 22,
        color: "white",
      },
      "&:hover": {
        cursor: "pointer",
      },
      [theme.breakpoints.down("xs")]: {
        visibility: "hidden",
      },
    },
    header: {
      width: "100%",
      height: 54,
      position: "fixed",
      top: 0,
      left: 0,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: "1px solid #B0B0B0",
      backgroundColor: "white"
    },
    title: {
        color: "#21344D",
        fontSize: 70,
        fontWeight: 900,
        margin: "0 auto",
        textAlign: "center",
        display: "block"
    },
    paper: {
        height: "73vh",
        //margin: theme.spacing(2),
        zIndex: 100,
        marginRight: theme.spacing(20),
        marginLeft: theme.spacing(-15),
        borderRadius: "12px",
        padding: theme.spacing(5),
        paddingLeft: theme.spacing(8),
        paddingRight: theme.spacing(8),
        boxShadow: "1px 1px 14px 8px rgba(0, 0, 0, 0.25)",
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
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      },
      buttonGroup:{
        marginTop: theme.spacing(8),
        marginLeft: "auto",
        marginRight: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "50%",
        textAlign: "center",
      },
      button: {
          minWidth: 300,
          minHeight: 170,
          border: "2px solid black",
          "&:hover":{
              backgroundColor: "#21344D",
              color: "white"
          },
          textTransform: "none",
          fontSize: 20,
          fontWeight: 600,
      },
      image: {
          position: "absolute",
          zIndex: 10,
          height: 70,
          width: 70,
      },
      headerText: {
        marginLeft: theme.spacing(4)
      }
  }));
  

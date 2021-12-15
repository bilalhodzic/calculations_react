import React from "react";
import { Box, makeStyles, Typography, Hidden, Paper, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import {Helmet} from 'react-helmet';

import { ReactComponent as MenuIcon } from "../../images/burgerIcon.svg";

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
                        <Typography>Calculation</Typography>
                    </Box>
                    <Hidden smUp>
                        <MenuIcon className={classes.menuIcon} onClick={handleDrawer} />
                    </Hidden>
                </Box>

                <Paper className={classes.paper}>
                    <Typography className={classes.title}>What do you want?</Typography>
                    <Box className={classes.buttonGroup}>
                        <Button className={classes.button}>Rebuildings</Button>
                        <MenuIcon className={classes.image}/>
                        <Button className={classes.button}>New production</Button>
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
      width: calculate(267),
      //backgroundColor: "#21344d",
      display: "flex",
      minWidth: 181,
  
      backgroundColor: "#21344D",
      justifyContent: "center",
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
        fontSize: 50,
        fontWeight: "bold",
        margin: "0 auto",
        textAlign: "center",
        display: "block"
    },
    paper: {
        height: "70vh",
        //margin: theme.spacing(2),
        marginRight: theme.spacing(10),
        borderRadius: 7,
        padding: theme.spacing(5),
        paddingLeft: theme.spacing(8),
        paddingRight: theme.spacing(8),
        boxShadow: "0 0 10px #ccc",
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
      buttonGroup:{
        marginTop: theme.spacing(15),
        marginLeft: "auto",
        marginRight: "auto",
        display: "block",
        width: "50%",
        position: "relative",
        textAlign: "center"
      },
      button: {
          minWidth: 250,
          minHeight: 100,
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
          backgroundColor: "black",
          width: 20,
          height: 20,
          marginTop: theme.spacing(4),
          marginRight: theme.spacing(5)
      }
  }));
  

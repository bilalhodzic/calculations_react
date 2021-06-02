import React from "react";
import { Container, Typography, Box } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

export default function AboutUs() {
  const history = useHistory();

  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <img
        src={"/slider-image-1 1.png"}
        alt={"background"}
        className={classes.bgImage}
      />
      <Box className={classes.calcButton} onClick={() => history.push("/")}>
        Calculation
      </Box>

      <>
        <Box className={classes.box}>
          <Typography className={classes.header}>About us</Typography>
          <Typography className={classes.loginText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor
            elementum nunc vel tincidunt. Orci varius natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Donec interdum
            luctus dui at vehicula. Praesent mi odio, commodo at justo quis,
            aliquam hendrerit ante. Suspendisse rhoncus risus sit amet tortor
            mollis aliquam. Fusce interdum diam sit amet pharetra convallis.
            Vestibulum diam metus, accumsan ac rhoncus eu, auctor ut sapien. In
            venenatis metus sed efficitur pellentesque. Donec eleifend risus ac
            rhoncus accumsan. Nulla aliquam aliquet cursus. Nullam quis
            convallis quam. Quisque maximus varius massa, ut fringilla sem
            elementum in.
          </Typography>
        </Box>
      </>
    </Container>
  );
}

//given measure from desgin are in px
//I'm trying to convert them to %
const calculate = (objectPx, totalPx = 1433) => {
  return (objectPx / totalPx) * 100 + "%";
};

//add new styles here
const useStyles = makeStyles((theme) => ({
  root: {
    color: "white",
    margin: 0,
    padding: 0,
  },
  bgImage: {
    minHeight: "100%",
    minWidth: 1024,
    width: "100%",
    height: "auto",
    position: "fixed",
    top: 0,
    left: 0,
  },
  calcButton: {
    backgroundColor: "#20262F",
    borderRadius: "40.625px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    width: calculate(217.75),
    fontSize: 17.87,
    height: 60,
    left: calculate(134),
    top: calculate(50, 1024),

    minWidth: 130,
  },
  box: {
    position: "absolute",
    left: calculate(128),
    top: calculate(371, 1324),
    fontSize: 15,
    maxWidth: 820,
  },
  header: {
    fontWeight: 600,
    lineHeight: "128%",
    letterSpacing: "0.015em",
    color: "#FFFCFC",
    fontSize: "8vmin",
  },
  loginText: {
    fontWeight: 500,
    lineHeight: "217.5%",
    fontSize: "2.4vmin",
    fontStyle: "normal",
  },
  button: {
    width: calculate(170, 600),

    minWidth: 100,
    background: "#21344D",
    borderRadius: "9.77948px",
    textTransform: "none",
    fontWeight: 500,
    color: "white",
    fontSize: "3.3vmin",
    "&:hover": {
      background: "#1b2c44",
    },
  },

  paper: {
    outline: 0,
    background: "white",
    maxWidth: 472,
    minWidth: 330,
    height: 472,
    borderRadius: 50,
    textAlign: "center",
    fontWeight: 500,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      borderRadius: 0,
    },
  },
}));

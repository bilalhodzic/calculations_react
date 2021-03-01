import React from "react";
import {
  Container,
  Button,
  Typography,
  Box,
  Modal,
  Input,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

export default function Login() {
  const [openDialog, setOpenDialog] = React.useState(false);
  const history = useHistory();

  React.useEffect(() => {
    //call function while first time render
  }, []);

  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <img
        src={"/slider-image-3 1.png"}
        alt={"background"}
        className={classes.bgImage}
      />
      <Box className={classes.calcButton}>Calculation</Box>
      {!openDialog && (
        <>
          <Typography className={classes.header}>Calculation</Typography>
          <Box className={classes.loginText}>
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give{" "}
          </Box>
          <Button
            className={classes.button}
            onClick={() => setOpenDialog(true)}
          >
            Log in
          </Button>
        </>
      )}
      <Modal
        open={openDialog}
        className={classes.dialog}
        onClose={() => setOpenDialog(false)}
      >
        <Box className={classes.paper}>
          <Typography className={classes.paperHeader}>Log in</Typography>
          <Typography className={classes.paperText}>
            Enter your details
          </Typography>
          <Input
            placeholder="Email or username"
            disableUnderline={true}
            className={classes.input}
          />
          <Input
            type="password"
            placeholder="Password"
            disableUnderline={true}
            className={classes.input}
          />
          <Button
            className={classes.button2}
            onClick={() => history.push("/home")}
          >
            Log in
          </Button>
        </Box>
      </Modal>
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
    // "& > *": {
    //   margin: theme.spacing(1),
    // },
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
    height: 65,
    left: calculate(134),
    top: calculate(50, 1024),
    minWidth: 150,
  },
  header: {
    position: "absolute",
    left: calculate(732),
    top: calculate(371, 1024),
    fontWeight: 600,
    fontSize: 70,
    height: 90,
    lineHeight: "128%",
    letterSpacing: "0.015em",
    color: "#FFFCFC",
    //width: calculate(783, 1433),
  },
  loginText: {
    position: "absolute",
    height: calculate(110, 1024),
    width: calculate(621),
    left: calculate(732),
    top: calculate(473, 1024),
    fontWeight: 600,
    lineHeight: "217.5%",
    fontSize: 25,
    fontStyle: "normal",
    minWidth: 500,
  },
  button: {
    position: "absolute",
    width: calculate(170),
    height: 51.81,
    left: calculate(732),
    top: calculate(703.81, 1024),
    minWidth: 120,
    background: "#21344D",
    borderRadius: "9.77948px",
    textTransform: "none",
    fontWeight: 500,
    color: "white",
    fontSize: "24.221px",
    "&:hover": {
      background: "#1b2c44",
    },
  },
  button2: {
    width: 159,
    height: 50.34,
    background: "#21344D",
    borderRadius: "15.3475px",
    textTransform: "none",
    fontWeight: 500,
    color: "white",
    fontSize: "22.81px",
    "&:hover": {
      background: "#1b2c44",
    },
  },
  dialog: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    outline: 0,
    background: "white",
    width: 472,
    height: 472,
    borderRadius: 50,
    boxShadow: "5px 6px 19px 7px rgba(0, 0, 0, 0.25)",
    textAlign: "center",
    fontWeight: 500,
  },
  paperHeader: {
    color: "#606060",
    fontSize: 35,
    fontWeight: 600,
    marginTop: 30,
  },
  paperText: {
    color: "#797979",
    fontSize: 20,
    fontWeight: 500,
    marginTop: 10,
  },
  input: {
    width: 369,
    height: 62,
    background: "rgba(17, 17, 17, 0.05)",
    borderRadius: 18.67,
    margin: theme.spacing(3.5),
    paddingLeft: theme.spacing(3),
    fontSize: 18,
  },
}));

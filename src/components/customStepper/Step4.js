import { useState } from "react";
import {
  Box,
  Button,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";

import { ReactComponent as Step4Icon } from '../../images/step4Icon.svg';

export default function Step4(props) {
  const locations = [
    "Stockholm",
    "Lulea",
    "Sundsvall",
    "Malmo",
    "Goteborg",
    "Norrkoping",
    "Other",
  ];
  const classes = useStyles();
  const [selectedIn, setSelectedIn] = useState(false);
  const [selectedOut, setSelectedOut] = useState(false);

  return (
    <Box maxHeight={300} overflow="auto">
      <Box className={classes.root}>
        <Box className={classes.paperBox}>
          <InputLabel className={`${classes.inputLabel} ${classes.select}`}>
            Tell us yout project's location
          </InputLabel>
          <Select
            displayEmpty
            style={{ width: 250 }}
            label="City"
            defaultValue="City"
            className={classes.select}
          >
            {locations.map((city) => {
              return <MenuItem value={city}>{city}</MenuItem>;
            })}
          </Select>
        </Box>
        <Box className={classes.paperBox}></Box>
      </Box>
      <Box className={classes.root}>
        <Box className={classes.paperBox}>
          <Button
            className={`${classes.button} ${
              selectedIn ? classes.selectedButton : ""
            }`}
            onClick={() => {
              setSelectedIn(!selectedIn);
              setSelectedOut(false);
            }}
          >
            In The City
          </Button>
          <Button
            className={`${classes.button} ${selectedOut ? classes.selectedButton : ''} ${classes.buttonRight}`}
            onClick={() => {
              setSelectedOut(!selectedOut);
              setSelectedIn(false);
            }}
          >
            Outside The City
          </Button>
        </Box>
        <Box className={classes.paperBox}>
            <Step4Icon className={classes.svg} />
        </Box>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      display: "inline-flex",
      "&>*": {
        margin: 10,
      },
    },
    marginTop: theme.spacing(2)
  },
  paperBox: {
    minWidth: 250,
    height: 140,
    textAlign: "center",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      width: 140,
    },
    display: "inline-block"
  },
  select: {
    marginRight: theme.spacing(22)
  },
  inputLabel: {
    marginBottom: 20,
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
  },
  button: {
    width: 250,
    height: 50,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "white",
    color: "#21344d",
    fontWeight: "1000",
    fontSize: 18,
    "&:hover": {
      color: "white",
      backgroundColor: "#21344d"
    },
    marginLeft: theme.spacing(12)
  },
  buttonRight:{
    marginLeft: theme.spacing(5)
  },
  selectedButton: {
    color: "white",
    backgroundColor: "#21344d",
  },
  svg: {
    marginTop: theme.spacing(-9),
  }
}));

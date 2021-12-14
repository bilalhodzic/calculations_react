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
    <>
      <Box className={classes.root}>
        <Box className={classes.paperBox}>
          <InputLabel className={classes.inputLabel}>
            Tell us yout project's location
          </InputLabel>
          <Select
            displayEmpty
            style={{ width: 250 }}
            label="City"
            defaultValue="City"
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
        </Box>
        <Box className={classes.paperBox}>
          <Button
            className={`${classes.button} ${selectedOut ? classes.selectedButton : ''}`}
            onClick={() => {
              setSelectedOut(!selectedOut);
              setSelectedIn(false);
            }}
          >
            Outside The City
          </Button>
        </Box>
      </Box>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      display: "inline-flex",
      "&>*": {
        margin: 10,
      },
    },
  },
  paperBox: {
    width: 250,
    height: 140,
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      width: 140,
    },
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
    }
  },
  selectedButton: {
    color: "white",
    backgroundColor: "#21344d",
  },
}));

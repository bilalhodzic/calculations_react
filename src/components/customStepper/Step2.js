import {
  Box,
  InputLabel,
  makeStyles,
  TextField,
} from "@material-ui/core";

import { ReactComponent as Step2Icon } from '../../images/step2Icon.svg';

export default function Step2(props) {
  console.log("Step2");
  const classes = useStyles();

  const inputLabelProps = {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    textAlign: "start",
    marginLeft: 10,
    marginBottom: 15
  };
  return (
    <>
      <Box className={classes.root} style={{marginTop: 20}}>
        <Box className={classes.paperBox}>
          <InputLabel style={inputLabelProps} required>Name your project!</InputLabel>
          <TextField
            placeholder="Project name"
            variant="outlined"
          ></TextField>
        </Box>
        <Box className={classes.paperBox}>
        <InputLabel style={inputLabelProps}>Project number</InputLabel>
          <TextField
            placeholder="Project number"
            variant="outlined"
          ></TextField>
        </Box>
        <Box className={classes.paperBox}>
        <InputLabel style={inputLabelProps}>Project something</InputLabel>
          <TextField
            placeholder="Project something"
            variant="outlined"
          ></TextField>
        </Box>
      </Box>
      <Box className={classes.root}>
        <Box className={classes.paperBox}>
        <InputLabel style={inputLabelProps}>Project another field</InputLabel>
          <TextField
            placeholder="Project another field"
            variant="outlined"
          ></TextField>
        </Box>
        <Box className={classes.paperBox}></Box>
        <Box className={classes.paperBox}>
          <Step2Icon className={classes.svg} />
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
  svg: {
    width: 150,
    marginLeft: theme.spacing(10)
  }
}));

import { Typography, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { ReactComponent as CalculationIcon } from "../../images/calculationIcon.svg"

export default function NoCalculations(props) {
    const classes = useStyles();
    return( 
    <>
        <Box className={classes.root}>
            <Box className={classes.paperBox}>
                <CalculationIcon/>
            </Box>
            <Box className={`${classes.paperBox} ${classes.paperBoxBig}`}>
                <Typography className={classes.paperText}>Currently there aren't any added calculations</Typography>
                <Button className={classes.button}>+ Add new calculation</Button>
            </Box>
        </Box>
    </>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      justifyContent: "space-around",
      marginTop: 100,
      [theme.breakpoints.down("xs")]: {
        flexDirection: "column",
        display: "inline-flex",
        "&>*": {
          margin: 10,
        },
      },
      flexBasis: 5
    },
    paperBox: {
      width: 250,
      height: 140,
      textAlign: "left",
      border: "4px solid white",
      [theme.breakpoints.down("xs")]: {
        width: 140,
      },
      flex: 2
    },
    paperBoxBig: {
        flex: 3,
    },
    paperText: {
      fontSize: 22,
      fontWeight: 600,
      color: "black",
      [theme.breakpoints.down("xs")]: {
        fontSize: 20,
      },
    },
    button: {
        marginTop: 40,
        backgroundColor: "#21344D",
        borderRadius: 42,
        textTransform: "none",
        fontSize: 18,
        color: "white",
        "&:hover": {
            background: "#1b2c44",
        },
    }
  }));

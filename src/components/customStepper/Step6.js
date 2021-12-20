import React from "react";
import { Box, makeStyles, TextField } from "@material-ui/core";

export default function Step6(props) {

    const classes = useStyles();
    return (
        <>
            <Box className={classes.root}>
                <Box className={classes.paperBox}>
                    <TextField type="date" label="Start date" onKeyDown={(e) => e.preventDefault()} InputLabelProps={{shrink: true}}></TextField>
                </Box>
                <Box className={classes.paperBox}>
                    <TextField type="date" label="End date" onKeyDown="return false" InputLabelProps={{shrink: true}}></TextField>
                </Box>
            </Box>
        </>
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
      paddingBottom: theme.spacing(10)
    },
    paperBox: {
      width: 250,
      height: 140,
      textAlign: "center",
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      "&:hover": {
        cursor: "pointer",
      },
      [theme.breakpoints.down("xs")]: {
        width: 140,
      },
    },
    paperText: {
      fontSize: 24,
      fontWeight: 600,
      color: "black",
      [theme.breakpoints.down("xs")]: {
        fontSize: 20,
      },
    },
  }));

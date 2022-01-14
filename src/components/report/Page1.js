import React from "react";
import { Box, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default function Page1(props) {
  const classes = useStyles();

  const type = props.type === 1 ? "New production" : "Rebuilding";
  const title = props.title;

  return (
    <Paper variant="outlined" className={classes.paper}>
        <Paper className={classes.box} />
        <Box width={"100%"} style={{marginTop: "15%"}}>
            <Box width={"100%"}>
                <Typography className={classes.type}>{type}</Typography>
            </Box>
            <Box width={"100%"}>
                <Typography className={classes.title}>{title}</Typography>
            </Box>
        </Box>
        <Box className={classes.footer}>
            <Typography style={{ color: "#4B4B4B"}}>Date: {(new Date()).toISOString().substring(0, 10)}</Typography>
        </Box>
    </Paper>
  );
}

//add new styles here
const useStyles = makeStyles((theme) => ({
    paper: {
        height: 1100,
        width: 800,
        marginTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
        marginLeft: "auto",
        marginRight: "auto",
        padding: theme.spacing(5),
        paddingLeft: theme.spacing(8),
        paddingRight: theme.spacing(8),
        position: "relative"
    },
    box: {
        border: "1px solid black",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: theme.spacing(12),
        width: "60%",
        height: "25%"
    },
    title: {
        marginTop: theme.spacing(2),
        fontSize: 30,
        textAlign: "center",
        color: "#21344D",
        fontWeight: 600,
    },
    type: {
        textAlign: "center",
        fontSize: 22
    },
    footer: {
        position: "absolute",
        bottom: 30,
        left: 0,
        width: "100%",
        textAlign: "center"
    },
}));

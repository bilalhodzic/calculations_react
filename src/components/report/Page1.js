import React from "react";
import { Box, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {icons} from "../../helper/CategoryIcons";
import Content from "./Content";

export default function Page1(props) {
  const classes = useStyles();

  const type = props.type === 1 ? "Nyproduktion" : "Ombyggnation";
  const title = props.title;
  const category = parseInt(props.category);
  const today = new Date();

  const formatedDate = today.getFullYear() + "/" + (today.getMonth() + 1).toString().padStart(2, '0') + "/" + (today.getDate()).toString().padStart(2, '0');

  return (
    <Paper variant="outlined" className={classes.paper}>
        <Paper className={classes.box}>
            {icons({ transform: "scale(2.5)"})[category]}
        </Paper>
        <Box width={"100%"} style={{marginTop: "15%"}}>
            <Box width={"100%"}>
                <Typography className={classes.type}>{type}</Typography>
            </Box>
            <Box width={"100%"}>
                <Typography className={classes.title}>{title}</Typography>
            </Box>
        </Box>
        <Box width="45%" style={{ marginTop: "15%", marginRight: "auto"}}>
            <Content />
        </Box>
        <Box className={classes.footer}>
            <Typography style={{ color: "#4B4B4B"}}>Datum: {formatedDate}</Typography>
        </Box>
    </Paper>
  );
}

//add new styles here
const useStyles = makeStyles((theme) => ({
    paper: {
        height: 1000,
        width: 800,
        marginTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
        marginLeft: "auto",
        marginRight: "auto",
        padding: theme.spacing(5),
        paddingLeft: theme.spacing(8),
        paddingRight: theme.spacing(8),
        position: "relative",
        [theme.breakpoints.down("xs")]: {
            width: "70%"
        }
    },
    box: {
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: theme.spacing(12),
        width: "60%",
        height: "25%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
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

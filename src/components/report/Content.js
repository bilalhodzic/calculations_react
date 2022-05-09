import React from "react";
import { Container, Button, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default function Content() {
    const classes = useStyles();

    const Dots = (props) => (
        <Typography>{". ".repeat(props.repeat || 7)}</Typography>
    );

    return (
        <Box className={classes.column}>
            <Box className={classes.row}>
                <Typography className={`${classes.title} ${classes.leftSide}`}>Innehållsforteckning:</Typography>
                <Typography className={`${classes.title} ${classes.rightSide}`}>Sida</Typography>
            </Box>
            <Box className={classes.row}>
                <Typography className={classes.leftSide}>Indikerad total byggherre kostnad</Typography>
                <Dots />
                <Typography className={classes.rightSide}>2</Typography>
            </Box>
            <Box className={classes.row}>
                <Typography className={classes.leftSide}>Indikerad produktionskostnad</Typography>
                <Dots repeat={12}/>
                <Typography className={classes.rightSide}>3</Typography>
            </Box>
            <Box className={classes.row}>
                <Typography className={classes.leftSide}>Indikerad endast byggherrekostnad</Typography>
                <Dots />
                <Typography className={classes.rightSide}>3</Typography>
            </Box>
            <Box className={classes.row}>
                <Typography className={classes.leftSide}>Förtydligande nyckeltalskostnader</Typography>
                <Dots />
                <Typography className={classes.rightSide}>4</Typography>
            </Box>
        </Box>
    );
}

//add new styles here
const useStyles = makeStyles((theme) => ({
    row: {
        display: "flex",
        flexDirection: "row",
    },
    column: {
        display: "flex",
        flexDirection: "column",
    },
    title: {
        fontWeight: 600,
        fontSize: 18
    },
    leftSide: {
        marginRight: "auto"
    },
    rightSide: {
        marginLeft: "auto"
    }
}));

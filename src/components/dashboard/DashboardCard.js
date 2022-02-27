import React from "react";
import { Paper, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ColoredBox from "../ColoredBox";

export default function DashboardCard(props) {
    const classes = useStyles();

    return (
        <Paper
            className={classes.menuItem}
            {...props}
            onClick={() => {
                props.handleCardClick(props.value);
            }}
            key={1}
        >
            <Box className={classes.menuIcon}>{props.icon}</Box>
            <Typography className={classes.menuName}>{props.name}</Typography>
            <Typography
                style={{ color: "#6B6B6B", fontSize: 14.69, margin: 10 }}
            >
                {props.price.toLocaleString()} kr
            </Typography>

            <ColoredBox
                color={props.color}
                backgroundcolor={props.backgroundColor}
                text={props.category}
                position="absolute"
                style={{fontStyle: "italic"}}
            />
        </Paper>
    );
}

//add new styles here
const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
        },
    },
    menuItem: {
        width: "25%",
        height: "85%",
        boxShadow: "0px 6px 14px 3px rgba(186, 186, 186, 0.28)",
        borderRadius: 15,
        fontSize: 15,
        fontWeight: 600,
        position: "relative",
        textAlign: "center",
        cursor: "pointer",
        margin: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        [theme.breakpoints.down("xs")]: {
            width: "30vw",
            height: "28vh",
        },
    },
    menuIcon: {
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "5%",
        paddingTop: theme.spacing(3),
        width: "15vw",
        height: "10vh",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.down("xs")]: {
            marginTop: "10%",
        },
    },
    menuName: {
        fontWeight: 600,
        margin: 8,
        fontSize: 18,
    },
    doneStep: {
        filter: "brightness(0) saturate(100%) invert(15%) sepia(9%) saturate(3603%) hue-rotate(175deg) brightness(91%) contrast(86%)",
    },
}));

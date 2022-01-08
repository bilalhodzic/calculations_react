import React from "react";
import { Paper, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ColoredBox from "../ColoredBox";

export default function DashboardCard(props) {
    const classes = useStyles();

    return (
        <Paper className={classes.menuItem} {...props}>
            <Box className={classes.menuIcon}>{props.icon}</Box>
            <Typography className={classes.menuName}>{props.name}</Typography>
            <Typography
                style={{ color: "#6B6B6B", fontSize: 14.69, margin: 10 }}
            >
                {props.price}$
            </Typography>

            <ColoredBox
                color={el.color}
                backgroundcolor={el.backgroundColor}
                text={props.category}
                position="absolute"
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
        width: "17vw",
        height: "30vh",
        boxShadow: "0px 6px 14px 3px rgba(186, 186, 186, 0.28)",
        borderRadius: 15,
        fontSize: 15,
        fontWeight: 600,
        position: "relative",
        textAlign: "center",
        "&:hover": {
            cursor: "pointer",
        },
        margin: theme.spacing(2),
        [theme.breakpoints.down("xs")]: {
            width: "19vh",
            height: "28vh",
        },
    },
    menuIcon: {
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "17%",
        paddingTop: theme.spacing(3),
        width: "10vw",
        height: "10vh",
    },
    menuName: {
        fontWeight: 600,
        margin: 8,
        fontSize: 18,
    },
}));

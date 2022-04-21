import React from "react";
import { Paper, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
            <Box height={"15%"}>
                <Typography className={classes.menuName}>
                    {props.name}
                </Typography>
            </Box>
            <Box height={"15%"}>
                <Typography
                    style={{ color: "#6B6B6B", fontSize: "100%", margin: 10 }}
                >
                    {props.price.toLocaleString()} kr
                </Typography>
            </Box>

            <Box className={classes.categoryItem}>
                <Typography className={classes.categoryItemText}>{props.category}</Typography>
            </Box>
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
        display: "flex",
        flexDirection: "column",
        width: "25%",
        minHeight: "90%",
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
            width: "50vw"
        },
    },
    menuIcon: {
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "5%",
        paddingTop: theme.spacing(3),
        width: "30%",
        height: "40%",
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
        fontSize: "110%",
        [theme.breakpoints.down("xs")]: {
            fontSize: "80%"
        }
    },
    categoryItem: {
        marginTop: "auto",
        marginLeft: "auto",
        marginRight: "5%",
        height: "10%",
    },
    categoryItemText: {
        fontSize: "100%",
        fontStyle: "italic"
    }
}));

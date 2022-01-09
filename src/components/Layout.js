import React from "react";
import { useHistory } from "react-router-dom";
import {
    Button,
    Typography,
    Drawer,
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Hidden,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Helmet } from "react-helmet";
import { ReactComponent as CalcIcon } from "../images/calc_icon.svg";
import { ReactComponent as HomeIcon } from "../images/HomeIcon.svg";
import { ReactComponent as MenuIcon } from "../images/burgerIcon.svg";
import { ReactComponent as LogoutIcon } from "../images/logoutIcon.svg";
import { ReactComponent as PlusIcon } from "../images/plusIcon.svg";

const drawerList = [
    {
        name: "Dashboard",
        icon: <HomeIcon />,
        pathname: "/home",
    },
    {
        name: "Calculations",
        icon: <CalcIcon />,
        pathname: "/calculations",
    },
];

export default function Layout(props) {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const history = useHistory();
    const classes = useStyles();

    const handleDrawer = () => {
        setMobileOpen(!mobileOpen);
    };
    const drawer = (
        <>
            <List className={classes.list}>
                {drawerList.map((list, index) => (
                    <ListItem
                        className={classes.listButton}
                        button
                        key={list.name}
                        onClick={() => history.push( { pathname: list.pathname, state: { token: props.token } })}
                    >
                        <ListItemIcon className={classes.listIcon}>
                            {list.icon}
                        </ListItemIcon>
                        <ListItemText
                            disableTypography={true}
                            className={classes.listText}
                        >
                            {list.name}
                        </ListItemText>
                    </ListItem>
                ))}
            </List>
            <List className={`${classes.list} ${classes.bottomList}`}>
                <ListItem
                    className={classes.listButton}
                    onClick={() => history.push({ pathname: "/add", state: { token: props.token }})}
                >
                    <PlusIcon style={{ marginRight: 15 }} />
                    <Typography className={classes.listText}>
                        New Calculation
                    </Typography>
                </ListItem>
                <ListItem
                    className={classes.listButton}
                    onClick={() => history.push("/")}
                >
                    <LogoutIcon style={{ marginRight: 15 }} />
                    <Typography className={classes.listText}>
                        Log out
                    </Typography>
                </ListItem>
            </List>
        </>
    );

    return (
        <>
            <Helmet>
                <style>{"body { background-color: #E5E5E5; }"}</style>
            </Helmet>
            <Box className={classes.root}>
                <Box className={classes.header}>
                    <Box
                        className={classes.drawerHeader}
                        onClick={() => history.push({ pathname: "/home", state: { token: props.token }})}
                    >
                        <Typography className={classes.drawerHeaderText}>
                            Calculation
                        </Typography>
                        <MenuIcon className={classes.menuIcon} />
                    </Box>
                    <Hidden smUp>
                        <MenuIcon
                            className={classes.menuIcon}
                            onClick={handleDrawer}
                        />
                    </Hidden>
                </Box>
                <Hidden smUp>
                    <Drawer
                        className={classes.drawer}
                        classes={{ paper: classes.drawerPaper }}
                        variant="temporary"
                        onClose={handleDrawer}
                        open={mobileOpen}
                        anchor="right"
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown>
                    <Drawer
                        className={classes.drawer}
                        classes={{ paper: classes.drawerPaper }}
                        variant="permanent"
                        anchor="left"
                    >
                        {drawer}
                    </Drawer>
                </Hidden>

                {props.children}
            </Box>
        </>
    );
}

const calculate = (objectPx, totalPx = 1440) => {
    return (objectPx / totalPx) * 100 + "%";
};

//add new styles here
const useStyles = makeStyles((theme) => ({
    root: {
        //backgroundColor: "#E5E5E5",
        marginTop: theme.spacing(10),
        marginLeft: `max(180px, ${calculate(245)})`, // max calculation similarly picks the largest from a comma separated list of values (of any length).
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0,
        },
        position: "relative",
    },
    drawer: {
        width: calculate(220),
        flexShrink: 0,
    },
    menuIcon: {
        padding: theme.spacing(3),
        "&:hover": {
            cursor: "pointer",
        },
    },
    drawerPaper: {
        color: "white",
        width: calculate(240),
        backgroundColor: "#21344D",
        textAlign: "center",
        minWidth: 180,
        marginTop: 55,
    },
    drawerHeader: {
        height: "100%",
        width: calculate(241),
        display: "flex",
        minWidth: 181,
        position: "relative",

        backgroundColor: "#21344D",
        justifyContent: "flex-start",
        alignItems: "inherit",
        "& p": {
            fontSize: 22,
            color: "white",
        },
        "&:hover": {
            cursor: "pointer",
        },
        [theme.breakpoints.down("xs")]: {
            "& p": {
                fontSize: 16
            }
        },
    },
    drawerHeaderText: {
        marginLeft: theme.spacing(4),
    },
    menuIcon: {
        position: "absolute",
        right: 15
    },
    header: {
        backgroundColor: "white",
        width: "100%",
        height: 54,
        position: "fixed",
        top: 0,
        left: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #B0B0B0",
        zIndex: 10,
    },
    headerButton: {
        backgroundColor: "#21344D",
        width: calculate(207),
        alignSelf: "start",
        height: 40,
        borderRadius: 42,
        textTransform: "none",
        fontSize: 20,
        margin: theme.spacing(2),
        color: "white",
        minWidth: 220,
        "&:hover": {
            background: "#1b2c44",
        },
        [theme.breakpoints.down("xs")]: {
            display: "none",
        },
        position: "absolute",
        bottom: theme.spacing(20),
        textAlign: "center",
    },
    list: {
        paddingTop: theme.spacing(2),
        alignSelf: "baseline",
        width: "100%"
    },
    listButton: {
        marginBlockStart: theme.spacing(1),
        marginLeft: theme.spacing(2),
        height: 55,
        width: "90%",
        borderRadius: 42.69,
        "&:hover": {
            background: "#36547B",
            cursor: "pointer"
        },
        "&:active": {
            background: "#36547B",
        },
        "&:focus": {
            background: "#36547B",
        },
        [theme.breakpoints.down("xs")]: {
            height: 45,
        },
    },
    listText: {
        fontSize: 19,
        fontWeight: 500,
        fontFamily: "Poppins",
        [theme.breakpoints.down("xs")]: {
            fontSize: 13,
        },
    },
    listIcon: {
        color: "white",
        fontSize: 25,
        minWidth: 33,
        marginBottom: theme.spacing(1),
    },
    logoutbtn: {
        display: "flex",
        borderRadius: 23,
        color: "white",
        textTransform: "none",
        alignSelf: "start",
        position: "absolute",
        bottom: theme.spacing(13.5),
        fontWeight: 500,
        fontSize: 18,
        margin: theme.spacing(2),
        minWidth: 220,
        height: 36,
        "&:hover": {
            backgroundColor: "#36547B",
        },
        textAlign: "center",
    },
    bottomList: {
        position: "absolute",
        bottom: 100,
    },
}));

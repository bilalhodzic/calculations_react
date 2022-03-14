import React from "react";
import { useHistory } from "react-router-dom";
import useWindowDimensions from "./windowDimension";
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
    Select,
    MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { ReactComponent as CalcIcon } from "../images/calc_icon.svg";
import { ReactComponent as HomeIcon } from "../images/HomeIcon.svg";
import { ReactComponent as MenuIcon } from "../images/burgerIcon.svg";
import { ReactComponent as LogoutIcon } from "../images/logoutIcon.svg";
import { ReactComponent as PlusIcon } from "../images/plusIcon.svg";
import { ReactComponent as BritishFlagIcon } from "../images/uk.svg";
import { ReactComponent as SwedishFlagIcon } from "../images/se.svg";

const languages = [
    {
        flag: <BritishFlagIcon />,
        value: "en",
    },
    {
        flag: <SwedishFlagIcon />,
        value: "se",
    },
];

export default function Layout(props) {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { width } = useWindowDimensions();
    const history = useHistory();
    const classes = useStyles();
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = React.useState("se");

    React.useEffect(() => {
        i18n.changeLanguage("se");
    }, []);

    const handleDrawer = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawerList = [
        {
            name: t("Dashboard.1"),
            icon: <HomeIcon />,
            pathname: "/home",
        },
        {
            name: t("Calculations.1"),
            icon: <CalcIcon />,
            pathname: "/calculations",
        },
    ];

    const drawer = (
        <Box className={classes.listContainer}>
            <List className={classes.list}>
                {drawerList.map((list, index) => (
                    <ListItem
                        className={classes.listButton}
                        button
                        key={list.name}
                        onClick={() =>
                            history.push({
                                pathname: list.pathname,
                            })
                        }
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
                    onClick={() =>
                        history.push({
                            pathname: "/add",
                        })
                    }
                >
                    <PlusIcon style={{ marginRight: 15 }} />
                    <Typography className={classes.listText}>
                        {t("New calculation.1")}
                    </Typography>
                </ListItem>
                <ListItem
                    className={classes.listButton}
                    onClick={() => {
                        localStorage.removeItem("token");
                        history.push("/");
                    }}
                >
                    <LogoutIcon style={{ marginRight: 15 }} />
                    <Typography className={classes.listText}>
                        {t("Log out.1")}
                    </Typography>
                </ListItem>
            </List>
        </Box>
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
                        onClick={() =>
                            history.push({
                                pathname: "/home",
                            })
                        }
                    >
                        <Typography className={classes.drawerHeaderText}>
                            {t("Calculations.1")}
                        </Typography>
                        <Hidden xsDown>
                            <MenuIcon className={classes.menuIcon} />
                        </Hidden>
                    </Box>
                    <Hidden smUp>
                        <MenuIcon
                            className={classes.menuMobile}
                            onClick={handleDrawer}
                        />
                    </Hidden>
                    <Hidden xsDown>
                        <Select
                            value={currentLanguage}
                            onChange={(e) => {
                                setCurrentLanguage(e.target.value);
                                i18n.changeLanguage(e.target.value);
                            }}
                            className={classes.select}
                        >
                            <MenuItem value={languages[0].value}>
                                {languages[0].flag}
                            </MenuItem>
                            <MenuItem value={languages[1].value}>
                                {languages[1].flag}
                            </MenuItem>
                        </Select>
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
        flexShrink: 0,
    },
    menuIcon: {
        padding: theme.spacing(3),
        "&:hover": {
            cursor: "pointer",
        },
    },
    menuMobile: {
        padding: theme.spacing(3),
        "&:hover": {
            cursor: "pointer",
        },
        filter: "brightness(0) saturate(100%) invert(15%) sepia(12%) saturate(2489%) hue-rotate(174deg) brightness(101%) contrast(88%)",
    },
    drawerPaper: {
        color: "white",
        width: "17%",
        backgroundColor: "#21344D",
        textAlign: "center",
        minWidth: 180,
        marginTop: 55,
        [theme.breakpoints.down("xs")]: {
            width: "40%",
        },
    },
    drawerHeader: {
        height: "100%",
        width: "17%",
        display: "flex",
        minWidth: 181,
        position: "relative",

        backgroundColor: "#21344D",
        justifyContent: "flex-start",
        alignItems: "inherit",
        "& p": {
            fontSize: "min(1.2vw, 2.2vh)",
            color: "white",
        },
        "&:hover": {
            cursor: "pointer",
        },
        [theme.breakpoints.down("xs")]: {
            "& p": {
                fontSize: "min(5vw, 2vh)"
            }
        }
    },
    drawerHeaderText: {
        marginLeft: theme.spacing(4),
        fontSize: "1vw",
        [theme.breakpoints.down("xs")]: {
            marginLeft: "auto",
            marginRight: "auto",
        },
    },
    menuIcon: {
        position: "absolute",
        right: 15,
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
        width: "100%",
    },
    listButton: {
        marginBlockStart: theme.spacing(1),
        marginLeft: theme.spacing(2),
        height: 55,
        width: "90%",
        borderRadius: 42.69,
        "&:hover": {
            background: "#36547B",
            cursor: "pointer",
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
        fontSize: "min(1vw, 2vh)",
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
        marginTop: "auto",
        marginBottom: "35%",
    },
    select: {
        width: "2.5%",
        marginRight: "1.5%",
    },
    listContainer: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
    },
}));

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
import { ReactComponent as CalcIcon } from "../images/calc_icon.svg";
import { ReactComponent as HomeIcon } from "../images/HomeIcon.svg";
import { ReactComponent as MenuIcon } from "../images/burgerIcon.svg";

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
  {
    name: "New Calculation",
    icon: "+ ",
    pathname: "/add",
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
      <Box className={classes.footer}></Box>
      <List className={classes.list}>
        {drawerList.map((list, index) => (
          <ListItem
            className={classes.listButton}
            button
            key={list.name}
            onClick={() => history.push(list.pathname)}
          >
            <ListItemIcon className={classes.listIcon}>
              {list.icon}
            </ListItemIcon>
            <ListItemText disableTypography={true} className={classes.listText}>
              {list.name}
            </ListItemText>
          </ListItem>
        ))}
      </List>
      <Button className={classes.logoutbtn} onClick={() => history.push("/")}>
        Log Out
      </Button>
    </>
  );

  return (
    <Box className={classes.root}>
      <Box className={classes.header}>
        <Box className={classes.drawerHeader}>
          <Typography>Calculation</Typography>
        </Box>
        <Button
          className={classes.headerButton}
          onClick={() => history.push("/add")}
        >
          + New Calculations
        </Button>
        <Hidden smUp>
          <MenuIcon className={classes.menuIcon} onClick={handleDrawer} />
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
    marginLeft: `max(180px, ${calculate(266)})`, // max calculation similarly picks the largest from a comma separated list of values (of any length).
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  drawer: {
    width: calculate(266),
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
    width: calculate(266),
    backgroundColor: "#21344D",
    textAlign: "center",
    minWidth: 180,
    marginTop: 55,
  },
  drawerHeader: {
    height: "100%",
    width: calculate(267),
    backgroundColor: "#21344d",
    display: "flex",
    minWidth: 181,

    justifyContent: "center",
    alignItems: "inherit",
    "& p": {
      fontSize: 22,
      color: "white",
    },
  },
  footer: {
    width: "100%",
    height: calculate(67, 1024),
    backgroundColor: "white",
    position: "fixed",
    bottom: 0,
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  header: {
    backgroundColor: "white",
    width: "100%",
    height: 54,
    position: "absolute",
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #B0B0B0",
  },
  headerButton: {
    backgroundColor: "#21344D",
    width: calculate(207),
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
  },
  list: {
    paddingTop: theme.spacing(8),
    alignSelf: "center",
  },
  listButton: {
    marginBlockStart: theme.spacing(8),
    height: 55,
    borderRadius: 42.69,
    "&:hover": {
      background: "#36547B",
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
    border: "1px solid white",
    color: "white",
    textTransform: "none",
    alignSelf: "center",
    position: "absolute",
    bottom: theme.spacing(12),
    fontWeight: 500,
    fontSize: 14.25,
    marginBottom: 20,
    width: 100,
    height: 36,
    "&:hover": {
      backgroundColor: "#36547B",
    },
  },
}));

import React from "react";
import {
  Button,
  Typography,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ReactComponent as CalcIcon } from "../images/calc_icon.svg";
import { ReactComponent as HomeIcon } from "../images/HomeIcon.svg";

const drawerList = [
  {
    name: "Dashboard",
    icon: <HomeIcon />,
  },
  {
    name: "Calculations",
    icon: <CalcIcon />,
  },
  {
    name: "New Calculation",
    icon: "+ ",
  },
];

export default function Layout(props) {
  React.useEffect(() => {
    //call function while first time render
  }, []);

  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Drawer
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
        variant="permanent"
        anchor="left"
      >
        <Box className={classes.header}>
          <Box className={classes.drawerHeader}>
            <Typography>Calculation</Typography>
          </Box>
          <Button className={classes.headerButton}>+ New Calculations</Button>
        </Box>
        <Box className={classes.footer}></Box>
        <List className={classes.list}>
          {drawerList.map((list, index) => (
            <ListItem className={classes.listButton} button key={list.name}>
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
      </Drawer>
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
    "& > *": {
      // margin: theme.spacing(1),
    },
    display: "flex",
  },
  drawer: {
    width: calculate(266),
    flexShrink: 0,
  },
  drawerPaper: {
    color: "white",
    width: calculate(266),
    backgroundColor: "#21344D",
    textAlign: "center",
    minWidth: 180,
  },
  drawerHeader: {
    height: "-webkit-fill-available",
    width: calculate(267),
    backgroundColor: "#21344d",
    display: "flex",
    minWidth: 181,

    justifyContent: "center",
    alignItems: "inherit",
    "& p": {
      fontSize: 22,
    },
  },
  footer: {
    width: "100%",
    height: calculate(67, 1024),
    backgroundColor: "white",
    position: "fixed",
    bottom: 0,
  },
  header: {
    backgroundColor: "white",
    width: "100%",
    height: calculate(79, 1024),
    position: "fixed",
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
  },
  listText: {
    fontSize: 19,
    fontWeight: 500,
    fontFamily: "Poppins",
  },
  listIcon: {
    color: "white",
    fontSize: 25,
    minWidth: 33,
    marginBottom: theme.spacing(1),
  },
}));

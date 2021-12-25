import React from "react";

import { Scrollbars } from "react-custom-scrollbars";
import { Box, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { SchoolIcon } from "../svgIcons/SchoolIcon";
import { BuildingIcon } from "../svgIcons/BuildingIcon";
import { HotelIcon } from "../svgIcons/HotelIcon";
import { HospitalIcon } from "../svgIcons/HospitalIcon";
import { HomeIcon } from "../svgIcons/HomeIcon";
import { ChurchIcon } from "../svgIcons/ChurchIcon";

import types from "../../helper/data.json";

const newProduction = [
    {
        category: types.category.school,
        icon: (
            <SchoolIcon color="#21344d" size={80} style={{ paddingTop: 10 }} />
        ),
        label: "School",
    },
    {
        category: types.category.building,
        icon: (
            <BuildingIcon
                color="#21344d"
                size={80}
                style={{ paddingTop: 10 }}
            />
        ),
        label: "Building",
    },
    {
        category: types.category.hospital,
        icon: (
            <HospitalIcon
                color="#21344d"
                size={80}
                style={{ paddingTop: 10 }}
            />
        ),
        label: "Hospital",
    },
    {
        category: types.category.hotel,
        icon: (
            <HotelIcon color="#21344d" size={80} style={{ paddingTop: 10 }} />
        ),
        label: "Hotel",
    },
    {
        category: types.category.home,
        icon: <HomeIcon color="#21344d" size={80} style={{ paddingTop: 10 }} />,
        label: "Home",
    },
    {
        category: types.category.church,
        icon: (
            <ChurchIcon color="#21344d" size={80} style={{ paddingTop: 10 }} />
        ),
        label: "Church",
    },
];
const rebuilding = [
    {
        category: types.rebuilding.omby,
        icon: (
            <SchoolIcon color="#21344d" size={80} style={{ paddingTop: 10 }} />
        ),
        label: "Ombyggnad bostäder",
    },
    {
        category: types.rebuilding.kontor,
        icon: (
            <SchoolIcon color="#21344d" size={80} style={{ paddingTop: 10 }} />
        ),
        label: "Kontor",
    },
    {
        category: types.rebuilding.handel,
        icon: (
            <SchoolIcon color="#21344d" size={80} style={{ paddingTop: 10 }} />
        ),
        label: "Handel",
    },
    {
        category: types.rebuilding.skola,
        icon: (
            <SchoolIcon color="#21344d" size={80} style={{ paddingTop: 10 }} />
        ),
        label: "Skola",
    },
];

export default function Step1(props) {
    const classes = useStyles();

    const data = props.data;
    const setData = props.setData;

    const projectCategory = props.category;
    const projectType = props.data.type;

    const items =
        projectType === types.types.new_production.id
            ? newProduction.map((e) => {
                  return (
                      <Paper
                          elevation={4}
                          onClick={() => handleClickPaper(e.category)}
                          className={classes.paperBox}
                          style={
                              projectCategory === e.category
                                  ? { border: "4px solid #21344d" }
                                  : { border: "4px solid white" }
                          }
                      >
                          {e.icon}
                          <Typography className={classes.paperText}>
                              {e.label}
                          </Typography>
                      </Paper>
                  );
              })
            : rebuilding.map((e) => {
                  return (
                      <Paper
                          elevation={4}
                          onClick={() => handleClickPaper(e.category)}
                          className={classes.paperBox}
                          style={
                              projectCategory === e.category
                                  ? { border: "4px solid #21344d" }
                                  : { border: "4px solid white" }
                          }
                      >
                          {e.icon}
                          <Typography className={classes.paperText}>
                              {e.label}
                          </Typography>
                      </Paper>
                  );
              });

    let rows = [];
    for(let i = 0; i < items.length; i += 3){
        rows.push(
            <Box className={classes.root} style={{ marginTop: 20 }}>
                {items[i]}
                {i + 1 < items.length && items[i + 1]}
                {i + 2 < items.length && items[i + 2]}
            </Box>
        );
    }

    const handleClickPaper = (prop) => {
        //setting the state property from parent component
        data.category = prop;
        props.handleChange("ProjectType", prop);
    };

    return (
        <Box maxHeight={"30em"} overflow="auto">
            <Scrollbars style={{ width: "100%", height: "20em" }}>
                {rows.map((e) => e)}
            </Scrollbars>
        </Box>
    );
}

//add new styles here
const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        [theme.breakpoints.down("xs")]: {
            flexDirection: "column",
            display: "inline-flex",
            "&>*": {
                margin: 10,
            },
        },
    },
    paperBox: {
        width: 250,
        height: 140,
        textAlign: "center",
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        border: "4px solid white",
        "&:hover": {
            cursor: "pointer",
        },
        [theme.breakpoints.down("xs")]: {
            width: 140,
        },
    },
    paperText: {
        fontSize: 20,
        fontWeight: 600,
        color: "black",
        [theme.breakpoints.down("xs")]: {
            fontSize: 20,
        },
    },
}));

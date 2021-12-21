import React from "react";
import {
  Paper,
  InputBase,
  Select,
  MenuItem,
  Button,
  Hidden,
} from "@material-ui/core";
import Layout from "../Layout";
import { makeStyles } from "@material-ui/core/styles";
import { ReactComponent as ArrowDown } from "../../images/arrowDown.svg";
import CalcTable from "./CalcTable";

import axios from "axios";
import helper from "../../helper/TransformData";
import config from "../../config.json";

//table data which wiil be returned from database
//just for testing
const data = [
  {
    id: 1,
    Name: "Name",
    Date: "02/05/2021",
    Type: { text: "Building", color: "#0EBD00", backgroundcolor: "#9BFF93" },
    Area: "Adress1",
  },
  {
    id: 2,
    Name: "Name1",
    Date: "04/03/2021",
    Type: { text: "School", color: "#00ADFF", backgroundcolor: "#B4E7FF" },
    Area: "Adress2",
    Actions: "actions",
  },
  {
    id: 3,
    Name: "Name2",
    Date: "04/08/2021",
    Type: {
      text: "Hospital",
      color: "#FF4100",
      backgroundcolor: "#FFCEBD",
    },
    Area: "Adress3",
    Actions: "actions",
  },
  {
    id: 4,
    Name: "Name3",
    Date: "12/08/2021",
    Type: {
      text: "Hotel",
      color: "#3F75BD",
      backgroundcolor: "#C2DCFF",
    },
    Area: "Adress4",
    Actions: "actions",
  },
  {
    id: 5,
    Name: "Name4",
    Date: "24/03/2021",
    Type: {
      text: "Hospital",
      color: "#FF4100",
      backgroundcolor: "#FFCEBD",
    },
    Area: "Adress5",
    Actions: "actions",
  },
  {
    id: 6,
    Name: "Name5",
    Date: "02/01/2021",
    Type: { text: "Building", color: "#0EBD00", backgroundcolor: "#9BFF93" },
    Area: "Adress6",
    Actions: "actions",
  },
];

export default function Calculations() {
  const [selectValueType, setSelectValueType] = React.useState(0);
  const [selectValueCategory, setSelectValueCategory] = React.useState(0);
  const [searchInput, setSearchInput] = React.useState("");
  const [tableData, setTableData] = React.useState(data);

  React.useEffect(async () => {
    setTableData(helper.transformCalculations((await getCalculationsForPage(1, selectValueCategory, selectValueType)).data));
  }, []);

  const handleSelectTypeChange = (e) => {
    setSelectValueType(e.target.value);
  };

  const handleSelectCategoryChange = (e) => {
    setSelectValueCategory(e.target.value);
  };

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchClick = async (e) => {
    if(searchInput === ""){
      setTableData(helper.transformCalculations((await getCalculationsForPage(1, selectValueCategory, selectValueType)).data));
    }
    // else{
    //   setTableData(helper.transformCalculations((await getCalculationsWithName(searchInput)).data));
    // }
  };

  const classes = useStyles();

  return (
    <Layout>
      <Paper elevation={6} className={classes.paperHeader}>
        <Hidden xsDown>
          <InputBase
            placeholder="Search By Name..."
            className={classes.input}
            value={searchInput}
            style={{ width: 300 }}
            onChange={handleInputChange}
          />
        </Hidden>
        <Hidden smUp>
          <InputBase
            placeholder="Search By Name..."
            className={classes.input}
            value={searchInput}
            onChange={handleInputChange}
          />
        </Hidden>
        <Select
          value={selectValueType}
          className={classes.input}
          disableUnderline
          onChange={handleSelectTypeChange}
          style={{ paddingRight: 10, width: 200 }}
          IconComponent={() => <ArrowDown/> }
        >
          <MenuItem value={0}>Type</MenuItem>
          <MenuItem value={1}>New Production</MenuItem>
          <MenuItem value={2}>Rebuilding</MenuItem>
        </Select>
        <Select
          value={selectValueCategory}
          className={classes.input}
          disableUnderline
          onChange={handleSelectCategoryChange}
          style={{ paddingRight: 10, width: 200 }}
          IconComponent={() => <ArrowDown />}
        >
          <MenuItem value={0}>Category</MenuItem>
          <MenuItem value={1}>Building</MenuItem>
          <MenuItem value={2}>Hospital</MenuItem>
          <MenuItem value={3}>School</MenuItem>
          <MenuItem value={4}>Hotel</MenuItem>
          <MenuItem value={5}>Home</MenuItem>
          <MenuItem value={6}>Church</MenuItem>
        </Select>
        <Button
          className={classes.Btn}
          onClick={handleSearchClick}
          color="primary"
          variant="contained"
        >
          Search
        </Button>
      </Paper>
      <Paper elevation={6} className={classes.paper}>
        <CalcTable data={tableData} />
      </Paper>
    </Layout>
  );
}

async function getCalculationsForPage(pageNumber, categoryNumber, typeNumber){
  const axiosOptions = {
    url: `${config.baseUrl}/calculations/getcalculations/filter/${pageNumber}/${categoryNumber}/${typeNumber}`,
    method: "GET",
  };

  const response = await axios(axiosOptions);
  return response.data;
}

async function getCalculationsWithName(name){
  const axiosOptions = {
    url: `${config.baseUrl}/calculations/getname/${name}`,
    method: "GET",
  };

  const response = await axios(axiosOptions);
  return response.data;
}

//add new styles here
const useStyles = makeStyles((theme) => ({
  paper: {
    height: "64vh",
    margin: theme.spacing(5),
    marginTop: 0,
    marginBottom: 0,
    borderRadius: 7,
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    maxHeight: "80vh",
    fontSize: 31,
    fontFamily: "Poppins",
    color: "black",
    fontWeight: 500,
    minWidth: 600,
    [theme.breakpoints.down("xs")]: {
      margin: theme.spacing(1),
      minWidth: 0,
      fontSize: 23,
      // height: "100%",
    },
  },
  paperHeader: {
    marginBottom: theme.spacing(2),
    height: 65,
    borderRadius: 6,
    margin: theme.spacing(5),
    display: "flex",
    alignItems: "center",
    minWidth: 600,

    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      margin: theme.spacing(1),
      height: "100%",
      minWidth: 0,

      flexDirection: "column",
      "& > *": {
        margin: 8,
      },
    },
  },
  input: {
    height: 50,
    border: "0.854575px solid #ABABAB",
    borderRadius: 8.55,
    fontSize: 18,
    fontWeight: 500,
    color: "#5e5e5e",
    paddingLeft: theme.spacing(2),
    marginLeft: theme.spacing(3),
    width: 150,

    [theme.breakpoints.down("xs")]: {
      fontSize: 15,
      marginLeft: 0,
      width: "80%",
    },
  },

  Btn: {
    width: 250,
    height: 50,
    borderRadius: 9.4,
    fontSize: 17.82,
    marginRight: theme.spacing(3),
    textTransform: "none",
    [theme.breakpoints.down("xs")]: {
      fontSize: 15,
      marginRight: 0,
      marginLeft: theme.spacing(5),
      alignSelf: "flex-start",
      width: 150,
      height: "auto",
    },
  },
}));

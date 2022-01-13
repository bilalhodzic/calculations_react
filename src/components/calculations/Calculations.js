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
import types from "../../helper/data.json";
import config from "../../config.json";
import { useLocation } from "react-router";
import { useTranslation } from "react-i18next";

export default function Calculations(props) {
  let maxPage = 1;
  const [selectValueType, setSelectValueType] = React.useState(0);
  const [selectValueCategory, setSelectValueCategory] = React.useState(0);
  const [searchInput, setSearchInput] = React.useState("");
  const [tableData, setTableData] = React.useState([]);
  const { t, i18n } = useTranslation();

  React.useEffect(async () => {
    setTableData(helper.transformCalculations((await getCalculationsForPage(1, selectValueCategory, selectValueType)).data));
  }, []);

  const classes = useStyles();
  const location = useLocation();

  if(!location.state || !location.state.token){
    return "Unauthorized";
  }
  const token = location.state.token;

  const getCalculationsForPage = async (pageNumber, categoryNumber, typeNumber) => {
    const axiosOptions = {
      url: `${config.baseUrl}/calculations/getcalculations/filter/${pageNumber}/${categoryNumber}/${typeNumber}`,
      headers: {
        'Access-Control-Allow-Origin': "*",
        'Authorization': `Bearer ${token}`
      },
      method: "GET",
    };
  
    const response = await axios(axiosOptions);
    return response.data;
  }

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
  };

  const downloadMoreData = async (page) => {
    if(page <= maxPage) return [];
    maxPage++;
    return helper.transformCalculations((await getCalculationsForPage(maxPage, selectValueCategory, selectValueType)).data);
  };

  const menuItems = [];
  menuItems.push(<MenuItem value={0}>{t('Category.1')}</MenuItem>)
  for(const property in types.category){
    if(types.category[property].id === 31) break;
    menuItems.push(<MenuItem value={types.category[property].id}>{types.category[property].value}</MenuItem>);
  }

  return (
    <Layout token={token}>
      <Paper elevation={6} className={classes.paperHeader}>
        <Hidden xsDown>
          <InputBase
            placeholder={t("Search by name.1")}
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
          style={{ paddingRight: 10, width: 250 }}
          IconComponent={() => <ArrowDown/> }
        >
          <MenuItem value={0}>{t('Type.1')}</MenuItem>
          <MenuItem value={1}>New Production</MenuItem>
          <MenuItem value={2}>Rebuilding</MenuItem>
        </Select>
        <Select
          value={selectValueCategory}
          className={classes.input}
          disableUnderline
          autoWidth
          onChange={handleSelectCategoryChange}
          style={{ paddingRight: 10, width: 250 }}
          IconComponent={() => <ArrowDown />}
        >
          {menuItems.map((e) => e)}
        </Select>
        <Button
          className={classes.Btn}
          onClick={handleSearchClick}
          color="primary"
          variant="contained"
        >
          {t('Search.1')}
        </Button>
      </Paper>
      <Paper elevation={6} className={classes.paper}>
        <CalcTable data={tableData} downloadMoreData={downloadMoreData} token={token} />
      </Paper>
    </Layout>
  );
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

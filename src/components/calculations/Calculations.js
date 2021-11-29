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
  const [selectValue, setSelectValue] = React.useState("none");
  const [searchInput, setSearchInput] = React.useState("");
  const [tableData, setTableData] = React.useState(data);

  React.useEffect(() => {
    //call function while first time render
  }, []);

  const handleSelectChange = (e) => {
    setSelectValue(e.target.value);
  };

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchClick = (e) => {
    //if search options are blank return all data
    if (searchInput === "" && selectValue === "none") {
      return setTableData(data);
    }
    var newData = [];
    data.map((row) => {
      if (searchInput === "") {
        if (row.Type.text === selectValue) {
          newData.push(row);
        }
      } else if (selectValue === "none") {
        if (row.Name.toLowerCase().includes(searchInput.toLowerCase())) {
          newData.push(row);
        }
      } else {
        if (
          row.Name.toLowerCase().includes(searchInput.toLowerCase()) &&
          row.Type.text === selectValue
        ) {
          newData.push(row);
        }
      }
    });
    setTableData(newData);
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
          value={selectValue}
          className={classes.input}
          disableUnderline
          onChange={handleSelectChange}
          style={{ paddingRight: 10 }}
          IconComponent={() => <ArrowDown />}
        >
          <MenuItem value={"none"}>Type</MenuItem>
          <MenuItem value={"Building"}>Building</MenuItem>
          <MenuItem value={"Hospital"}>Hospital</MenuItem>
          <MenuItem value={"School"}>School</MenuItem>
          <MenuItem value={"Hotel"}>Hotel</MenuItem>
          <MenuItem value={"Home"}>Home</MenuItem>
          <MenuItem value={"Church"}>Church</MenuItem>
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

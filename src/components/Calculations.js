import React from "react";
import { Paper, InputBase, Select, MenuItem, Button } from "@material-ui/core";
import Layout from "./Layout";
import { makeStyles } from "@material-ui/core/styles";
import { ReactComponent as ArrowDown } from "../images/arrowDown.svg";
import CalcTable from "./CalcTable";

export default function Calculations() {
  const [selectValue, setSelectValue] = React.useState("none");
  React.useEffect(() => {
    //call function while first time render
  }, []);

  const handleSelectChange = (e) => {
    setSelectValue(e.target.value);
  };

  const classes = useStyles();

  return (
    <Layout>
      <Paper elevation={6} className={classes.paperHeader}>
        <InputBase
          placeholder="Search By Name..."
          className={classes.input}
          style={{ width: 300 }}
        />
        <Select
          value={selectValue}
          className={classes.input}
          disableUnderline
          onChange={handleSelectChange}
          style={{ width: 150, paddingRight: 10 }}
          IconComponent={() => <ArrowDown />}
        >
          <MenuItem value={"none"}>Type</MenuItem>
          <MenuItem value={"Building"}>Building</MenuItem>
          <MenuItem value={"Hospital"}>Hospital</MenuItem>
          <MenuItem value={"School"}>School</MenuItem>
        </Select>
        <Button className={classes.Btn} color="primary" variant="contained">
          Search
        </Button>
      </Paper>
      <Paper elevation={6} className={classes.paper}>
        <CalcTable />
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
    //width: "calc(100% - 100px)",
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
  },
  paperHeader: {
    marginBottom: theme.spacing(2),
    height: 65,
    borderRadius: 6,
    margin: theme.spacing(5),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
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
  },

  Btn: {
    width: 250,
    height: 50,
    borderRadius: 9.4,
    fontSize: 17.82,
    marginRight: theme.spacing(3),
    textTransform: "none",
  },
}));

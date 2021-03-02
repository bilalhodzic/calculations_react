import { BrowserRouter, Route } from "react-router-dom";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Calculations from "./components/Calculations";
import NewCalculation from "./components/NewCalculation";

import "./App.css";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Poppins", "Sans-serif"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Dashboard} />
        <Route path="/calculations" component={Calculations} />
        <Route path="/add" component={NewCalculation} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

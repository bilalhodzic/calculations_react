import { BrowserRouter, Route } from "react-router-dom";

import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Calculations from "./components/calculations/Calculations";
import NewCalculation from "./components/new_calculation/NewCalculation";
import AboutUs from "./components/about/AboutUs";
import Step0 from "./components/customStepper/Step0";
import "./App.css";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Poppins", "Sans-serif"].join(","),
  },
  palette: {
    primary: { 500: "#21344D" },
    secondary: { main: "#bababa" },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Dashboard} />
        <Route path="/calculations" component={Calculations} />
        <Route path="/add" component={Step0} />
        <Route path="/about" component={AboutUs} />
        <Route path="/new" component={NewCalculation}/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

import { BrowserRouter, Route } from "react-router-dom";

import Login from "./components/Login";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login} />
    </BrowserRouter>
  );
}

export default App;

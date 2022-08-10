import "./App.css";
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navigation from "./components/navigation/Navigation";
import Display from "./components/body/Display";
import AllQuotes from "./components/quotes/AllQuotes";
import AddQuotes from "./components/addQuotes/AddQuotes";

import { Redirect, Route, Switch } from "react-router-dom";
import Welcome from "./components/welcome/Welcome";
const App = () => {
  return (
    <div className="fluid-container">
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home"/>
        </Route>
        <Route path="/home">
          <Welcome />
        </Route>
        <Route path="/display">
          <Display />
        </Route>
        <Route path="/welcome">
          <AllQuotes />
        </Route>

        <Route path="/add">
          {" "}
          <AddQuotes />
        </Route>
      </Switch>
    </div>
  );
};

export default App;

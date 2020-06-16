import * as React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./Components/Login";
import "./App.css";
import Dashboard from "./Components/Dashboard";

const App: React.FunctionComponent = () => {
  return (
    <Router>
        <Switch>
        <Route exact path="/" component={Login} />
        <Route  path="/dashboard" component={Dashboard} />
        </Switch>
    </Router>
  );
};

export default React.memo(App);

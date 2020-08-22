import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <div className="contentBody">
        <Switch>
          <Route exact path="/">{Home()}</Route>
          <Route path="/login" >{Login()} </Route>
          <Route path="/dashboard" >{Dashboard()} </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;

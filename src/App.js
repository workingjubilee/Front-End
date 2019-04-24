import React from "react";
import { Route, NavLink } from "react-router-dom";
import "./App.css";

import Journal from "./components/Journal/Journal";
import Login from "./components/Login/Login";
import Scan from "./components/Scan/Scan";
import SignUp from "./components/SignUp/SignUp";
import UserDashboard from "./components/UserDashboard/UserDashboard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={SignUp} />
        <Route exact path="/journal" component={Journal} />
        <Route exact path="/scan" component={Scan} />
        <Route exact path="/dashboard" component={UserDashboard} />
      </header>
    </div>
  );
}

function Home() {
  return (
    <div className="homeScreen">
      <h2>Home screen</h2>
      <NavLink to="/login">Login</NavLink>
      <br />
      <NavLink to="/register">Register</NavLink>
    </div>
  );
}

export default App;

import React from "react";
import "./app.scss";
import Login from "./components/Auth/Login";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import MachineHome from "./components/Machines/MachineHome";
import Nav from "./components/Nav/Nav";
import GpsHome from "./components/GPS/GpsHome";
import Calcs from "./components/Calculators/Calcs";

const App = () => {
  return (
    // todo: get routing done

    <div className="appWrap">
      {/* all the routes ..... for routing */}

      <Nav />
      {/* if not logged in show log in, else show preferred home page */}
      {/* <Login /> */}
      
      <Switch>
        <Route path="/login" component ={Login} />
        <Route path="/gps" component={GpsHome} />
        <Route path="/calcs" component={Calcs} />
        <Route path="/" component={MachineHome} />
      </Switch>
    </div>
  );
};

export default App;

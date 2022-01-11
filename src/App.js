import React from "react";
import "./App.css";
import About from "./About";
import Home from "./Home";
import ContactUs from "./contactUs";
import Form from "./form";
import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/About" component={About} />
        <Route exact path="/" component={Home} />
        <Route path="/contactUs" component={ContactUs} />
        <Route path="/form" component={Form} />
        <Redirect to="/"/>
      </Switch>
    </Router>
  );
}

export default App;

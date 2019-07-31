import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Email from "./components/Email";
import About_me from "./components/About_me";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/about_me" component={About_me} />
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} />
        <Route path="/contact" component={Email} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;

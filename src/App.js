import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Email from "./components/Email";
import AboutMe from "./components/AboutMe";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/o_mnie" component={AboutMe} />
        <Route path="/projekty" component={About} />
        <Route path="/technologie" component={Skills} />
        <Route path="/kontakt" component={Email} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;

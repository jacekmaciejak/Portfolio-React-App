import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Error from "./pages/Error";
// import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;

import React from "react";
import { Switch, Route } from "react-router-dom";

//components
import Header from "./components/Header";
import Home from "./components/home/Home";
import About from "./components/about/About.js";

const App = () => {
  return (
    <div id="App">
      <div className="indented-container">
        <Header />
      </div>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;

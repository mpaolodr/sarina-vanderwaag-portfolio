import React from "react";
import { Switch, Route } from "react-router-dom";

//components
import Header from "./components/Header";
import Home from "./components/home/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div id="App">
      <div className="indented-container">
        <Header />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;

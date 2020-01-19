import React from "react";

import HeroArea from "./HeroArea.js";
import Gigapet from "./Gigapet.js";
import Nuggets from "./Nuggets.js";
import Footer from "./Footer.js";

const Home = () => {
  return (
    <main>
      <div className="indented-container">
        <HeroArea />
        <Gigapet />
        <Nuggets />
      </div>

      <Footer />
    </main>
  );
};

export default Home;

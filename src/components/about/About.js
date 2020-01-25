import React from "react";

//components
import Profile from "./Profile";
import Tldr from "./Tldr";
import AboutMe from "./AboutMe";

const About = () => {
  return (
    <main>
      <div className="indented-container">
        <Profile />
        <Tldr />
        <AboutMe />
      </div>
    </main>
  );
};

export default About;

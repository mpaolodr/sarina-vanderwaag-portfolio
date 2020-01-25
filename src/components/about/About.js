import React from "react";

//components
import Profile from "./Profile";
import Tldr from "./Tldr";
import AboutMe from "./AboutMe";

const About = () => {
  return (
    <main className="about">
      <Profile />
      <Tldr />
      <AboutMe />
    </main>
  );
};

export default About;

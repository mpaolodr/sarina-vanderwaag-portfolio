import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="main-nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="#">About</NavLink>
        <NavLink to="#">Experiments</NavLink>
      </nav>
    </header>
  );
};

export default Header;

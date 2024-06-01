import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/gallery">Gallery</NavLink>
      <NavLink to="/showcase">Showcase</NavLink>
    </nav>
  );
}

export default NavBar;

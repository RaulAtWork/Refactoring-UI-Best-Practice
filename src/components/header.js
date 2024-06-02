import React from "react";
import NavBar from "./Navbar";
import ThemeSelector from "./ThemeSelector";

function Header() {
  return (
    <header className="header">
      <h1>this is the header</h1>
      <NavBar />
      <ThemeSelector />
    </header>
  );
}

export default Header;

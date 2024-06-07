import React from "react";
import NavBar from "./Navbar";
import ThemeSelector from "./ThemeSelector";

function Header() {
  return (
    <header className="header">
      <NavBar />
      <ThemeSelector />
    </header>
  );
}

export default Header;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav className="navbar ">
        <div className="navbar-logo">
          <Link to={"/MARVEL-API"}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg"
              alt="Logo"
            />
          </Link>
        </div>
        <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <Link to={"/MARVEL-API/characters"}>Characters</Link>
          <Link to={"/MARVEL-API/comics"}>Comics</Link>
          <Link to={"/MARVEL-API/mcu"}>MCU</Link>
        </div>

        <div className="navbar-toggle" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? "open" : ""}`} />
          <div className={`bar ${menuOpen ? "open" : ""}`} />
          <div className={`bar ${menuOpen ? "open" : ""}`} />
        </div>
      </nav>
    </header>
  );
};

export default Header;

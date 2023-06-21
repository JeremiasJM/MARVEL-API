import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSession, setActiveSession] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSessionClick = (session) => {
    setActiveSession(session);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="navbar-toggle" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? "open" : ""}`} />
          <div className={`bar ${menuOpen ? "open" : ""}`} />
          <div className={`bar ${menuOpen ? "open" : ""}`} />
        </div>
        <div className="navbar-logo">
          <Link
            to={"/MARVEL-API"}
            onClick={() => handleSessionClick("home")}
            className={activeSession === "home" ? "active" : ""}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg"
              alt="Logo"
            />
          </Link>
        </div>
      </nav>
      <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <Link
          to={"/MARVEL-API/characters"}
          onClick={() => handleSessionClick("characters")}
          className={activeSession === "characters" ? "active" : ""}
        >
          Characters
        </Link>
        <Link
          to={"/MARVEL-API/comics"}
          onClick={() => handleSessionClick("comics")}
          className={activeSession === "comics" ? "active" : ""}
        >
          Comics
        </Link>
        <Link
          to={"/MARVEL-API/mcu"}
          onClick={() => handleSessionClick("mcu")}
          className={activeSession === "mcu" ? "active" : ""}
        >
          MCU
        </Link>
      </div>
    </header>
  );
};

export default Header;

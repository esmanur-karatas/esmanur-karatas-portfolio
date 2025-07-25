import React, { useState } from "react";
import "./Header.css";
import { FaGithub, FaYoutube, FaLinkedin, FaEnvelope, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Menü kapatıcı fonksiyon
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header-container">
      <div className="header-left">
        <a href="https://github.com/esmanur-karatas" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.youtube.com/@esmanurkaratas0" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        <a href="https://www.linkedin.com/in/esmanur-karatas/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="mailto:esmanurkaratas0@outlook.com"><FaEnvelope /></a>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars />
      </div>

      <nav className={`header-right ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/blog" onClick={closeMenu}>Blog</Link>
        <Link to="/projects" onClick={closeMenu}>Projects</Link>
        <Link to="/courses" onClick={closeMenu}>My Courses</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
      </nav>
    </header>
  );
}

export default Header;

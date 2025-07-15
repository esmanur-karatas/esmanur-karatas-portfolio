import React from "react";
import "./Header.css";
import { FaGithub, FaYoutube, FaLinkedin, FaEnvelope, FaGraduationCap } from "react-icons/fa";
import { SiUdemy } from "react-icons/si";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';


function Header() {
  return (
    <header className="header-container">
      <div className="header-left">
        <a href="https://github.com/esmanur-karatas" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.youtube.com/@esmanurkaratas0" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        <a href="https://www.linkedin.com/in/esmanur-karatas/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="mailto:esmanurkaratas0@outlook.com"><FaEnvelope /></a>
      </div>

      <nav className="header-right">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/courses">My Courses</Link>

      </nav>

    </header>
  );
}

export default Header;

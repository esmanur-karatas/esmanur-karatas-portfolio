import React from "react";
import "./Footer.css";
import { FaGithub, FaYoutube, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiUdemy } from "react-icons/si";
import { useTranslation } from 'react-i18next';


function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-left">
        © 2025 Esmanur Karataş
      </div>
      <div className="footer-right">
        <a href="https://github.com/esmanur-karatas" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.youtube.com/@esmanurkaratas0" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        <a href="https://www.linkedin.com/in/esmanur-karatas/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="mailto:esmanurkaratas0@hotmail.com"><FaEnvelope /></a>
       
      </div>
    </footer>
  );
}

export default Footer;

import React from "react";
import "./footer.css";
import { FiInstagram } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Nyoman
      </a>
      <ul className="footer_link">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#service">Services</a>
        </li>
        <li>
          <a href="#portofolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://github.com/nyeka">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/nyoman-eka-swardita-090024222/">
          <BsLinkedin />
        </a>
        <a href="https://instagram.com">
          <FiInstagram />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Nyoman Eka.</small>
      </div>
    </footer>
  );
}

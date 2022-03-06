import React from "react";
import "./header.css";
import CTA from "./CTA";
import Headersocial from "./headersocial";
import ME from "./ME.jpeg";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Nyoman Eka Swardita</h1>
        <h5 className="text-light">App Developer</h5>
        <CTA />
        <Headersocial />
        <div className="me"></div>

        <a href="# contact" className="scroll__down">
          scroll down
        </a>
      </div>
    </header>
  );
};
export default Header;

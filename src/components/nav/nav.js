import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { IoIosContact } from "react-icons/io";
import { BsFillBookFill } from "react-icons/bs";
import { BiBookAdd } from "react-icons/bi";
import { useState } from "react";

export default function Nav() {
  const [activenav, indexnav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => indexnav("#")}
        className={activenav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => indexnav("#about")}
        className={activenav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#contact"
        onClick={() => indexnav("#contact")}
        className={activenav === "#contact" ? "active" : ""}
      >
        <IoIosContact />
      </a>
      <a
        href="#experience"
        onClick={() => indexnav("#experience")}
        className={activenav === "#experience" ? "active" : ""}
      >
        <BiBookAdd />
      </a>
      <a
        href="#portofolio"
        onClick={() => indexnav("#portofolio")}
        className={activenav === "#portofolio" ? "active" : ""}
      >
        <BsFillBookFill />
      </a>
    </nav>
  );
}

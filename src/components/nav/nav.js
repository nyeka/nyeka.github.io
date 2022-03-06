import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { IoIosContact } from "react-icons/io";
import { BsFillBookFill } from "react-icons/bs";
import { BiBookAdd } from "react-icons/bi";

export default function Nav() {
  return (
    <div>
      <a href="#" className="active">
        <AiOutlineHome />
      </a>
      <a href="#About">
        <AiOutlineUser />
      </a>
      <a href="#Contact ">
        <IoIosContact />
      </a>
      <a href="#Experience">
        <BiBookAdd />
      </a>
      <a href="#Portofolio">
        <BsFillBookFill />
      </a>
    </div>
  );
}

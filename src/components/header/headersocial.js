import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaTwitter } from "react-icons/fa";
import Styled from "styled-components";

export default function Headersocial() {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/nyoman-eka-swardita-090024222/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/nyeka" target="_blank" rel="noreferrer">
        <FaGithub />{" "}
      </a>
      <a href="https://twitter.com" target="_blank" rel="noreferrer">
        <FaTwitter />
      </a>
    </div>
  );
}

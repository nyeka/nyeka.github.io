import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaTwitter } from "react-icons/fa";

export default function Headersocial() {
  return (
    <div className="header_socials">
      <a href="https://linkedin.com">
        <BsLinkedin />
      </a>
      <a href="https://github.com">
        <FaGithub />{" "}
      </a>
      <a href="https://twitter.com">
        <FaTwitter />
      </a>
    </div>
  );
}

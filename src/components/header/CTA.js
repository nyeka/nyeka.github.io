import React from "react";
import cv from "../assets/cv.pdf";
import "./header.css";

export default function CTA() {
  return (
    <div className="cta">
      <a href={cv} className="btn" target="_blank" rel="noreferrer">
        Download Cv
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
}

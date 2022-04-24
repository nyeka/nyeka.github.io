import React from "react";
import "./about.css";
import me from "../image/keren.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";

export default function About() {
  return (
    <section id="about">
      <h5> Get To Know </h5> <h2> About Me </h2>{" "}
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="About_image" />
          </div>{" "}
        </div>{" "}
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5> Expericence </h5> <small> I 'm still learning</small>{" "}
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5> Expericence </h5> <small> I 'm still learning</small>{" "}
            </article>
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5> Expericence </h5> <small> I 'm still learning</small>{" "}
            </article>{" "}
          </div>{" "}
          <p className="test">
            Hi, My Name is Nyoman Eka Swardita, Iam currently learning dart
            language, especialy on flutter development{" "}
          </p>{" "}
          <a href="#contact" className="btn btn-primary">
            {" "}
            Let 's Talk{" "}
          </a>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}

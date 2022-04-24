import React from "react";
import "./portofolio.css";
import { dataku } from "../data/data";

export default function Portofolio() {
  return (
    <section id="portofolio">
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>
      <div className="container portofolio__container">
        {dataku.map(({ id, title, image, github, demo }) => {
          return (
            <article className="portofolio__item">
              <div className="portofolio__item-image">
                <img src={image} alt="Project" />
              </div>
              <h3>{title}</h3>
              <div className="portofolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} className="btn btn-primary">
                  Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

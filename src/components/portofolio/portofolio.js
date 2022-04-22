import React from "react";
import "./portofolio.css";
import home from "../image/homepage.jpeg";
import detail from "../image/resto.jpeg";

export default function Portofolio() {
  return (
    <section id="portofolio">
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>
      <div className="container portofolio__container">
        <article className="portofolio__item">
          <div className="portofolio__item-image">
            <img src={home} />
          </div>
          <h3>Restaurant app using flutter</h3>
          <div className="portofolio__item-cta">
            <a href="https://github.com/nyeka" className="btn">
              Github
            </a>
            <a
              href="https://github.com/nyeka/restaurant-api"
              className="btn btn-primary"
            >
              Demo
            </a>
          </div>
        </article>
        <article className="portofolio__item">
          <div className="portofolio__item-image">
            <img src={detail} />
          </div>
          <h3>Detail Of the restaurant</h3>
          <div className="portofolio__item-cta">
            <a href="https://github.com/nyeka" className="btn">
              Github
            </a>
            <a
              href="https://github.com/nyeka/restaurant-api"
              className="btn btn-primary"
            >
              Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

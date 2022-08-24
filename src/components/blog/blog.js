import React from "react";
import { datablog } from "../data/datablog";
import "./blog.css";

function Blok() {
  return (
    <section id="Blog">
      <h5>My Blog</h5>
      <h2>Daily Blog</h2>
      <div className="container container__blog">
        {datablog.map(({title, description, link }) => {
          return (
            <div class="blog">
              <h3>{title}</h3>
              <p>
                {description}
                <br />
              </p>
              <a href={link} target="_blank" rel="noreferrer">
                Lihat Selengkapnya
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Blok;

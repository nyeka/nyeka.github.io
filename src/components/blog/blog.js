import React from "react";
import "./blog.css";

function Blok() {
  return (
    <section id="Blog">
      <h5>My Blog</h5>
      <h2>Daily Blog</h2>
      <div className="container container__blog">
        <div class="col">
          <div class="col-text">
            <h3>Rekayasa Perangkat Lunak</h3>
            <p>
              Mempelajari seseorang engineer memampaatkan perangkat lunak dengan
              baik
              <br />
            </p>
            <a href="https://nyomaneka.me/myBlog/">Lihat Selengkapnya</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blok;

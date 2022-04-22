import React from "react";
import "./service.css";
import { BiCheck } from "react-icons/bi";

function Service() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Joki Tugas Pemrograman</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Pengerjaan tugas uts algorithma pemrograman</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Tugas Coding C++, python dll</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Tugas coding kuliah</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Menerima jasa Pembuatan Web portfolio</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Tugas Pembuatan web dari kampus</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Pembuatan Web Statis</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Pembuatan artikel kuliah berbasis web</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>include code dan 4x revisi</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Flutter development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Membuat Aplikasi Multiplatform sederhana</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>lorem</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                lorem ifiuperhr bosdafeu bwpb urpwebru bruiewbru wb iuebwrui
                bbwer
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                lorem ifiuperhr bosdafeu bwpb urpwebru bruiewbru wb iuebwrui
                bbwer
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                lorem ifiuperhr bosdafeu bwpb urpwebru bruiewbru wb iuebwrui
                bbwer
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Service;

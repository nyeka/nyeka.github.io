import React from "react";
import Contact from "./components/contact/contact";
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import Experience from "./components/experience/experience";
import Footer from "./components/footer/footer";
import Portofolio from "./components/portofolio/portofolio";
import "./index.css";

export default function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Contact />
      <Experience />
      <Portofolio />
      <Footer />
    </div>
  );
}

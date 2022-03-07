import React from "react";
import Contact from "./components/contact/contact";
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import Experience from "./components/experience/experience";
import Footer from "./components/footer/footer";
import Portofolio from "./components/portofolio/portofolio";
import "./index.css";
import About from "./components/about/about";

export default function App() {
  return (
    <div>
      <title>Personal website</title>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Contact />
      <Portofolio />
      <Footer />
    </div>
  );
}

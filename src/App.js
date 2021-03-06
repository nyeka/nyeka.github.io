import React from "react";
import Contact from "./components/contact/contact";
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import Experience from "./components/experience/experience";
import Footer from "./components/footer/footer";
import Portofolio from "./components/portofolio/portofolio";
import "./index.css";
import About from "./components/about/about";
import Service from "./components/service/service";
import Blok from "./components/blog/blog";

export default function App() {
  return (
    <div
      onContextMenu={() => {
        return false;
      }}
      onCopy={() => {
        return false;
      }}
      onPaste={() => {
        return false;
      }}
      onCut={() => {
        return false;
      }}
    >
      <Header />
      <Nav />
      <About />
      <Experience />
      <Service />
      <Portofolio />
      <Blok />
      <Contact />
      <Footer />
    </div>
  );
}

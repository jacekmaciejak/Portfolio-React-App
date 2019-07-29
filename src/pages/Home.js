import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import About_me from "../components/About_me";
import Skills from "../components/Skills";
import Line_down from "../components/Line_down";

export default function Home() {
  return (
    <>
      <Hero>
        <Banner
          className="banner"
          title="Front-end Developer"
          subtitle="Jacek Maciejak"
          paragraph="Hi, I'm front-end developer living in Warsaw. I encourage you to review my projects."
        />
        <Line_down />
      </Hero>
      <About_me />
      <Skills />
    </>
  );
}

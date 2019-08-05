import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import LineDown from "../components/LineDown";
import Email from "../components/Email";
import About from "../components/About";

export default function Home() {
  return (
    <>
      <Hero>
        <Banner
          className="banner"
          title="Front-end Developer"
          subtitle="Jacek Maciejak"
          paragraph="Witam na mojej stronie. Zapraszam Cię do przejrzenia moich projektów."
        />
        <LineDown />
      </Hero>
      <AboutMe />
      <Skills />
      <About />
      <Email />
    </>
  );
}

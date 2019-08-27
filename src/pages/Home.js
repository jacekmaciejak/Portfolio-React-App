import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import LineDown from "../components/LineDown";
import Email from "../components/Email";
import About from "../components/About";
import Footer from "../components/Footer";
import Skills_2 from "../components/Skills_2";

export default function Home() {
  return (
    <>
      <Hero>
        <Banner
          title="Front-end Developer"
          subtitle="Jacek Maciejak"
          paragraph="Witam na mojej stronie. Zapraszam Cię do przejrzenia moich projektów."
        />
        <LineDown />
      </Hero>
      <AboutMe />
      <Skills />
      {/* <Skills_2 /> */}
      <About />
      <Email />
      <Footer />
    </>
  );
}

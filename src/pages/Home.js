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
import SkillsSky from "../components/SkillsSky";

export default function Home() {
  return (
    <>
      <Hero>
        <Banner
          title="Front-end Developer"
          subtitle="Jacek Maciejak"
          paragraph="Witaj na mojej stronie, zapraszam do przejrzenia moich projektów."
        />
        <LineDown />
      </Hero>
      <AboutMe />
      {/* <Skills /> */}
      <SkillsSky></SkillsSky>
      <About />
      <Email />
      <Footer />
    </>
  );
}

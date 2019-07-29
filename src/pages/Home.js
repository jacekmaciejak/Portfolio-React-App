import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import About_me from "../components/About_me";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <>
      <Hero>
        <Banner
          className="banner"
          title="Front End Developer"
          subtitle="Jacek Maciejak"
        >
          <Link to="/contact" className="btn-primary">
            Contact
          </Link>
        </Banner>
      </Hero>
      <About_me />
      <Skills />
    </>
  );
}

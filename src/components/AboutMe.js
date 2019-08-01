import React from "react";
import "../styles/AboutMe.scss";
import LineDown from "./LineDown";

export default function AboutMe() {
  return (
    <div className="about-me">
      <h1 className="about-me__title" data-aos="fade-up">
        Who am I?
      </h1>
      <h2 className="about-me__subtitle" data-aos="fade-up">
        About me
      </h2>
      <p className="about-me__paragraph" data-aos="fade-up">
        Hi, it's nice to see/meet you on my website. I am a beginner front-end
        developer, currently looking for a job as a junior front-end developer.
        I use HTML5, CSS3 - SASS Bootstrap4, Git, Node.js and BEM methodology.
        In projects I apply the principles of Responsive Web Design. I use Grid
        and Flexbox in everyday coding of projects. I know the basics of
        JavaScript and React library. Every day I improve my skills in coding
        websites and programming in JavaScript especially ES6.
      </p>
      <LineDown className="about-me__line-down" />
    </div>
  );
}

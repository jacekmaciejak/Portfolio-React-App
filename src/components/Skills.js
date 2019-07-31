import React from "react";
import "../styles/Skills.scss";
import Panel from "./Panel.js";

export default function Skills() {
  return (
    <div className="skills">
      <h1 className="skills__title" data-aos="fade-up">
        What am I good at?
      </h1>
      <h2 className="skills__subtitle" data-aos="fade-up">
        Technology
      </h2>
      <Panel />
    </div>
  );
}

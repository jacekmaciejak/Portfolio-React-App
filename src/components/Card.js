import React from "react";
import ButtonCard from "../components/ButtonCard";
import "../styles/Card.scss";

export default function Card({ img, children, title, subtitle, paragraph }) {
  return (
    <div
      class="about__1-card about__1-card_1 about__1-card_2"
      data-aos="fade-up"
      data-aos-offset="200"
    >
      <div class="about__1-card-img">
        <img src={img} alt="Zdjęcie projektu" />
      </div>
      <div class="content">
        <h3>{title}</h3>
        <p>{paragraph}</p>
        <ul>
          <li>HTML5</li>
          <li>SCSS</li>
          <li>Grid Layout</li>
          <li>Responsive web design</li>
        </ul>
        <ButtonCard
          type="button"
          onclick="window.open('https://jacekmaciejak.github.io/Tourism','_blank')"
        />
      </div>
    </div>
  );
}

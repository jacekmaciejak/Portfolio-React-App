import React from "react";
import ButtonCard from "../components/ButtonCard";
import "../styles/Card.scss";

export default function Card({
  img,
  children,
  title,
  subtitle,
  paragraph,
  item_1,
  item_2,
  item_3,
  item_4,
  item_5
}) {
  return (
    <div
      className="about__1-card about__1-card_1"
      data-aos="fade-up"
      data-aos-offset="200"
    >
      <div className="about__1-card-img">
        <img src={img} alt="Zdjęcie projektu" />
      </div>
      <div className="content">
        <h3>{title}</h3>
        <p>{paragraph}</p>
        <ul>
          <li>{item_1}</li>
          <li>{item_2}</li>
          <li>{item_3}</li>
          <li>{item_4}</li>
        </ul>
        <ButtonCard
          type="button"
          onclick="window.open('https://jacekmaciejak.github.io/Tourism','_blank')"
        />
      </div>
    </div>
  );
}

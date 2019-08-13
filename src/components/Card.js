import React from "react";
import ButtonCard from "../components/ButtonCard";
import "../styles/Card.scss";
import { card } from "./Data/Data";

export default function Card({
  title,
  description,
  image,
  item_1,
  item_2,
  item_3,
  item_4,
  link
}) {
  return (
    <div className="about__1-card" data-aos="fade-up" data-aos-offset="200">
      <div className="about__1-card-img">
        <img src={image} alt={title} />
      </div>
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
        <ul>
          <li>{item_1}</li>
          <li>{item_2}</li>
          <li>{item_3}</li>
          <li>{item_4}</li>
        </ul>
        <ButtonCard type="button" onclick={link} />
      </div>
    </div>
  );
}

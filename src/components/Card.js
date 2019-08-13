import React from "react";
import ButtonCard from "../components/ButtonCard";
import "../styles/Card.scss";
import { card } from "./Data/Data";

export default function Card(props) {
  return (
    <div className="about__1-card" data-aos="fade-up" data-aos-offset="200">
      <div className="about__1-card-img">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="content">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <ul>
          <li>{props.item_1}</li>
          <li>{props.item_2}</li>
          <li>{props.item_3}</li>
          <li>{props.item_4}</li>
        </ul>
        <ButtonCard type="button" onclick={props.link} />
      </div>
    </div>
  );
}

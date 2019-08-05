import React from "react";
import "../styles/About.scss";
import card_1 from "../images/card_1.jpg";
import card_2 from "../images/card_2.jpg";
import card_3 from "../images/card_3.jpg";
import card_4 from "../images/card_4.jpg";
import card_5 from "../images/card_5.jpg";
import card_6 from "../images/card_6.jpg";
import ButtonCard from "../components/ButtonCard";
import Card from "../components/Card";

export default function About() {
  return (
    <div class="about">
      <div class="about__1">
        <div class="about__1-h1" data-aos="fade-up">
          <h1>Moje prace</h1>
        </div>
        <div class="about__1-h2" data-aos="fade-up">
          <h2>Projekty</h2>
        </div>
        <Card
          className="about__1-card about__1-card_1"
          data-aos="fade-up"
          data-aos-offset="200"
          title="Tourism"
          paragraph="Strona została zbudowana przy użyciu następujących technologi:"
          img={card_1}
        />
        <Card
          class="about__1-card about__1-card_2"
          data-aos="fade-up"
          data-aos-offset="300"
          title="Restaurant"
          paragraph="Strona została zbudowana przy użyciu następujących technologi:"
          img={card_2}
        />
        <div
          class="about__1-card about__1-card_3"
          data-aos="fade-up"
          data-aos-offset="200"
        >
          <div class="about__1-card-img">
            <img src={card_3} alt="image" />
          </div>
          <div class="content">
            <h3>Veterinary clinic</h3>
            <p>The site has been built using the following technologies:</p>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Grid Layout</li>
              <li>Responsive web design</li>
              <li>JavaScript</li>
              <li>JQuery</li>
              <li>Bootstrap4</li>
            </ul>
            <button
              class="card_button"
              type="button"
              onclick="window.open('https://jacekmaciejak.github.io/Veterinary-clinic/. ','_blank')"
            >
              View project
            </button>
          </div>
        </div>
      </div>
      <div class="about__2">
        <div class="about__2-h1" data-aos="fade-up">
          <h1>Moje prace</h1>
        </div>
        <div class="about__2-h2" data-aos="fade-up">
          <h2>Projekty</h2>
        </div>
        <div
          class="about__2-card about__2-card_4"
          data-aos="fade-up"
          data-aos-offset="150"
        >
          <div class="about__2-card-img">
            <img src={card_4} alt="image" />
          </div>
          <div class="content">
            <h3>Parkogrody</h3>
            <p>The site has been built using the following technologies:</p>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Grid Layout</li>
              <li>Responsive web design</li>
              <li>JavaScript</li>
              <li>JQuery</li>
              <li>Bootstrap4</li>
            </ul>
            <button
              class="card_button"
              type="button"
              onclick="window.open('https://jacekmaciejak.github.io/Parkogrody-v2/','_blank')"
            >
              View project
            </button>
          </div>
        </div>
        <div
          class="about__2-card about__2-card_5"
          data-aos="fade-up"
          data-aos-offset="300"
        >
          <div class="about__2-card-img">
            <img src={card_5} alt="image" />
          </div>
          <div class="content">
            <h3>Dice game</h3>
            <p>The game has been built using the following technologies:</p>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
            </ul>
            <button
              class="card_button"
              type="button"
              onclick="window.open('https://jacekmaciejak.github.io/Dice-game/','_blank')"
            >
              View project
            </button>
          </div>
        </div>
        <div
          class="about__2-card about__2-card_6"
          data-aos="fade-up"
          data-aos-offset="150"
        >
          <div class="about__2-card-img">
            <img src={card_6} alt="image" />
          </div>
          <div class="content">
            <h3>Rock, paper and scissors - game</h3>
            <p>The game has been built using the following technologies:</p>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
            </ul>
            <button
              class="card_button"
              type="button"
              onclick="window.open('https://jacekmaciejak.github.io/Rock-paper-and-scissors---game/','_blank')"
            >
              View project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

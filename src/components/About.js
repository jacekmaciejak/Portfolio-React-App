import React from "react";
import styled from "styled-components";
import "../styles/About.scss";
import card_4 from "../images/card_4.jpg";
import card_5 from "../images/card_5.jpg";
import card_6 from "../images/card_6.jpg";
import ButtonCard from "../components/ButtonCard";
import Card from "../components/Card";
import { card } from "./Data/Data";

const StyledWrapper = styled.div`
  color: #000;
  padding-bottom: 2rem;
`;
const About__1 = styled.div`
  height: 100vh;
  display: flex;
  flex-basis: 100%;
  flex-wrap: wrap;
  justify-content: space-around;

  // grid-template-columns: 1fr 1fr 1fr 1fr 0.5fr 1fr 1fr 1fr 0.5fr 1fr 1fr 1fr 1fr;
  // grid-template-rows: 0.5fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  // grid-template-areas: ". . . . . . . . . . . . ." ". . about__1-h1 about__1-h1 about__1-h1 about__1-h1 about__1-h1 about__1-h1 about__1-h1 about__1-h1 about__1-h1 . ." ". . about__1-h2 about__1-h2 about__1-h2 about__1-h2 about__1-h2 about__1-h2 about__1-h2 about__1-h2 about__1-h2 . ." ". about__1-card_1 about__1-card_1 about__1-card_1 . about__1-card_2 about__1-card_2 about__1-card_2 . about__1-card_3 about__1-card_3 about__1-card_3 ." ". about__1-card_1 about__1-card_1 about__1-card_1 . about__1-card_2 about__1-card_2 about__1-card_2 . about__1-card_3 about__1-card_3 about__1-card_3 ." ". about__1-card_1 about__1-card_1 about__1-card_1 . about__1-card_2 about__1-card_2 about__1-card_2 . about__1-card_3 about__1-card_3 about__1-card_3 ." ". about__1-card_1 about__1-card_1 about__1-card_1 . about__1-card_2 about__1-card_2 about__1-card_2 . about__1-card_3 about__1-card_3 about__1-card_3 ." ". about__1-card_1 about__1-card_1 about__1-card_1 . about__1-card_2 about__1-card_2 about__1-card_2 . about__1-card_3 about__1-card_3 about__1-card_3 ." ". about__1-card_1 about__1-card_1 about__1-card_1 . about__1-card_2 about__1-card_2 about__1-card_2 . about__1-card_3 about__1-card_3 about__1-card_3 ." ". about__1-card_1 about__1-card_1 about__1-card_1 . about__1-card_2 about__1-card_2 about__1-card_2 . about__1-card_3 about__1-card_3 about__1-card_3 ." ". about__1-card_1 about__1-card_1 about__1-card_1 . about__1-card_2 about__1-card_2 about__1-card_2 . about__1-card_3 about__1-card_3 about__1-card_3 ." ". . . . . . . . . . . . .";

  @media (max-width: 1200px) {
    height: auto;
    // grid-template-columns: 1fr 1fr;
    // grid-template-rows: 0.1fr 0.1fr 1fr 1fr;
    // grid-template-areas: "about__1-h1 about__1-h1" "about__1-h2 about__1-h2" "about__1-card_1 about__1-card_2" "about__1-card_3 about__1-card_3";
  }

  @media (max-width: 900px) {
    height: auto;
    // grid-template-columns: 1fr;
    // grid-template-rows: 0.1fr 0.1fr 1fr 1fr 1fr;
    // grid-template-areas: "about__1-h1" "about__1-h2" "about__1-card_1" "about__1-card_2" "about__1-card_3";
  }

  @media (max-width: 600px) {
    height: auto;
  }
`;
const About__2 = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-basis: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
  // display: grid;
  // grid-template-columns:
  //   1fr 1fr 1fr 1fr 0.5fr 1fr 1fr 1fr 0.5fr 1fr 1fr 1fr
  //   1fr;
  // grid-template-rows: 0.5fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`;

const H1__1 = styled.h1`
  display: flex;
  flex-basis: 100%;
  justify-content: center;

  // display: grid;
  // justify-items: center;
  // -webkit-box-align: center;
  // -ms-flex-align: center;
  // align-items: center;
  // grid-area: about__1-h1;
  position: relative;
  z-index: 9999;
  font-size: 7vw;
  opacity: 0.1 !important;
  padding: 10px;
  @media (max-width: 900px) {
    font-size: calc(50px + 3.5vw);
    margin-top: 2rem;
  }
`;
const H2__1 = styled.h2`
  flex-basis: 100%;
  display: flex;
  flex-basis: 100%;
  justify-content: center;

  // display: grid;
  // justify-items: center;
  // -webkit-box-align: center;
  // -ms-flex-align: center;
  // align-items: center;
  // grid-area: about__1-h2;
  position: relative;
  z-index: 9999;
  font-size: 5vw;

  @media (max-width: 1200px) {
    margin-bottom: 2rem;
  }
  @media (max-width: 900px) {
    font-size: calc(30px + 3.5vw);
    margin-top: 0;
  }

  letter-spacing: 3px;
  background: linear-gradient(90deg, #fff, #000, #fff);
  background-repeat: no-repeat;
  background-size: 80%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);
  animation: animateText 3s linear infinite;
`;

export default function About() {
  return (
    <StyledWrapper>
      <About__1>
        <H1__1 data-aos="fade-up">Moje prace</H1__1>
        <H2__1 data-aos="fade-up">Projekty</H2__1>
        {card.map(item => (
          <Card
            key={item.title}
            {...item}
            data-aos="fade-up"
            data-aos-offset="200"

            // title={title}
            // description={description}
            // image={image}
            // item_1={item_1}
            // item_2={item_2}
            // item_3={item_3}
            // item_4={item_4}
          />
        ))}

        {/* <div
          class="about__1-card about__1-card_1"
          data-aos="fade-up"
          data-aos-offset="200"
        >
          <div class="about__1-card-img">
            <img src={card_1} alt="image" />
          </div>
          <div class="content">
            <h3>Tourism</h3>
            <p>The site has been built using the following technologies:</p>
            <ul>
              <li>HTML5</li>
              <li>SCSS</li>
              <li>Grid Layout</li>
              <li>Responsive web design</li>
            </ul>
            <button
              class="card_button"
              type="button"
              onclick="window.open('https://jacekmaciejak.github.io/Tourism','_blank')"
            >
              View project
            </button>
          </div>
        </About__1> */}
        {/* <div
          class="about__1-card about__1-card_2"
          data-aos="fade-up"
          data-aos-offset="300"
        >
          <div class="about__1-card-img">
            <img src={card_2} alt="image" />
          </div>
          <div class="content">
            <h3>Restaurant</h3>
            <p>The site has been built using the following technologies:</p>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Grid Layout</li>
              <li>Responsive web design</li>
              <li>JavaScript</li>
            </ul>
            <button
              class="card_button"
              type="button"
              onclick="window.open('https://jacekmaciejak.github.io/Restaurant/','_blank')"
            >
              View project
            </button>
          </div>
        </StyledWrapper> */}
        {/* <Card
          className="about__1-card_1"
          data-aos="fade-up"
          data-aos-offset="200"
          title="Tourism"
          paragraph="Strona została zbudowana przy użyciu następujących technologi:"
          img={card_1}
          item_1="HTML5"
          item_2="SCSS"
          item_3="Grid Layout"
          item_4="Responsive web design"
        />
*/}
        {/* <div
          className="about__1-card about__1-card_3"
          data-aos="fade-up"
          data-aos-offset="200"
        >
          <div className="about__1-card-img">
            <img src={card_3} alt="image" />
          </div>
          <div className="content">
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
              className="card_button"
              type="button"
              onclick="window.open('https://jacekmaciejak.github.io/Veterinary-clinic/. ','_blank')"
            >
              View project
            </button>
          </div>
        </div> */}
      </About__1>
      {/* <About__2>
        <div className="about__2-h1" data-aos="fade-up">
          <h1>Moje prace</h1>
        </div>
        <div className="about__2-h2" data-aos="fade-up">
          <h2>Projekty</h2>
        </div>
        <div
          className="about__2-card about__2-card_4"
          data-aos="fade-up"
          data-aos-offset="150"
        >
          <div className="about__2-card-img">
            <img src={card_4} alt="image" />
          </div>
          <div className="content">
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
              className="card_button"
              type="button"
              onclick="window.open('https://jacekmaciejak.github.io/Parkogrody-v2/','_blank')"
            >
              View project
            </button>
          </div>
        </div>
        <div
          className="about__2-card about__2-card_5"
          data-aos="fade-up"
          data-aos-offset="300"
        >
          <div className="about__2-card-img">
            <img src={card_5} alt="image" />
          </div>
          <div className="content">
            <h3>Dice game</h3>
            <p>The game has been built using the following technologies:</p>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
            </ul>
            <button
              className="card_button"
              type="button"
              onclick="window.open('https://jacekmaciejak.github.io/Dice-game/','_blank')"
            >
              View project
            </button>
          </div>
        </div>
        <div
          className="about__2-card about__2-card_6"
          data-aos="fade-up"
          data-aos-offset="150"
        >
          <div className="about__2-card-img">
            <img src={card_6} alt="image" />
          </div>
          <div className="content">
            <h3>Rock, paper and scissors - game</h3>
            <p>The game has been built using the following technologies:</p>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
            </ul>
            <button
              className="card_button"
              type="button"
              onclick="window.open('https://jacekmaciejak.github.io/Rock-paper-and-scissors---game/','_blank')"
            >
              View project
            </button>
          </div>
        </div>
      </About__2> */}
    </StyledWrapper>
  );
}

import React from "react";
import styled from "styled-components";
import ButtonCard from "../components/ButtonCard";
import Card from "../components/Card";
import { card } from "./Data/Data";

const StyledWrapper = styled.div`
  color: #000;
  padding-bottom: 2rem;
  height: 150vh;
  display: flex;
  flex-basis: 100%;
  flex-wrap: wrap;
  justify-content: space-around;

  // @media (max-width: 1200px) {
  //   height: auto;
  // }
  // @media (max-width: 900px) {
  //   height: auto;
  // }
  // @media (max-width: 600px) {
  //   height: auto;
  // }
`;

const H1 = styled.h1`
  display: flex;
  flex-basis: 100%;
  justify-content: center;
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
const H2 = styled.h2`
  flex-basis: 100%;
  display: flex;
  flex-basis: 100%;
  justify-content: center;
  position: relative;
  z-index: 9999;
  font-size: 5vw;
  letter-spacing: 3px;
  background: linear-gradient(90deg, #fff, #000, #fff);
  background-repeat: no-repeat;
  background-size: 80%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);
  animation: animateText 3s linear infinite;
  @media (max-width: 1200px) {
    margin-bottom: 2rem;
  }
  @media (max-width: 900px) {
    font-size: calc(30px + 3.5vw);
    margin-top: 0;
  }
`;

export default function About() {
  return (
    <StyledWrapper>
      <H1 data-aos="fade-up">Moje prace</H1>
      <H2 data-aos="fade-up">Projekty</H2>
      {card.map(item => (
        <Card
          key={item.title}
          {...item}
          data-aos="fade-up"
          data-aos-offset="200"
        />
      ))}
    </StyledWrapper>
  );
}

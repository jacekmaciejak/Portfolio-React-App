import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled, { ThemeProvider } from "styled-components";
import PanelSky from "./PanelSky.js";

import { theme } from "./utils/theme.js";
import img from "../images/img5.jpg";

const StyledWrapper = styled.div`
  ${({ theme }) => theme.grid};
  height: 100vh;
  width: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 6fr;
  // background-color: ${({ theme }) => theme.second.color};
  position: relative;
  background-image: url(${props => props.img});
  object-fit: cover;
  background-position: center;
  background-size: cover;
  background-position:top;
  background-repeat:no-repeat;
  background-attachment:fixed;
  background-size:cover;

  `;

const Title_2 = styled.h2`
  font-size: ${({ theme }) => theme.second.fontSize};
  letter-spacing: 3px;
  background: linear-gradient(90deg, #fff, #5632de, #fff);
  background-repeat: no-repeat;
  background-size: 80%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);
  animation: animateText 3s linear infinite;
  // margin-top: -40px;
  margin-top: 60px;
`;

export default class SkillsSky extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledWrapper id="skills" img={img}>
          <Title_2 data-aos="fade-up">Technologie</Title_2>
          <PanelSky />
        </StyledWrapper>
      </ThemeProvider>
    );
  }
}

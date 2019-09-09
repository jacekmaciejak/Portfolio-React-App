import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import Panel from "./Panel.js";
import ModalHtml from "./Modals/ModalHtml.js";
import ModalCss from "./Modals/ModalCss.js";
import ModalJs from "./Modals/ModalJs.js";
import ModalSass from "./Modals/ModalSass.js";
import ModalGrid from "./Modals/ModalGrid.js";

import { theme } from "./utils/theme.js";
import img from "../images/img5.jpg";

const StyledWrapper = styled.div`
  ${({ theme }) => theme.grid};
  height: 100vh;
  width: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 6fr;
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
const Title_1 = styled.h1`
  font-size: ${({ theme }) => theme.main.fontSize};
  margin-top: ${({ theme }) => theme.main.marginTop};
  opacity: 0.1 !important;
  padding: 10px;
  text-align: center;
`;
const Title_2 = styled.h2`
  font-size: ${({ theme }) => theme.second.fontSize};
  letter-spacing: 3px;
  background: linear-gradient(90deg, #fff, #000, #fff);
  background-repeat: no-repeat;
  background-size: 80%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);
  animation: animateText 3s linear infinite;
  margin-top: -40px;
`;

export default class Skills extends Component {
  state = {
    isModalHtmlOpen: false,
    isModalCssOpen: false,
    isModalJsOpen: false,
    isModalGridOpen: false,
    isModalSassOpen: false
  };

  openModal = () => {
    this.setState({
      isModalHtmlOpen: true
    });
  };
  closeModal = () => {
    this.setState({
      isModalHtmlOpen: false
    });
  };
  openModalCss = () => {
    this.setState({
      isModalCssOpen: true
    });
  };
  closeModalCss = () => {
    this.setState({
      isModalCssOpen: false
    });
  };
  openModalJs = () => {
    this.setState({
      isModalJsOpen: true
    });
  };
  closeModalJs = () => {
    this.setState({
      isModalJsOpen: false
    });
  };
  openModalGrid = () => {
    this.setState({
      isModalGridOpen: true
    });
  };
  closeModalGrid = () => {
    this.setState({
      isModalGridOpen: false
    });
  };
  openModalSass = () => {
    this.setState({
      isModalSassOpen: true
    });
  };
  closeModalSass = () => {
    this.setState({
      isModalSassOpen: false
    });
  };
  render() {
    const {
      isModalHtmlOpen,
      isModalCssOpen,
      isModalJsOpen,
      isModalGridOpen,
      isModalSassOpen
    } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <StyledWrapper id="skills" img={img}>
          <Title_1 data-aos="fade-up">W czym jestem dobry?</Title_1>
          <Title_2 data-aos="fade-up">Technologie</Title_2>
          <Panel
            openModalHtmlFn={this.openModal}
            openModalCssFn={this.openModalCss}
            openModalJsFn={this.openModalJs}
            openModalGridFn={this.openModalGrid}
            openModalSassFn={this.openModalSass}
          />
          {isModalHtmlOpen && <ModalHtml closeModalFn={this.closeModal} />}
          {isModalCssOpen && <ModalCss closeModalCssFn={this.closeModalCss} />}
          {isModalJsOpen && <ModalJs closeModalJsFn={this.closeModalJs} />}
          {isModalGridOpen && (
            <ModalGrid closeModalGridFn={this.closeModalGrid} />
          )}
          {isModalSassOpen && (
            <ModalSass closeModalSassFn={this.closeModalSass} />
          )}
        </StyledWrapper>
      </ThemeProvider>
    );
  }
}

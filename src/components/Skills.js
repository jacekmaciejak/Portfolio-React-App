import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled, { ThemeProvider } from "styled-components";
import Panel from "./Panel.js";
import ModalHtml from "./Modals/ModalHtml.js";
import ModalCss from "./Modals/ModalCss.js";
import ModalJs from "./Modals/ModalJs.js";
import ModalSass from "./Modals/ModalSass.js";
import ModalGrid from "./Modals/ModalGrid.js";
import ModalFlex from "./Modals/ModalFlex.js";
import ModalReact from "./Modals/ModalReact.js";
import ModalBootstrap from "./Modals/ModalBootstrap";
import ModalRwd from "./Modals/ModalRwd.js";
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
const Link = styled.a`
  text-decoration: none;
  color: #000;
  position: absolute;
  right: 10px;
  bottom: 10px;
  z-index: 1;
  width: 20%;
  font-size: 10px;
`;
// const Title_1 = styled.h1`
//   font-size: ${({ theme }) => theme.main.fontSize};
//   margin-top: ${({ theme }) => theme.main.marginTop};
//   opacity: 0.1 !important;
//   padding: 10px;
//   text-align: center;
// `;
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

export default class Skills extends Component {
  state = {
    isModalHtmlOpen: false,
    isModalCssOpen: false,
    isModalJsOpen: false,
    isModalGridOpen: false,
    isModalSassOpen: false,
    isModalFlexOpen: false,
    isModalReactOpen: false,
    isModalBootstrapOpen: false,
    isModalRwdOpen: false
  };

  closeAllModal = e => {
    if (e.keyCode === 27) {
      this.setState({
        isModalHtmlOpen: false,
        isModalCssOpen: false,
        isModalJsOpen: false,
        isModalGridOpen: false,
        isModalSassOpen: false,
        isModalFlexOpen: false,
        isModalReactOpen: false,
        isModalBootstrapOpen: false,
        isModalRwdOpen: false
      });
    }
  };

  handleClickOf = e => {
    this.setState({
      isModalHtmlOpen: false,
      isModalCssOpen: false,
      isModalJsOpen: false,
      isModalGridOpen: false,
      isModalSassOpen: false,
      isModalFlexOpen: false,
      isModalReactOpen: false,
      isModalBootstrapOpen: false,
      isModalRwdOpen: false
    });
  };

  openModal = e => {
    e.preventDefault();
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
  openModalFlex = () => {
    this.setState({
      isModalFlexOpen: true
    });
  };
  closeModalFlex = () => {
    this.setState({
      isModalFlexOpen: false
    });
  };
  openModalReact = () => {
    this.setState({
      isModalReactOpen: true
    });
  };
  closeModalReact = () => {
    this.setState({
      isModalReactOpen: false
    });
  };
  openModalBootstrap = () => {
    this.setState({
      isModalBootstrapOpen: true
    });
  };
  closeModalBootstrap = () => {
    this.setState({
      isModalBootstrapOpen: false
    });
  };
  openModalRwd = () => {
    this.setState({
      isModalRwdOpen: true
    });
  };
  closeModalRwd = () => {
    this.setState({
      isModalRwdOpen: false
    });
  };

  render() {
    const {
      isModalHtmlOpen,
      isModalCssOpen,
      isModalJsOpen,
      isModalGridOpen,
      isModalSassOpen,
      isModalFlexOpen,
      isModalReactOpen,
      isModalBootstrapOpen,
      isModalRwdOpen
    } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <StyledWrapper id="skills" img={img} onKeyDown={this.closeAllModal}>
          {/* <Title_1 data-aos="fade-up">W czym jestem dobry?</Title_1> */}
          <Title_2 data-aos="fade-up">Technologie</Title_2>

          <Panel
            openModalHtmlFn={this.openModal}
            openModalCssFn={this.openModalCss}
            openModalJsFn={this.openModalJs}
            openModalGridFn={this.openModalGrid}
            openModalSassFn={this.openModalSass}
            openModalFlexFn={this.openModalFlex}
            openModalReactFn={this.openModalReact}
            openModalBootstrapFn={this.openModalBootstrap}
            openModalRwdFn={this.openModalRwd}
          />
          <Link href="https://pl.freepik.com/darmowe-zdjecie-wektory/ramka">
            Ramka plik wektorowy utworzone przez rawpixel.com - pl.freepik.com
          </Link>
          {isModalHtmlOpen && <ModalHtml closeModalFn={this.closeModal} />}
          {isModalCssOpen && <ModalCss closeModalCssFn={this.closeModalCss} />}
          {isModalJsOpen && <ModalJs closeModalJsFn={this.closeModalJs} />}
          {isModalGridOpen && (
            <ModalGrid closeModalGridFn={this.closeModalGrid} />
          )}
          {isModalSassOpen && (
            <ModalSass closeModalSassFn={this.closeModalSass} />
          )}
          {isModalFlexOpen && (
            <ModalFlex closeModalFlexFn={this.closeModalFlex} />
          )}
          {isModalReactOpen && (
            <ModalReact closeModalReactFn={this.closeModalReact} />
          )}
          {isModalBootstrapOpen && (
            <ModalBootstrap closeModalBootstrapFn={this.closeModalBootstrap} />
          )}
          {isModalRwdOpen && <ModalRwd closeModalRwdFn={this.closeModalRwd} />}
        </StyledWrapper>
      </ThemeProvider>
    );
  }
}

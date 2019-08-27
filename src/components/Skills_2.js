import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import Panel_2 from "./Panel_2.js";
import Modal from "./Modal.js";
import { theme } from "./utils/theme.js";

const StyledWrapper = styled.div`
  ${({ theme }) => theme.grid};
  height: 100vh;
  width: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 6fr;
  background-color: ${({ theme }) => theme.second.color};
`;
const Title_1 = styled.h1`
  font-size: ${({ theme }) => theme.main.fontSize};
  opacity: 0.1 !important;
  margin-top: 80px;
  padding: 10px;
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
`;

export default class Skills extends Component {
  state = {
    isModalOpen: false
  };

  openModal = () => {
    this.setState({
      isModalOpen: true
    });
  };
  closeModal = () => {
    this.setState({
      isModalOpen: false
    });
  };
  render() {
    const { isModalOpen } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <StyledWrapper>
          <Title_1 data-aos="fade-up">W czym jestem dobry?</Title_1>
          <Title_2 data-aos="fade-up">Technologie</Title_2>
          <Panel_2 openModalFn={this.openModal} />
          {isModalOpen && <Modal closeModalFn={this.closeModal} />}
        </StyledWrapper>
      </ThemeProvider>
    );
  }
}

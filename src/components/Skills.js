import React, { Component } from "react";
import styled from "styled-components";
import Panel from "./Panel.js";
import Modal from "./Modal.js";

const StyledWrapper = styled.div`
  display: grid;
  justify-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 6fr;
  color: $main_text-color;
  background-color: #f2f2f2;
`;
const Title_1 = styled.h1`
  font-size: 7vw;
  opacity: 0.1 !important;
  margin-top: 80px;
  padding: 10px;
`;
const Title_2 = styled.h2`
  font-size: 5vw;
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
      <StyledWrapper>
        <Title_1 data-aos="fade-up">W czym jestem dobry?</Title_1>
        <Title_2 data-aos="fade-up">Technologie</Title_2>
        <Panel openModalFn={this.openModal} />
        {isModalOpen && <Modal closeModalFn={this.closeModal} />}
      </StyledWrapper>
    );
  }
}

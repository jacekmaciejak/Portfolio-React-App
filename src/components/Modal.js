import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 30vw;
  height: 60vh;
  color: #000;
  background-color: #fff;
  box-shadow: 0 20px 40px -10px #818181;
  position: fixed;
  z-index: 99999;
  text-align: center;
`;
const H1 = styled.h1`
  top: 50%;
  transform: translateY(-50%);
  position: relative;
  left: 0;
  right: 0;
`;

export default function Modal({ closeModalFn }) {
  return (
    <StyledWrapper>
      <button onClick={closeModalFn}>Zamknij</button>
      <H1>Witaj Jacku</H1>
    </StyledWrapper>
  );
}

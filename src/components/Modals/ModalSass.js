import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Button from "../Button";
import { theme } from "../utils/theme.js";

const StyledWrapper = styled.div`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 30vw;
  height: 60vh;
  box-shadow: 0 20px 40px -10px #818181;
  z-index: 99999;
  text-align: center;
  background-color: #5632de;
  color: #fff;
  border: 1px solid #fff;
  ${({ theme }) => theme.media.tabPort} {
    width: 60vw;
  }
`;
const H1 = styled.h1`
  top: 50%;
  transform: translateY(-50%);
  position: relative;
  left: 0;
  right: 0;
`;
const StyledButton = styled(Button)`
  font-size: calc(5px + 1vw);
  opacity: 1;
  width: 10vw;
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -85%);
  ${({ theme }) => theme.media.tabPort} {
    width: 25vw;
  }
`;

export default function ModalSass({ closeModalSassFn }) {
  return (
    <ThemeProvider theme={theme}>
      <StyledWrapper>
        <H1>Sass</H1>
        <StyledButton onClick={closeModalSassFn}>Zamknij</StyledButton>
      </StyledWrapper>
    </ThemeProvider>
  );
}

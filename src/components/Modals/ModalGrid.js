import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Button from "../Button";
import { theme } from "../utils/theme.js";

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 99999;
`;
const Section = styled.div`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 30vw;
  height: 60vh;
  box-shadow: 0 20px 40px -10px #818181;
  z-index: 999999;
  text-align: center;
  background-color: #5632de;
  color: #fff;
  border: 1px solid #fff;
  ${({ theme }) => theme.media.tabPort} {
    width: 60vw;
  }
`;
const H1 = styled.h1`
  margin: 30px;
`;
const Ul = styled.ul`
  text-align: start;
  margin-left: 40%;
  list-style: none;
  font-size: calc(5px + 1vw);
  list-style-type: circle;
`;
const P = styled.p`
  font-size: calc(5px + 1vw);
  margin: 30px;
`;
const StyledButton = styled(Button)`
  font-size: calc(5px + 1vw);
  opacity: 1;
  width: 10vw;
  position: absolute;
  top: 87%;
  left: 50%;
  transform: translate(-50%, -87%);
  ${({ theme }) => theme.media.tabPort} {
    width: 25vw;
  }
`;

export default function ModalHtml({ closeModalGridFn }) {
  return (
    <ThemeProvider theme={theme}>
      <StyledWrapper>
        <Section>
          <H1>Grid</H1>
          <Ul>
            <li>&lt;section&gt;</li>
            <li>&lt;articel&gt;</li>
            <li>&lt;nav&gt;</li>
            <li>&lt;header&gt;</li>
            <li>&lt;footer&gt;</li>
            <li>&lt;aside&gt;</li>
            <li>itd.</li>
          </Ul>
          <P>Znam bardzo dobrze i codziennie stosujÄ™ w projektach.</P>
          <StyledButton onClick={closeModalGridFn}>Zamknij</StyledButton>
        </Section>
      </StyledWrapper>
    </ThemeProvider>
  );
}

import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme.js";

const StyledWrapper = styled.div`
  height: 10vh;
  width: 100%;
  background-color: ${({ theme }) => theme.second.color};
  text-align: center;
  margin-top: 50px;
`;
const H1 = styled.h1`
  top: 50%;
  transform: translateY(-50%);
  position: relative;
  letter-spacing: 1px;
  font-size: calc(1px + 1vw);
  ${({ theme }) => theme.media.tabPort} {
    font-size: calc(1px + 1.5vw);
  }
`;
const A = styled.a`
  text-transform: uppercase;
  :link,
  :visited {
    color: ${({ theme }) => theme.third.color};
    background-color: ${({ theme }) => theme.second.color}
    text-decoration: none;
    display: inline-block;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
  }
  :hover,
  :active {
    -webkit-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.5);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.5);
    -webkit-transform: rotate(5deg) scale(1.3);
    transform: rotate(5deg) scale(1.3);
  }
`;

export default function Footer() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <StyledWrapper>
          <H1>
            Built by <span />
            <A href="#"> Jacek Maciejak</A>. Copyright &copy;
            <A href="#"> Jacek Maciejak</A>
          </H1>
        </StyledWrapper>
      </>
    </ThemeProvider>
  );
}

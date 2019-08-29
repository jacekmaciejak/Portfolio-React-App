import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme.js";

const StyledWrapper = styled.div`
  height: auto;
  width: 60%;
  text-align: center;
  cursor: pointer;
  background: transparent;
  border: 1px solid #fff;
  position: absolute;
  overflow: hidden;
  letter-spacing: 2px;
  opacity: 0.5;
  color: #fff;
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;
  background: #000;
  padding: 10px;
  margin: 30px auto 0;
  position: relative;
  border-radius: 5px;
  box-shadow: 0 20px 40px -10px #818181;

  ${({ theme }) => theme.media.tabPort} {
    font-size: calc(10px + 2vw);
    padding: 20px;
    opacity: 1;
    width: 50%;
    padding: 10px;
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, #fff, transparent);
    transition: 0.5s;

    &:hover {
      background: linear-gradient(90deg, #fff, #fff, #fff);
    }
  }
  &:hover:before,
  &:active:before,
  &:focus:before {
    left: 100%;
  }
`;

export default function Button({ className, children, onClick }) {
  return (
    <ThemeProvider theme={theme}>
      <StyledWrapper onClick={onClick} className={className}>
        {children}
      </StyledWrapper>
    </ThemeProvider>
  );
}

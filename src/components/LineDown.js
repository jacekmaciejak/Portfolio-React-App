import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme.js";

const StyledWrapper = styled.div`
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-90%, -50%);
  width: 2px;
  height: 150px;
  background: transparent;
  color: #000;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(transparent, #80bfff, transparent);
    animation: animateScrollDown 2s linear infinite;
  }

  // ${({ theme }) => theme.media.tabLand} {
  //   top: 85%;
  //   left: 10%;
  //   transform: translate(-85%, -10%);
  // }
  ${({ theme }) => theme.media.tabPort} {
    display: none;
  }
`;

export default function LineDown({ children, className }) {
  return (
    <ThemeProvider theme={theme}>
      <StyledWrapper className={className}>{children}</StyledWrapper>
    </ThemeProvider>
  );
}

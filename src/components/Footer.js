import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme.js";

const StyledWrapper = styled.div`
  height: 20vh;
  width: 100%;
  background-color: ${({ theme }) => theme.second.color};
  text-align: center;
  margin-top: 50px;
`;
const H1 = styled.h1`
  top: 50%;
  transform: translateY(-50%);
  position: relative;
`;

export default function Footer() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <StyledWrapper>
          <H1>Witaj na mojej stronie</H1>
        </StyledWrapper>
      </>
    </ThemeProvider>
  );
}

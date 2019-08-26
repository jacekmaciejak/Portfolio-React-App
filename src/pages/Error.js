import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../components/utils/theme.js";

const StyledWrapper = styled.div`
  ${({ theme }) => theme.grid};
  width: 100vw;
  height: auto;
  color: ${({ theme }) => theme.third.color};
  line-height: 1.5;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.second.fontSize};
  text-align: center;
`;
const StyledButton = styled(Button)`
  opacity: 1;
  margin: 0 auto;
  width: 50%;
  padding: 20px 0;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default function Error() {
  return (
    <ThemeProvider theme={theme}>
      <Hero>
        <StyledWrapper>
          <h1>błąd 404</h1>
          <h2>nie odnaleziono strony</h2>
        </StyledWrapper>
        <StyledLink to="/">
          <StyledButton>Powrót do strony głównej</StyledButton>
        </StyledLink>
      </Hero>
    </ThemeProvider>
  );
}

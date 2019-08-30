import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme.js";

const StyledWrapper = styled.div`
  display: inline-block;
  text-align: left;
  margin-left: 4vw;
  width: 60%;

  ${({ theme }) => theme.media.tabPort} {
    width: 90%;
  }
  ${({ theme }) => theme.media.phone} {
    text-align: center;
  }
`;
const Title_1 = styled.h1`
  font-size: ${({ theme }) => theme.main.fontSize};
  :first-letter {
    font-size: calc(35px + 3.5vw);
  }
`;
const Title_2 = styled.h2`
  font-size: ${({ theme }) => theme.second.fontSize};
  line-height: 2;
  :first-letter {
    font-size: calc(35px + 3.5vw);
  }
`;
const Paragraph = styled.p`
  line-height: 2;
  font-size: ${({ theme }) => theme.third.fontSize};
  :first-letter {
    font-size: calc(25px + 1.8vw);
  }
`;

export default function Banner({ children, title, subtitle, paragraph }) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <StyledWrapper id="banner">
          <Title_1>{title}</Title_1>
          <Title_2>{subtitle}</Title_2>
          <Paragraph>{paragraph}</Paragraph>
          {children}
        </StyledWrapper>
      </>
    </ThemeProvider>
  );
}

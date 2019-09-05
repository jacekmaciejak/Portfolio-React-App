import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme.js";
import LineDown from "./LineDown.js";

const StyledWrapper = styled.div`
  // ${props => props.theme.grid};
  ${({ theme }) => theme.grid};
  height: 100vh;
  width: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 6fr;
  letter-spacing: 3px;
  position: relative;
`;
const Title_1 = styled.h1`
  font-size: ${({ theme }) => theme.main.fontSize};
  margin-top: ${({ theme }) => theme.main.marginTop};
  opacity: 0.1 !important;
  padding: 10px;

  ${({ theme }) => theme.media.tabPort} {
    margin-top: 30px;
  }
  // ${({ theme }) => theme.media.phone} {
  //   margin-top: 30px;
  // }
`;
const Title_2 = styled.h2`
  font-size: ${({ theme }) => theme.second.fontSize};
  letter-spacing: 3px;
  background: linear-gradient(90deg, #fff, #000, #fff);
  background-repeat: no-repeat;
  background-size: 80%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);
  animation: animateText 3s linear infinite;
  margin-top: -40px;

  ${({ theme }) => theme.media.tabPort} {
    font-size: calc(15px + 5vw);
  }
`;

const Text = styled.p`
  line-height: 2;
  text-align: justify;
  font-size: ${({ theme }) => theme.third.fontSize};
  letter-spacing: 1px;
  width: 80%;
  margin-top: -50px;

  ::first-letter {
    font-size: calc(30px + 1vw);
    line-height: 0;
  }

  ${({ theme }) => theme.media.tabPort} {
    margin-top: -100px;
  }
`;
const StyledLineDown = styled(LineDown)`
  position: absolute;
  top: 50%;
  left: 95%;
  transform: translate(-95%, -50%);
  height: 50%;

  ${({ theme }) => theme.media.tabPort} {
    display: none;
  }
`;

export default function AboutMe() {
  return (
    <ThemeProvider theme={theme}>
      <StyledWrapper id="aboutme">
        <Title_1 data-aos="fade-up">Kim jestem?</Title_1>
        <Title_2 data-aos="fade-up">O mnie</Title_2>
        <Text data-aos="fade-up">
          Witaj, na stronie z moimi projektami. Jestem front-end developerem
          kodującym w HTML5, CSS3 - SCSS. Korzystam również z Bootstrap4 oraz
          Git, znam podstawy Node.js. W projektach stosuję zasady Responsive Web
          Design, wykorzystuję Grid i Flexbox, jak również metodologię BEM. Znam
          podstawy JavaScript i bibliotekę React. Każdego dnia doskonalę swoje
          umiejętności kodowania strony internetowe i programowanie w
          JavaScript, szczególnie ES6.
        </Text>
        <StyledLineDown />
      </StyledWrapper>
    </ThemeProvider>
  );
}

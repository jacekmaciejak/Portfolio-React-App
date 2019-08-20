import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme.js";

const StyledWrapper = styled.div`
  color: #000;
  display: grid;
  justify-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  height: 100vh;
  width: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 6fr;
  letter-spacing: 3px;
  position: relative;
`;
const Title_1 = styled.h1`
  font-size: 7vw;
  opacity: 0.1 !important;
  margin-top: 70px;
  box-shadow: $main_text-shadow;
  padding: 10px;

  ${({ theme }) => theme.media.tabPort} {
    margin-top: 100px;
    font-size: calc(15px + 7vw);
  }
`;
const Title_2 = styled.h2`
  font-size: 5vw;
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
  font-size: calc(13px + 1vw);
  letter-spacing: 1px;
  width: 70%;

  ::first-letter {
    font-size: calc(30px + 1vw);
    line-height: 0;
  }
`;
const LineDown = styled.div`
  top: 50%;
  left: 92%;
  transform: translate(-92%, -50%);
  height: 50%;
  position: absolute;
  width: 2px;
  background: transparent;
  color: #000;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(transparent, #000, transparent);
    animation: animateScrollDown 2s linear infinite;
  }

  ${({ theme }) => theme.media.tabLand} {
    top: 85 %;
    left: 10 %;
    transform: translate(-85 %, -10 %);
  }

  ${({ theme }) => theme.media.tabPort} {
    display: none;
  }
`;

export default function AboutMe() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <StyledWrapper>
          <Title_1 data-aos="fade-up">Kim jestem?</Title_1>
          <Title_2 data-aos="fade-up">O mnie</Title_2>
          <Text data-aos="fade-up">
            Witaj, na stronie z moimi projektami. Jestem front-end developerem
            kodującym w HTML5, CSS3 - SCSS. Korzystam również z Bootstrap4 oraz
            Git, znam podstawy Node.js. W projektach stosuję zasady Responsive
            Web Design, wykorzystuję Grid i Flexbox, jak również metodologię
            BEM. Znam podstawy JavaScript i bibliotekę React. Każdego dnia
            doskonalę swoje umiejętności kodowania strony internetowe i
            programowanie w JavaScript, szczególnie ES6.
          </Text>
          <LineDown />
        </StyledWrapper>
      </>
    </ThemeProvider>
  );
}

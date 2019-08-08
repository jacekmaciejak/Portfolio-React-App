import React from "react";
import LineDown from "./LineDown";
import styled, { createGlobalStyle } from "styled-components";
import { mixins } from ".//mixins";
import styles from "../styles/AboutMe.scss";

const GlobalStyle = createGlobalStyle`

`;

const Container = styled.div`
  color: #000;
  display: grid;
  justify-items: center;
  -webkit-box- align: center;
  -ms-flex- align: center;
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
  margin-top: 80px;
  box-shadow: $main_text-shadow;
  padding: 10px;
`;
const Title_2 = styled.h2`
  font-size: 5vw;
  @include animTextHeader;
`;

const Text = styled.p`
  line-height: 2;
  text-align: justify;
  font-size: calc(13px + 1vw);
  letter-spacing: 1px;
  width: 70%;
`;
const StyleLine = styled(LineDown)`
  top: 50%;
  left: 92%;
  transform: translate(-92%, -50%);
  height: 50%;
`;

export default function AboutMe() {
  return (
    <Container>
      <Title_1 data-aos="fade-up">Kim jestem?</Title_1>
      <Title_2 data-aos="fade-up">O mnie</Title_2>
      <Text data-aos="fade-up">
        Witaj, na stronie z moimi projektami. Jestem front-end developerem
        kodującym w HTML5, CSS3 - SCSS. Korzystam również z Bootstrap4 oraz Git,
        znam podstawy Node.js. W projektach stosuję zasady Responsive Web
        Design, wykorzystuję Grid i Flexbox, jak również metodologię BEM. Znam
        podstawy JavaScript i bibliotekę React. Każdego dnia doskonalę swoje
        umiejętności kodowania strony internetowe i programowanie w JavaScript,
        szczególnie ES6.
      </Text>
      <StyleLine />
    </Container>
  );
}

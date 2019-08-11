import "../styles/Email.scss";
import React from "react";
import styled from "styled-components";
import img from "../images/img2.jpg";
import ButtonEmail from "./ButtonEmail";

const StyledWrapper = styled.div`
  display: grid;
  justify-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 6fr;
`;
const Title_1 = styled.h1`
  font-size: 7vw
  color: #000;
   opacity: .1 !important;
  padding: 10px;
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
`;
const Book = styled.section`
  position: relative;
  z-index: 9999;
`;
const Book__form = styled.div`
  width: 55vw;
  height: 100%;
  padding: 3rem;
  border-radius: 3px;
  -webkit-box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
  background-image: linear -
      gradient(
        105deg,
        rgba(255, 255, 255, 0.5) 0 %,
        rgba(255, 255, 255, 0.5) 60 %,
        transparent 50 %
      ),
    url(${props => props.img});
  background-image: url(${props => props.img});
  background-position: center;
  background-size: cover;

  @media (max-width: 1200px) {
    width: 95%;
    padding: 2rem;
    background-image: linear-gradient(
        105deg,
        rgba(255, 255, 255, 0.8) 0%,
        rgba(255, 255, 255, 0.8) 65%,
        transparent 50%
      ),
      url(${props => props.img});
  }
  @media (max-width: 600px) {
    background-image: linear-gradient(
        105deg,
        rgba(255, 255, 255, 0.5) 0%,
        rgba(255, 255, 255, 0.5) 75%,
        transparent 50%
      ),
      url(${props => props.img});
  }
`;

const Form = styled.form`
  width: 60%;
  @media (max-width: 1200px) {
    width: 70%;
  }
`;
const Form_input = styled.input`
  font-size: calc(8px + 1vw);
  font-family: inherit;
  color: inherit;
  padding: 1rem;
  border-radius: 2px;
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  border-bottom: 3px solid transparent;
  width: 70%;
  display: block;
  margin: auto;

  @media (max-width: 600px) {
    width: 100%;
  }

  :focus {
    outline: none;
    -webkit-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.5);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.5);
    border-bottom: 6px solid #4dec3e;

    :invalid {
      border-bottom: 6px solid #ff7730;
    }
  }

  :-webkit-input-placeholder {
    color: #000;
  }
  :placeholder-shown + .form__label {
    opacity: 0;
    visibility: hidden;
    -webkit-transform: translateY(-4rem);
    transform: translateY(-4rem);
  }
`;
const Form_label = styled.label`
  font-size: calc(8px + 1vw);
  font-weight: 600;
  margin-left: 4rem;
  margin-top: 0.7rem;
  display: block;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  opacity: 0.5;
`;

export default function Email() {
  return (
    <StyledWrapper>
      <Title_1 data-aos="fade-up">Zachęcam do kontaktu</Title_1>
      <Title_2 data-aos="fade-up">Kontakt</Title_2>
      <Book id="contact" data-aos="fade-up">
        <Book__form img={img}>
          <Form autocomplete="off" method="post" action="kontakt.php">
            <div class="form__group">
              <Form_input
                type="text"
                placeholder="Imię i nazwisko"
                id="name"
                name="name"
                required
              />
              <Form_label for="name">Imię i nazwisko</Form_label>
            </div>
            <div class="form__group">
              <Form_input
                type="email"
                placeholder="Adres email"
                id="email"
                name="email"
                required
              />
              <Form_label for="email">Adres email</Form_label>
            </div>
            <div class="form__group">
              <Form_input
                name="message"
                id="message"
                cols="40"
                rows="1"
                placeholder="Wiadomość"
                required
              />
            </div>
            <div class="form__group">
              {/* <button class="email_button" name="submit" type="submit">
                Wyślij &rarr;
              </button> */}
              <ButtonEmail />
            </div>
          </Form>
        </Book__form>
      </Book>
    </StyledWrapper>
  );
}

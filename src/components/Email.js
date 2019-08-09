import "../styles/Email.scss";
import React from "react";
import styled from "styled-components";

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
    url("../images/img2.jpg");
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
      url("../images/img2.jpg");
  }
  @media (max-width: 600px) {
    background-image: linear-gradient(
        105deg,
        rgba(255, 255, 255, 0.5) 0%,
        rgba(255, 255, 255, 0.5) 75%,
        transparent 50%
      ),
      url("../images/img2.jpg");
  }
`;
const Form = styled.form`
  width: 60%;
  @media (max-width: 1200px) {
    width: 70%;
  }
`;

export default function Email() {
  return (
    <StyledWrapper>
      <Title_1 data-aos="fade-up">Zachęcam do kontaktu</Title_1>
      <Title_2 data-aos="fade-up">Kontakt</Title_2>
      <Book id="contact" data-aos="fade-up">
        <Book__form>
          <Form autocomplete="off" method="post" action="kontakt.php">
            <div class="form__group">
              <input
                type="text"
                class="form__input"
                placeholder="Imię i nazwisko"
                id="name"
                name="name"
                required
              />
              <label for="name" class="form__label">
                Imię i nazwisko
              </label>
            </div>
            <div class="form__group">
              <input
                type="email"
                class="form__input"
                placeholder="Adres email"
                id="email"
                name="email"
                required
              />
              <label for="email" class="form__label">
                Adres email
              </label>
            </div>
            <div class="form__group">
              <textarea
                name="message"
                id="message"
                cols="40"
                rows="4"
                class="form__input"
                placeholder="Wiadomość"
                required
              />
            </div>
            <div class="form__group">
              <button class="email_button" name="submit" type="submit">
                Wyślij &rarr;
              </button>
            </div>
          </Form>
        </Book__form>
      </Book>
    </StyledWrapper>
  );
}

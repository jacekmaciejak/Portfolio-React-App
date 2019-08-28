import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme.js";
import img from "../images/img2.jpg";
import ButtonEmail from "./ButtonEmail";

const StyledWrapper = styled.div`
  ${({ theme }) => theme.grid}
  height: 90vh;
  width: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 6fr;
`;
const Title_1 = styled.h1`
  font-size: ${({ theme }) => theme.main.fontSize};
  line-height: 1;
  opacity: 0.1 !important;
  padding: 10px;
  text-align: center;
  margin-top: 30px;

  ${({ theme }) => theme.media.tabPort} {
    font-size: calc(40px + 3.5vw);
    line-height: 1;
  }
`;
const Title_2 = styled.h2`
  position: relative;
  font-size: ${({ theme }) => theme.second.fontSize};
  letter-spacing: 3px;
  background: linear-gradient(90deg, #fff, #000, #fff);
  background-repeat: no-repeat;
  background-size: 80%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);
  animation: animateText 3s linear infinite;
  ${({ theme }) => theme.media.tabPort} {
    font-size: calc(30px + 3.5vw);
  }
`;
const Book = styled.section`
  position: relative;
  z-index: 9999;
  ${({ theme }) => theme.grid}
  width: 100%;
  ${({ theme }) => theme.media.tabLand} {
    height: 75%;
  }
`;
const Book__form = styled.div`
  width: 65vw;
  height: 100%;
  padding: 3rem;
  border-radius: 3px;
  -webkit-box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
  box-shadow: 0 20px 40px -10px #818181;
  // background-image: linear -
  //   gradient(
  //     105deg,
  //     rgba(255, 255, 255, 0.5) 0 %,
  //     rgba(255, 255, 255, 0.5) 60 %,
  //     transparent 50 %
  //   ),url(${props => props.img});
  background-image: url(${props => props.img});
  background-position: center;
  background-size: cover;
${({ theme }) => theme.media.tabLand}{
    width: 95%;
    padding: 2rem;
}
`;

const Form = styled.form`
  width: 100%;

  ${({ theme }) => theme.media.tabLand} {
    ${({ theme }) => theme.center}
  }
`;
const Form_input = styled.input`
  font-size: calc(10px + 1vw);
  font-family: inherit;
  color: inherit;
  padding: 0.7rem;
  border-radius: 2px;
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  border-bottom: 3px solid transparent;
  width: 70%;
  display: block;
  margin: auto;
  border-radius: 5px;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);

  ${({ theme }) => theme.media.phone} {
    width: 90%;
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
  :placeholder-shown + label {
    opacity: 0;
    visibility: hidden;
    -webkit-transform: translateY(-4rem);
    transform: translateY(-4rem);
  }
`;
const Form_label = styled.label`
  width: 70%;
  font-size: calc(8px + 1vw);
  font-weight: 600;
  display: block;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  margin: 0.7rem auto;
  color: ${({ theme }) => theme.main.color};
  ${({ theme }) => theme.media.phone} {
    width: 90%;
  }
`;
const Form_textarea = styled.textarea`
  font-size: calc(10px + 1vw);
  font-family: inherit;
  color: inherit;
  padding: 1rem;
  border-radius: 2px;
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  border-bottom: 3px solid transparent;
  width: 70%;
  display: block;
  margin: auto;
  border-radius: 5px;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);

  ${({ theme }) => theme.media.phone} {
    width: 90%;
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
  :placeholder-shown + label {
    opacity: 0;
    visibility: hidden;
    -webkit-transform: translateY(-4rem);
    transform: translateY(-4rem);
  }
`;

export default function Email() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <StyledWrapper id="email">
          <Title_1 data-aos="fade-up">Zachęcam do kontaktu</Title_1>
          <Title_2 data-aos="fade-up">Kontakt</Title_2>
          <Book id="contact" data-aos="fade-up">
            <Book__form img={img}>
              <Form autocomplete="off" method="post" action="Contact.php">
                <Form_input
                  type="text"
                  placeholder="Imię i nazwisko"
                  id="name"
                  name="name"
                  required
                />
                <Form_label for="name">Imię i nazwisko</Form_label>
                <Form_input
                  type="email"
                  placeholder="Adres email"
                  id="email"
                  name="email"
                  required
                />
                <Form_label for="email">Adres email</Form_label>
                <Form_textarea
                  name="message"
                  id="message"
                  rows="4"
                  placeholder="Wiadomość"
                  required
                />
                <ButtonEmail />
              </Form>
            </Book__form>
          </Book>
        </StyledWrapper>
      </>
    </ThemeProvider>
  );
}

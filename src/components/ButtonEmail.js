import React from "react";
import styled from "styled-components";

const Button = styled.button`
  display: block;
  margin: 3rem auto 0;
  cursor: pointer;
  padding: 15px;
  border: 1px solid transparent;
  overflow: hidden;
  background: transparent;
  position: relative;
  position: relative;
  z-index: 9999;
  text-decoration: none;
  font-weight: bold;
  font-size: 24px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.8);
  transition: 0.9s;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, #000, transparent);
    transition: 0.5s;
  }

  :hover:before {
    left: 100%;
  }
  :hover {
    background: linear-gradient(90deg, #000, #000, #000);
    background-size: 100%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: rgba(000, 000, 000, 1);
  }
`;

export default function ButtonEmail() {
  return (
    <Button name="submit" type="submit">
      Wyślij wiadomość &rarr;
    </Button>
  );
}

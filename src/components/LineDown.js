import React from "react";
import styled from "styled-components";

const Line = styled.div`
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-90%, -50%);
  width: 2px;
  height: 150px;
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

  @media only screen and (max-width: 1200px) {
    top: 85%;
    left: 10%;
    transform: translate(-85%, -10%);
  }

  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

export default function LineDown() {
  return <Line />;
}

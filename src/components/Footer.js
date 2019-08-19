import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  height: 20vh;
  width: 100%;
  background-color: #f2f2f2;
  text-align: center;
`;
const H1 = styled.h1`
  top: 50%;
  transform: translateY(-50%);
  position: relative;
`;

export default function Footer() {
  return (
    <StyledWrapper>
      <H1>Witaj na mojej stronie</H1>
    </StyledWrapper>
  );
}

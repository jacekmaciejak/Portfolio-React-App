import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: inline-block;
  text-align: left;
  color: #000;
  margin-left: 4vw;
  width: 60%;
`;
const Title_1 = styled.h1`
  font-size: calc(15px + 3.5vw);
`;
const Title_2 = styled.h2`
  font-size: calc(15px + 3.5vw);
  line-height: 2;
`;
const Paragraph = styled.p`
  line-height: 2;
  font-size: calc(10px + 1.8vw);
`;

export default function Banner({ children, title, subtitle, paragraph }) {
  return (
    <StyledWrapper>
      <Title_1>{title}</Title_1>
      <Title_2>{subtitle}</Title_2>
      <Paragraph>{paragraph}</Paragraph>
      {children}
    </StyledWrapper>
  );
}

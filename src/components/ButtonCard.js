import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  width: auto;
  height: auto;
  text-align: center;
  cursor: pointer;
  padding: 30px;
  background: transparent;
  border: 1px solid #fff;
  position: absolute;
  overflow: hidden;
  letter-spacing: 2px;
  opacity: 0.5;
  color: #fff;
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;
  background: #000;
  padding: 15px !important;
  margin: 30px auto 0;
  position: relative;

  @media (max-width: 900px) {
    font-size: calc(10px + 2vw);
    padding: 20px;
    opacity: 1;
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, #fff, transparent);
    transition: 0.5s;

    &:hover {
      background: linear-gradient(90deg, #fff, #fff, #fff);
    }
  }
  &:hover:before,
  &:active:before,
  &:focus:before {
    left: 100%;
  }
`;

export default function ButtonCard({ className, children }) {
  return (
    <StyledWrapper className={className}>
      {children}Zobacz projekt
    </StyledWrapper>
  );
}

import React from "react";
import PropTypes from "prop-types";
import ButtonCard from "../components/ButtonCard";
import "../styles/Card.scss";
import { card } from "./Data/Data";
import styled from "styled-components";

const StyledWrapper = styled.div`
  flex-basis: 30%;
  height: 60%;
  transition: 0.5s;
  position: relative;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
  @media (max-width: 1200px) {
    // height: 500px;
    // width: 90%;
    // margin: 30px 0;
  }
  @media (max-width: 900px) {
    flex-basis: 95%;
  }

  :before {
    content: "";
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    box-sizing: border-box;
    transition: 0.5s;
    opacity: 0;
    z-index: 1;
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    transform: scaleX(0);
    @media (max-width: 900px) {
      display: none;
    }
  }
  :after {
    content: "";
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    box-sizing: border-box;
    transition: 0.5s;
    opacity: 0;
    z-index: 1;
  }
  :hover:before {
    transform: scaleX(1);
    opacity: 1;
  }
  :after {
    border-left: 1px solid #000;
    border-right: 1px solid #000;
    transform: scaleY(0);
    @media (max-width: 900px) {
      display: none;
    }
  }
  :hover:after {
    transform: scaleY(1);
    opacity: 1;
  }

  :hover {
    opacity: ${({ isVisble }) => (isVisble ? "1" : "1")};
    visibility: ${({ isVisble }) => (isVisble ? "visible" : "visible")};
    transition-delay: 0.2s;
    transform: translateY(0px);
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
  object-fit: cover;
  background-size: cover;
  background-position: center;
  transition: 0.5s;
  filter: grayscale(1);
  -webkit-filter: grayscale(1);
  @media (max-width: 900px) {
    filter: grayscale(0) saturate(2);
    -webkit-filter: grayscale(0) saturate(2);
  }
  :hover {
    opacity: ${props => (props.isVisble ? "1" : "1")};
    visibility: ${props => (props.isVisble ? "visible" : "visible")};
  }
`;
const Content = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  padding: 20px;
  box-sizing: border-box;
  color: #000;
  text-shadow: 4px 2px 5px rgba(255, 255, 255, 0.73);
  transition: 0.5s;
  padding: 0;
  text-align: center;
  opacity: 0;
  visibility: hidden;
  font-weight: bold;
  @media (max-width: 900px) {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;
const H3 = styled(Content)`
  margin-bottom: 20px;
  transform: translateY(-70px);
  font-size: 30px;
  @media (max-width: 900px) {
    transform: none;
  }
`;
const P = styled(Content)`
  transform: translateY(-70px);
  font-size: 23px;
  @media (max-width: 900px) {
    transform: none;
  }
`;
const UL = styled(Content)`
  transform: translateY(70px);
  margin-top: 20px;
  list-style: none;
  line-height: 1.4;
  font-size: 23px;
  @media (max-width: 900px) {
    transform: none;
  }
`;

export default function Card({
  title,
  description,
  image,
  item_1,
  item_2,
  item_3,
  item_4,
  link
}) {
  return (
    <StyledWrapper data-aos="fade-up" data-aos-offset="200">
      <Image src={image} alt={title} />
      <Content>
        <H3 isVisble>{title}</H3>
        <P isVisble>{description}</P>
        <UL isVisble>
          <li>{item_1}</li>
          <li>{item_2}</li>
          <li>{item_3}</li>
          <li>{item_4}</li>
        </UL>
        <ButtonCard type="button" onclick={link} />
      </Content>
    </StyledWrapper>
  );
  Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    item_1: PropTypes.string.isRequired,
    item_2: PropTypes.string.isRequired,
    item_3: PropTypes.string.isRequired,
    item_4: PropTypes.string,
    link: PropTypes.string.isRequired
  };
  Card.defaultProps = {
    item_4: " "
  };
}

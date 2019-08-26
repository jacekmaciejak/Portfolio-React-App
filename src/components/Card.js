import React from "react";
import PropTypes from "prop-types";
import ButtonCard from "../components/ButtonCard";
import { card } from "./Data/Data";
import styled, { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "./utils/theme.js";

const StyledWrapper = styled.div`
  flex-basis: 30%;
  height: 500px;
  margin: 20px;
  transition: 0.5s;
  position: relative;
  box-shadow: 0 20px 40px -10px #818181;

  ${({ theme }) => theme.media.tabLand} {
    flex-basis: 45%;
  }
  ${({ theme }) => theme.media.tabPort} {
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

    ${({ theme }) => theme.media.tabPort} {
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

    ${({ theme }) => theme.media.tabPort} {
      display: none;
    }
  }
  :hover:after {
    transform: scaleY(1);
    opacity: 1;
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
  opacity: 0.9;

  ${({ theme }) => theme.media.tabPort} {
    filter: grayscale(0) saturate(2);
    -webkit-filter: grayscale(0) saturate(2);
  }

  ${StyledWrapper}:hover & {
    filter: grayscale(0) saturate(2);
    -webkit-filter: grayscale(0) saturate(2);
    transition: 0.5s;

    ${({ theme }) => theme.media.tabPort} {
      ${({ theme }) => theme.cardTransformOf}
    }
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
  text-shadow: 4px 2px 5px rgba(255, 255, 255, 0.73);
`;
const H3 = styled.h3`
  margin-bottom: 20px;
  transform: translateY(-70px);
  font-size: 30px;
  ${({ theme }) => theme.cardContent}
  ${StyledWrapper}:hover & {
    ${({ theme }) => theme.cardHover}

    ${({ theme }) => theme.media.tabPort} {
      ${({ theme }) => theme.cardTransformOf}
    }
  }
  ${({ theme }) => theme.media.tabPort} {
    ${({ theme }) => theme.cardHoverOf}
  }
`;
const P = styled.p`
  transform: translateY(-70px);
  font-size: 23px;
  ${({ theme }) => theme.cardContent}

  ${StyledWrapper}:hover & {
    ${({ theme }) => theme.cardHover}

    ${({ theme }) => theme.media.tabPort} {
      ${({ theme }) => theme.cardTransformOf}
    }
  }
  ${({ theme }) => theme.media.tabPort} {
    ${({ theme }) => theme.cardHoverOf}
  }
`;
const UL = styled.ul`
  transform: translateY(70px);
  margin-top: 20px;
  list-style: none;
  line-height: 1.4;
  font-size: 23px;
  ${({ theme }) => theme.cardContent}

  ${StyledWrapper}:hover & {
    ${({ theme }) => theme.cardHover}

    ${({ theme }) => theme.media.tabPort} {
      ${({ theme }) => theme.cardTransformOf}
    }
  }
  ${({ theme }) => theme.media.tabPort} {
    ${({ theme }) => theme.cardHoverOf}
  }
`;

const StyledButtonCard = styled(ButtonCard)`
  transition: 0.5s;
  text-align: center;
  opacity: 0;
  visibility: hidden;
  font-weight: bold;
  transform: translateY(40px);
  text-shadow: none;
  display: flex;
  justify-content: end;
  align-items: end;
  height: 100px;
  background-color: black;
  ${({ theme }) => theme.media.tabPort} {
    ${({ theme }) => theme.cardHoverOf}
  }

  ${StyledWrapper}:hover & {
    ${({ theme }) => theme.cardHover}

    ${({ theme }) => theme.media.tabPort} {
      ${({ theme }) => theme.cardTransformOf}
    }
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
  item_5,
  item_6,
  item_7,
  link
}) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <StyledWrapper data-aos="fade-up" data-aos-offset="200">
          <Image src={image} alt={title} />
          <Content>
            <H3>{title}</H3>
            <P>{description}</P>
            <UL isVisble>
              <li>{item_1}</li>
              <li>{item_2}</li>
              <li>{item_3}</li>
              <li>{item_4}</li>
              <li>{item_5}</li>
              <li>{item_6}</li>
              <li>{item_7}</li>
            </UL>
            <StyledButtonCard as="a" href={link} target="_blank" />
          </Content>
        </StyledWrapper>
      </>
    </ThemeProvider>
  );
  Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    item_1: PropTypes.string.isRequired,
    item_2: PropTypes.string.isRequired,
    item_3: PropTypes.string.isRequired,
    item_4: PropTypes.string.isRequired,
    item_5: PropTypes.string,
    item_6: PropTypes.string,
    item_7: PropTypes.string,
    link: PropTypes.string.isRequired
  };
  Card.defaultProps = {
    item_5: " ",
    item_6: " ",
    item_7: " "
  };
}

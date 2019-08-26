import React from "react";
import "../styles/Panel.scss";
import rwd from "../images/rwd.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme.js";
import {
  faHtml5,
  faCss3Alt,
  faSass,
  faGithub,
  faJsSquare,
  faReact,
  faLinkedinIn,
  faFacebookF
} from "@fortawesome/free-brands-svg-icons";

const StyledWrapper = styled.div`
  position: relative;
  z-index: 99999;
`;
const Ul = styled.ul`
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -65%);
  margin: 0;
  padding: 0;
  width: 900px;
  height: 600px;
  ${({ theme }) => theme.media.tabPort} {
    width: 400px;
    top: 55%;
    left: 112%;
    transform: translate(-112%, -55%);
  }
`;
const Li = styled.li`
  list-style: none;
  margin: 0 40px;
  display: inline-block;
  :hover:nth-child(1) a {
    background: #3b5999;
  }
  :hover:nth-child(1) a:before {
    background: #2e4a86;
  }
  :hover:nth-child(1) a:after {
    background: #4a69ad;
  }
`;
const A = styled.a`
  position: relative;
  display: block;
  width: 80px;
  height: 80px;
  background-color: #fff;
  text-align: center;
  transform: perspective(1000px) rotate(-30deg) skew(25deg) translate(0, 0);
  transition: 0.5s;
  cursor: default;
  ${({ theme }) => theme.media.tabPort} {
    width: 50px;
    height: 50px;
  }
  :before {
    content: "";
    position: absolute;
    top: 10px;
    left: -20px;
    height: 80px;
    width: 20px;
    background-color: #b1b1b1;
    transition: 0.5s;
    transform: rotate(0deg) skewY(-45deg);
    ${({ theme }) => theme.media.tabPort} {
      height: 50px;
    }
  }
  :after {
    content: "";
    position: absolute;
    bottom: -19px;
    left: -10px;
    height: 20px;
    width: 100%;
    background-color: #b1b1b1;
    transition: 0.5s;
    transform: rotate(0deg) skewX(-45deg);
  }
  :hover,
  :active,
  :focus {
    transform: perspective(1000px) rotate(-30deg) skew(25deg)
      translate(20px, -20px);
    box-shadow: -50px 50px 50px rgba(000, 000, 000, 0.8);
  }
  :active{
    top: 5px;
  }
  }
`;
const I = styled.i`
  font-size: 50px;
  color: #262626;
  line-height: 80px;
  transition: 0.5s;
  ${({ theme }) => theme.media.tabPort} {
    font-size: 30px;
    line-height: 50px;
  }

  ${Li}:hover & {
    color: #fff;
  }
`;

export default function Panel({ openModalFn }) {
  return (
    <ThemeProvider theme={theme}>
      <StyledWrapper data-aos="fade-up">
        <Ul>
          <Li className="p-5">
            <A
              href="https://www.facebook.com/profile.php?id=100007445748069"
              target="_blank"
            >
              <I className="fab">
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
              </I>
            </A>
          </Li>
          <Li className="p-2">
            <A href="#panel" onClick={openModalFn}>
              <I className="fab">
                <FontAwesomeIcon icon={faHtml5} size="lg" />
              </I>
            </A>
          </Li>
          <Li className="p-11">
            <A href="#panel">
              <I className="fab">
                <FontAwesomeIcon icon={faJsSquare} size="lg" />
              </I>
            </A>
          </Li>
          <Li className="p-4">
            <A
              href="www.linkedin.com/in/jacek-maciejak-frontend-developer"
              target="_blank"
            >
              <I className="fab">
                <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
              </I>
            </A>
          </Li>
          <Li className="p-1">
            <A href="#panel">
              <I className="fab">
                <FontAwesomeIcon icon={faCss3Alt} size="lg" />
              </I>
            </A>
          </Li>
          <Li className="p-6">
            <A href="#panel">
              <I className="fab">B4</I>
            </A>
          </Li>
          <Li className="p-7">
            <A href="#panel">
              <I className="fab">
                <img src={rwd} alt="Icon" />
              </I>
            </A>
          </Li>
          <Li className="p-8">
            <A href="#panel">
              <I className="fab">
                Flex <br /> Box
              </I>
            </A>
          </Li>
          <Li className="p-9">
            <A href="#panel">
              <I className="fab">Grid</I>
            </A>
          </Li>
          <Li className="p-10">
            <A href="#panel">
              <I className="fab">
                <FontAwesomeIcon icon={faSass} size="lg" />
              </I>
            </A>
          </Li>
          <Li className="p-3">
            <A href="https://github.com/jacekmaciejak" target="_blank">
              <I className="fab">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </I>
            </A>
          </Li>
          <Li className="p-12">
            <A href="#panel">
              <I className="fab">
                <FontAwesomeIcon icon={faReact} size="lg" />
              </I>
            </A>
          </Li>
        </Ul>
      </StyledWrapper>
    </ThemeProvider>
  );
}

import React, { Component } from "react";
import rwd from "../images/rwd.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme.js";
import SkyLight from "react-skylight";
import Button from "./Button";

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
  width: 100%;
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
    left: 0;
    top: 55%;
    left: 112%;
    transform: translate(-112%, -55%);
  }
`;
const Li = styled.li`
  list-style: none;
  // margin: 0 40px;
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
  :hover:nth-child(2) a {
    background: #e44d26;
  }

  :hover:nth-child(2) a:before {
    background: #cc3d19;
  }
  :hover:nth-child(2) a:after {
    background: #e96949;
  }
  :hover:nth-child(3) a {
    background: #f7e018;
  }

  :hover:nth-child(3) a:before {
    background: #ddc808;
  }

  :hover:nth-child(3) a:after {
    background: #f8e53a;
  }

  :hover:nth-child(4) a {
    background: #0077b5;
  }

  :hover:nth-child(4) a:before {
    background: #036aa0;
  }

  :hover:nth-child(4) a:after {
    background: #0d82bf;
  }

  :hover:nth-child(5) a {
    background: #1f62ae;
  }

  :hover:nth-child(5) a:before {
    background: #174982;
  }

  :hover:nth-child(5) a:after {
    background: #267ad9;
  }

  :hover:nth-child(6) a {
    background: #8a61c1;
  }

  :hover:nth-child(6) a:before {
    background: #7847b8;
  }

  :hover:nth-child(6) a:after {
    background: #956cc6;
  }

  :hover:nth-child(7) a {
    background: #33ff33;
  }

  :hover:nth-child(7) a:before {
    background: #00e600;
  }

  :hover:nth-child(7) a:after {
    background: #66ff66;
  }

  :hover:nth-child(8) a {
    background: #ff5500;
  }

  :hover:nth-child(8) a:before {
    background: #cc4400;
  }

  :hover:nth-child(8) a:after {
    background: #ff7733;
  }

  :hover:nth-child(9) a {
    background: #ff0066;
  }

  :hover:nth-child(9) a:before {
    background: #cc0052;
  }

  :hover:nth-child(9) a:after {
    background: #ff3385;
  }

  :hover:nth-child(10) a {
    background: #cf649a;
  }

  :hover:nth-child(10) a:before {
    background: #c33c80;
  }

  :hover:nth-child(10) a:after {
    background: #db8ab3;
  }

  :hover:nth-child(11) a {
    background: #e4405f;
  }

  :hover:nth-child(11) a:before {
    background: #d02d4c;
  }

  :hover:nth-child(11) a:after {
    background: #f1395c;
  }

  :hover:nth-child(12) a {
    background: #61dbfb;
  }

  :hover:nth-child(12) a:before {
    background: #38d3fa;
  }

  :hover:nth-child(12) a:after {
    background: #83e4fc;
  }

  &.p-1 {
    position: absolute;
    top: 260px;
    left: 170px;
    ${({ theme }) => theme.media.tabPort} {
      top: 220px;
      left: 220px;
    }
  }
  &.p-2 {
    position: absolute;
    top: 340px;
    left: 40px;
    ${({ theme }) => theme.media.tabPort} {
      top: 280px;
      left: 300px;
    }
  }
  &.p-3 {
    position: absolute;
    top: 430px;
    left: 170px;
    ${({ theme }) => theme.media.tabPort} {
      top: 390px;
      left: 300px;
    }
  }
  &.p-4 {
    position: absolute;
    top: 520px;
    left: 300px;
    ${({ theme }) => theme.media.tabPort} {
      top: 450px;
      left: 385px;
    }
  }
  &.p-5 {
    position: absolute;
    top: 445px;
    left: 430px;
    ${({ theme }) => theme.media.tabPort} {
      top: 400px;
      left: 470px;
    }
  }
  &.p-6 {
    position: absolute;
    top: 375px;
    left: 550px;
    font-weight: bold;

    ${({ theme }) => theme.media.tabPort} {
      top: 290px;
      left: 470px;
    }
  }
  &.p-7 {
    font-size: 35px;
    font-weight: bold;
    position: absolute;
    top: 305px;
    left: 670px;
    ${({ theme }) => theme.media.tabPort} {
      font-size: 22px;
      top: 240px;
      left: 550px;
    }
  }
  &.p-8 {
    font-size: 35px;
    font-weight: bold;
    position: absolute;
    top: 210px;
    left: 540px;
    ${({ theme }) => theme.media.tabPort} {
      font-size: 22px;
      top: 180px;
      left: 470px;
    }
  }
  &.p-9 {
    font-size: 35px;
    font-weight: bold;
    position: absolute;
    top: 120px;
    left: 410px;
    ${({ theme }) => theme.media.tabPort} {
      font-size: 22px;
      top: 120px;
      left: 385px;
    }
  }
  &.p-10 {
    position: absolute;
    top: 190px;
    left: 290px;
    ${({ theme }) => theme.media.tabPort} {
      top: 170px;
      left: 300px;
    }
  }
  &.p-11 {
    position: absolute;
    top: 350px;
    left: 300px;
    ${({ theme }) => theme.media.tabPort} {
      top: 340px;
      left: 385px;
    }
  }
  &.p-12 {
    position: absolute;
    top: 280px;
    left: 420px;
    ${({ theme }) => theme.media.tabPort} {
      top: 230px;
      left: 385px;
    }
  }
`;
const Img = styled.img`
  width: 90%;
  height: 100%;
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
  cursor: pointer;

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
  &.ip-8 {
    line-height: 1;
    font-size: 35px;
    font-weight: bold;
    ${({ theme }) => theme.media.tabPort} {
      font-size: 22px;
    }
  }
  &.ip-9 {
    font-size: 35px;
    font-weight: bold;
    ${({ theme }) => theme.media.tabPort} {
      font-size: 22px;
    }
  }
`;
const StyledButton = styled(Button)`
  font-size: calc(5px + 1vw);
  opacity: 1;
  width: 10vw;
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -85%);
  ${({ theme }) => theme.media.tabPort} {
    width: 25vw;
  }
`;

export default class PanelSky extends Component {
  render() {
    const Modal = {
      textAlign: "center"
    };

    return (
      <ThemeProvider theme={theme}>
        <StyledWrapper>
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
              <A href="#panel" onClick={() => this.animated.show()}>
                <I className="fab">
                  <FontAwesomeIcon icon={faHtml5} size="lg" />
                </I>
              </A>
              <SkyLight
                hideOnOverlayClicked
                ref={ref => (this.animated = ref)}
                transitionDuration={1500}
                dialogStyles={Modal}
              >
                Hello Jacek
              </SkyLight>
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
                href="https://www.linkedin.com/in/jacek-maciejak-frontend-developer"
                target="_blank"
              >
                <I className="fab">
                  <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                </I>
              </A>
            </Li>
            <Li className="p-1">
              <A href="#panel" onClick={() => this.animated.show()}>
                <I className="fab">
                  <FontAwesomeIcon icon={faCss3Alt} size="lg" />
                </I>
              </A>
              <SkyLight
                hideOnOverlayClicked
                ref={ref => (this.animated = ref)}
                transitionDuration={1500}
                dialogStyles={Modal}
                title="AAAAAAAAA"
              >
                Hello Jacek
              </SkyLight>
            </Li>
            <Li className="p-6">
              <A href="#panel">
                <I className="fab">B4</I>
              </A>
            </Li>
            <Li className="p-7">
              <A href="#panel">
                <I className="fab">
                  <Img className="img" src={rwd} alt="Icon" />
                </I>
              </A>
            </Li>
            <Li className="p-8">
              <A href="#panel">
                <I className="ip-8 fab">
                  Flex <br /> Box
                </I>
              </A>
            </Li>
            <Li className="p-9">
              <A href="#panel">
                <I className="ip-9 fab">Grid</I>
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
}

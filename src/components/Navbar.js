import React, { Component } from "react";
import "../styles/Navbar.scss";
import { FaAlignRight } from "react-icons/fa";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link
                to="aboutme"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                O mnie
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                Technologie
              </Link>
            </li>
            <li>
              <Link
                to="about"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                Projekty
              </Link>
            </li>
            <li>
              <Link
                to="email"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                Kontakt
              </Link>
            </li>
            <li>
              <Link
                to="banner"
                exact
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-250}
                duration={1000}
              >
                Glowna
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

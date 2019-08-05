import React, { Component } from "react";
import "../styles/Navbar.scss";
import { FaAlignRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

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
              <NavLink to="/about_me">O mnie</NavLink>
            </li>
            <li>
              <NavLink to="/skills">Technologie</NavLink>
            </li>
            <li>
              <NavLink to="/about">Projekty</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Kontakt</NavLink>
            </li>
            <li>
              <NavLink to="/" exact>
                Strona główna
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

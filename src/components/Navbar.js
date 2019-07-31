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
              <NavLink to="/about_me">About me</NavLink>
            </li>
            <li>
              <NavLink to="/skills">Technology</NavLink>
            </li>
            <li>
              <NavLink to="/about">Works</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/" exact>
                Home
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

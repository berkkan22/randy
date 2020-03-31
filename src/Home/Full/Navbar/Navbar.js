import React, { Component } from "react";
import "./Navbar.css";

// ES6 Imports
import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <ul>
          <li>
            {/* TODO: focus on page loaded */}
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              <a href="#about">About</a>
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="facts"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              <a href="#facts">Facts</a>
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="achievment"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              <a href="#achievment">Achievment</a>
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="galerie"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              <a href="#galerie">Gallery</a>
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contactS"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              <a href="#contact">Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
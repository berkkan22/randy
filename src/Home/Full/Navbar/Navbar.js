import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <ul>
          <li>
              {/* TODO: focus on page loaded */}
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#facts">Facts</a>
          </li>
          <li>
            <a href="#achievment">Achievment</a>
          </li>
          <li>
            <a href="#galerie">Galerie</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;

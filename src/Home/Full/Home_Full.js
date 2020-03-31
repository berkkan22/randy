import React, { Component } from "react";
import "./Home_Full.css";

import Navbar from "./Navbar/Navbar.js";
import About from "./About/About.js";
import Facts from "./Facts/Facts.js";
import Achievment from "./Achievment/Achievment.js";
import SocialMedia from "./About/SocialMedia.js";
import Contact from "./Contact/Contact.js";
import Galerie from "./Galerie/Galerie.js";

import Ronaldo from "C:/Users/Berkk/Desktop/Programmieren/randy_website/src/image/Ronaldo2.jpg";

import Fade from "react-reveal/Fade";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

class Home extends Component {
  state = {
    social: [
      {
        href: "https://www.instagram.com/randylt_7/",
        icon: "Instagram"
      },
      {
        href: "https://www.snapchat.com/add/x22gamerx",
        icon: "Snapchat"
      },
      {
        href: "https://www.facebook.com/randy.tangohong",
        icon: "Facebook"
      }
    ],
    className: ""
  };

  // Change Background from nav by scrolling
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.pageYOffset > 0) {
      if (!this.state.className) {
        this.setState({ className: "gray" });
      }
    } else {
      if (this.state.className) {
        this.setState({ className: "" });
      }
    }
  };

  render() {
    return (
      <div className="Home">
        <header className={this.state.className}>
          <Navbar></Navbar>
        </header>
        <img className="BackImg" src={Ronaldo} alt="Ronaldo Background" />
        <div className="bodyContainer">
          <Element name="about" className="element">
            <About></About>
          </Element>
          <Element name="facts" className="element">
            <Facts></Facts>
          </Element>
          <Element name="achievment" className="element">
            <Achievment></Achievment>
          </Element>
          <Element name="galerie" className="element">
            <Galerie></Galerie>
          </Element>
          <Element name="contactS" className="element">
            <Contact></Contact>
          </Element>
          <div className="Footer">
            <SocialMedia socialIcons={this.state.social}></SocialMedia>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

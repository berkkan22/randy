import React, { Component } from "react";

import "./Home_Full.css";

import RandyProfiel from "C:/Users/Berkk/Desktop/Programmieren/randy_website/src/image/Randy_Profiel.jpg";
import Ronaldo from "C:/Users/Berkk/Desktop/Programmieren/randy_website/src/image/Ronaldo2.jpg";

import Fade from "react-reveal/Fade";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="BackgroundImg">
          <img src={Ronaldo} alt="Ronaldo Background" />
          <div className="Blur"></div>
        </div>
        <div className="NavBar"></div>
        <div className="bodyContainer">
          <div className="About">
            <div className="AboutUpperContainer"></div>
            <div className="AboutText"></div>
          </div>
          <div className="Facts">
            <div className="InterestingFacts"></div>
            <div className="Skills"></div>
          </div>
          <div className="Achievment">
            <div className="Education"></div>
            <div className="FussballKariere"></div>
          </div>
          <div className="Galerie"></div>
        </div>
        <div className="Contact"></div>
        <div className="Footer"></div>
      </div>
    );
  }
}

export default Home;

import React, { Component } from "react";

import "./Home_Full.css";

import RandyHome from "C:/Users/Berkk/Desktop/Programmieren/randy_website/src/image/Randy_Home.jpg";

import Fade from "react-reveal/Fade";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        {/* Background */}
        <div className="LeftContainer">
          {/* Name und was er macht (Arbeitslos)*/}
          <div className="NameContainer">
            <Fade top>
              <h1 className="Name">
                Randy Luther <br />
                Forther Tangohong
              </h1>
            </Fade>
          </div>

          <div className="Job">
            <Fade left>
                <p className="Strich">___________</p>
              <h1>Arbeitslos</h1>
            </Fade>
          </div>
        </div>
        <div className="RightContainer">
          {" "}
          {/* Bild */}
          <Fade right>
            <img src={RandyHome} alt="Randy" size="100px" />
          </Fade>
        </div>
      </div>
    );
  }
}

export default Home;

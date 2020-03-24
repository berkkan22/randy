import React, { Component } from "react";

import "./Home_Container.css";

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

              <div className="Job">
                <h1>Arbeitslos</h1>
              </div>
            </Fade>
          </div>
        </div>
        <div className="RightContainer">
          {/* Bild */}
          <Fade right>
              {/* TODO: Formatierung */}
          <img src={RandyHome} alt="Randy" size="100px" />
          </Fade>
        </div>
      </div>
    );
  }
}

export default Home;

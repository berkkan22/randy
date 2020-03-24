import React, { Component } from "react";

import "./About.css";

import RandyProfiel from "C:/Users/Berkk/Desktop/Programmieren/randy_website/src/image/Randy_Profiel.jpg";

class About extends Component {
  render() {
    return (
      <div className="About">
        <div className="AboutUpperContainer">
          <div className="left">
            <div className="Short">
              <h1 className="Name">
                Randy Luther <br /> Forther Tangohong
              </h1>
              <h2 className="Job">Arbeitslos</h2>
            </div>
          </div>
          <div className="right">
            <img className="ProfielBild" src={RandyProfiel} alt="" />
          </div>
          <div className="clear"></div>
        </div>
        <div className="AboutText">
          <p className="Text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            harum, illo, consequuntur alias cum sapiente dolores quod temporibus
            voluptatem modi blanditiis dolor quidem amet! Ipsam debitis non
            deleniti dolore voluptatum. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Distinctio, ipsam ut! Nesciunt repellat doloremque
            qui in reiciendis sunt tempore velit, adipisci amet saepe laboriosam
            quae quas nostrum praesentium possimus ab.
          </p>
        </div>
      </div>
    );
  }
}

export default About;

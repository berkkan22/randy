import React, { Component } from "react";

import "./About.css";

import Table from "./Table.js";
import SocialMedia from "./SocialMedia.js";

import RandyProfiel from "C:/Users/Berkk/Desktop/Programmieren/randy_website/src/image/Randy_Profiel.jpg";

class About extends Component {
  state = {
    table: [
      { first: "Alter", second: 19 },
      { first: "Adresse", second: "Finkenwerder, Hamburg, Detuschland" },
      { first: "Nummer", second: 123344567898765 }
    ],
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
    ]
  };

  render() {
    return (
      <div className="About">
        <div className="AboutUpperContainer">
          <div className="left">
            <div className="NameUndArbeit">
              <h1 className="Name">
                Randy Luther <br /> Forther Tangohong
              </h1>
              <h2 className="Job">Arbeitslos</h2>
            </div>
            <div className="ShortInfo">
              <table className="tabel">
                <Table table={this.state.table}></Table>
              </table>
            </div>
            <div className="followMe">
              <h2>Follow me</h2>
              <div className="socialIcons">
                <SocialMedia socialIcons={this.state.social}></SocialMedia>
              </div>
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

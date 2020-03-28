import React, { Component } from "react";
import "../Home_Full.css";
import "./Achievment.css";

import TimeContainer from "./TimeContainer.js";

export default class Acievment extends Component {
  state = {
    timeline: [
      {
        date: 2019,
        title: "Abitur",
        subtext: "Am Gynmasium Finkenwerder",
        left: true
      },
      {
        date: 2019,
        title: "Abitur",
        subtext: "Am Gynmasium Finkenwerder",
        left: false
      },
      {
        date: 2019,
        title: "Abitur",
        subtext: "Am Gynmasium Finkenwerder",
        left: true
      }
    ]
  };

  render() {
    return (
      <div className="Achievment">
        <h1 className="headline">Achievment</h1>
        <div className="Education">
          <h2 className="subTitle">Education</h2>
          <div className="timelinebar education"></div>
          <TimeContainer timeline={this.state.timeline}></TimeContainer>
        </div>
        <div className="FussballKariere"></div>
      </div>
    );
  }
}

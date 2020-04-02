import React, { Component } from "react";
import "../Home_Full.css";
import "./Achievment.css";

import TimeContainer from "./TimeContainer.js";

export default class Acievment extends Component {
  state = {
    timeline_education: [
      {
        date: 2019,
        title: "Abitur",
        subtext: "Am Gynmasium Finkenwerder",
        side: "left",
        // top: 0
      },
      {
        date: 2019,
        title: "Abitur",
        subtext: "Am Gynmasium Finkenwerder",
        side: "right",
        // top: -100
      },
      {
        date: 2019,
        title: "Abitur",
        subtext: "Am Gynmasium Finkenwerder",
        side: "left",
        // top: 60
      }
    ],
    timeline_career: [
      {
        date: 2019,
        title: "TUS",
        subtext: "Finkenwerder",
        side: "left",
        top: 0
      },
      {
        date: 2019,
        title: "Abitur",
        subtext: "Am Gynmasium Finkenwerder",
        side: "right",
        top: -100
      },
      {
        date: 2019,
        title: "Abitur",
        subtext: "Am Gynmasium Finkenwerder",
        side: "left",
        top: 60
      }
    ],
  };

  render() {
    return (
      <div className="Achievment">
        <h1 className="headline">Achievment</h1>
        <div className="Education">
          <h2 className="subTitle">Education</h2>
          <div className="timelinebar education"></div>
          <div className="TimeContainerEducation">

            {/* TODO: Anpassen damit man es leichter hat responsiv zu machen */}
            <TimeContainer
              timeline_state={this.state.timeline_education}
            ></TimeContainer>
          </div>
        </div>
        {/* <div className="FussballKariere">
          <h2 className="subTitle">Career</h2>
          <div className="timelinebar career"></div>
          <div className="TimeContainerCareer">
            <TimeContainer
              timeline_state={this.state.timeline_career}
            ></TimeContainer>
          </div>
        </div> */}
      </div>
    );
  }
}

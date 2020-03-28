import React, { Component } from "react";
import "./TimeContainer.css";

export default class TimeContainer extends Component {
  render() {
    return this.props.timeline.map(item => (
      <div className="timeBoxOutter">
        <span className="dot left"></span>

        <div className="timeBoxInner">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit esse
          unde aspernatur mollitia quam, veritatis, corrupti aliquid architecto
          nulla officiis autem illo. Fuga labore corrupti maiores quasi officia
          qui delectus!
        </div>
        <span className="arrow left"></span>
      </div>
    ));
  }
}

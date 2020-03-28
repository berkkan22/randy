import React, { Component } from "react";
import "./Zahlen.css";

class Zahlen extends Component {
  render() {
    return this.props.zahlen.map(zahl => (

        // TODO: Responsiv machen
      // <div className="outerContainer">
        <div className="firstContainer">
          <p className="Number">{zahl.zahl}</p>
          <div className="iconTitle">
            <img src="" alt="" className="Icon" />
            <p className="title">{zahl.title}</p>
          </div>
        </div>
      // </div>
    ));
  }
}

export default Zahlen;

import React, { Component } from "react";
import "./TimeContainer.css";

export default class TimeContainer extends Component {
  render() {
    return this.props.timeline_state.map(item => (
      // <div className={"timeBoxOutter " + item.side} style={{ top: item.top }}>
      //   <span className={"dot " + item.side}></span>

      //   <div className="timeBoxInner">
      //     <p className="date">{item.date}</p>
      //     <p className="titleTimeContainer">{item.title}</p>
      //     <p className="subtext">{item.subtext}</p>
      //   </div>
      //   <span className={"arrow " + item.side}></span>
      // </div>

      <div className={"timeBoxContainerOutter " + item.side + item.top}>
        <span className={"dot " + item.side}></span>
        <div className="timeContainerInner">
          <span className={"arrow " + item.side}></span>
          <div className="timeTextInner">
            <p className="date">{item.date}</p>
            <p className="titleTimeContainer">{item.title}</p>
            <p className="subtext">{item.subtext}</p>
          </div>
        </div>
        {/* <div style={{ clear: both }}></div> */}
      </div>
    ));
  }
}

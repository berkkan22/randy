import React, { PureComponent } from "react";
import '../Home_Full.css';
import "./Facts.css";

import Zahlen from "./Zahlen.js";

class Facts extends PureComponent {
  state = {
    zahlen: [
      {
        zahl: 50,
        title: "Tore",
        icon: "Ball"
      },
      {
        zahl: 20,
        title: "Siege",
        icon: "Medalie"
      },
      {
        zahl: 20,
        title: "Siege",
        icon: "Medalie"
      },
      {
        zahl: 20,
        title: "Siege",
        icon: "Medalie",
        show: true
      }
    ]
  };

  render() {
    return (
      <div className="Facts">
        <div className="InterestingFacts">
          <h1 className="headline">Intrestingfacts</h1>
          <div className="Zahlen">
            <Zahlen zahlen={this.state.zahlen}></Zahlen>
            <div className="clear"></div>
          </div>
        </div>
        {/* <div className="Skills">
          <h1>Skills</h1>
        </div> */}
      </div>
    );
  }
}

export default Facts;

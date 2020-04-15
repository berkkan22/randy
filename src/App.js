import React, { Component } from "react";
import "./App.css";

// import Home from "./Home/Dreieck/Home_Dreieck.js";
// import Home from "./Home/Container/Home_Container.js";
import Home from "./Home/Full/Home_Full.js";

import { ReactComponent as ScrollToTop } from "./icons/scrollToTop.svg";

import { Element, animateScroll as scroll } from "react-scroll";

class App extends Component {
  state = {
    className: "",
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.pageYOffset > 60) {
      if (!this.state.className) {
        this.setState({ className: "ToTop" });
      }
    } else {
      if (this.state.className) {
        this.setState({ className: "" });
      }
    }
  };

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <div className="App">
        <Home></Home>
        <div className={this.state.className}>
          <a onClick={this.scrollToTop}>
            <ScrollToTop></ScrollToTop>
          </a>
        </div>
      </div>
    );
  }
}

export default App;

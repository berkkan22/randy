import React, { Component } from "react";
import "./App.css";

// import Home from "./Home/Dreieck/Home_Dreieck.js";
// import Home from "./Home/Container/Home_Container.js";
import Home from "./Home/Full/Home_Full.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home></Home>
      </div>
    );
  }
}

export default App;

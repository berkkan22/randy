import React, { Component } from "react";

import { ReactComponent as Instagram } from "C:/Users/Berkk/Desktop/Programmieren/randy_website/src/icons/instagram.svg";
import { ReactComponent as Facebook } from "C:/Users/Berkk/Desktop/Programmieren/randy_website/src/icons/facebook-f.svg";
import { ReactComponent as Snapchat } from "C:/Users/Berkk/Desktop/Programmieren/randy_website/src/icons/snapchat.svg";

export default class Icon extends Component {
  render() {
    switch (this.props.icon) {
      case "Instagram":
        return <Instagram className="Instagram"/>;
        break;
      case "Snapchat":
        return <Snapchat className="Snapchat"/>;
        break;
      case "Facebook":
        return <Facebook className="Facebook"/>;
        break;
    }
  }
}

import React, { Component } from "react";

import { ReactComponent as Instagram } from "../../../icons/instagram.svg";
import { ReactComponent as Facebook } from "../../../icons/facebook-f.svg";
import { ReactComponent as Snapchat } from "../../../icons/snapchat.svg";

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
      default:
        return  <p>Image not founded</p>
    }
  }
}

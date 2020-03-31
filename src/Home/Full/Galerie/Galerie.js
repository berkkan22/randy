import React, { Component } from "react";
import "./Galerie.css";

import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

import RandyProfiel from "C:/Users/Berkk/Desktop/Programmieren/randy_website/src/image/Randy_Profiel.jpg";

export default class Galerie extends Component {
  render() {
    const images = [
      {
        original: "http://lorempixel.com/1000/600/nature/1/"
      },
      {
        original: "http://lorempixel.com/1000/600/nature/2/"
      },
      {
        original: "http://lorempixel.com/1000/600/nature/3/"
      },
      {
        original: RandyProfiel
      }
    ];

    return (
      <div className="galerieContainer">
        <h1 className="headline">Gallery</h1>

        <ImageGallery
          items={images}
          showThumbnails={false}
          showPlayButton={false}
        />
      </div>
    );
  }
}

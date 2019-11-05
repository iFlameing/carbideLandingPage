import React, { Component } from "react";
import AboutPng from "../../about.png";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div>
        <img className="imageCss" src={AboutPng} alt="aboutPng" />
      </div>
    );
  }
}

export default About;

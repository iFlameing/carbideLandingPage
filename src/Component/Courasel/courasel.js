import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import HomePng from "../../home.png";
import First from "../../1.png";
import Second from "../../2.png";

class Courasel extends Component {
  render() {
    return (
      <div style={{ marginTop: 0 }}>
        <Carousel autoPlay>
          <div>
            <img src={HomePng} alt="Home" />
          </div>
          <div>
            <img src={First} alt="First" />
          </div>
          <div>
            <img src={Second} alt="Second" />
          </div>
        </Carousel>
      </div>
    );
  }
}

export default Courasel;

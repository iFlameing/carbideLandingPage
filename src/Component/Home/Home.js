import React, { Component } from "react";
import Typist from "react-typist";
import carbadex from "../../carbadex.jpg";
import "./Home.css";
class Home extends Component {
  render() {
    return (
      <div className="house">
        <img className="img234" alt="carbadex" src={carbadex} />
        <Typist
          cursor={{ hideWhenDone: true, hideWhenDoneDelay: 10 }}
          className="TypistClass"
        >
          Carbadex
        </Typist>
      </div>
    );
  }
}
export default Home;

import React, { Component } from "react";
import Typist from "react-typist";
import carbadex from "../../Carbadex.png";
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
          CARBADEX
        </Typist>
      </div>
    );
  }
}
export default Home;

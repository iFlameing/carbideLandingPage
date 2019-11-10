import React, { Component } from "react";
import { Link } from "@reach/router";
import Logo from "../../logo.png";

import "./Home.css";
class Home extends Component {
  render() {
    return (
      <div>
        <div style={{ marginTop: 50, backgroundColor: "black" }}>
          <h1>
            <span className="spanmargin1">F</span>
            <span className="spanmargin">l</span>
            <span className="spanmargin">y</span>
            <span className="spanmargin">d</span>
            <span className="spanmargin">e</span>
            <span className="spanmargin">x</span>
            <span className="spanmargin1">
              A
            </span>
            <span className="spanmargin">u</span>
            <span className="spanmargin">t</span>
            <span className="spanmargin">o</span>
            <span className="spanmargin">m</span>
            <span className="spanmargin">
              o<span className="spanmargin">b</span>
              <span className="spanmargin">i</span>
              <span className="spanmargin">l</span>
              <span className="spanmargin">e</span>
              <span className="spanmargin">s</span>
            </span>
          </h1>
          <p style={{ color: "yellow", fontSize: 30, marginBottom: 0 }}>
            A solution to energy and environmental crisis
          </p>
        </div>
        <Link to="/">
          <img className="imageLogo" src={Logo} alt="Logo" />
        </Link>
      </div>
    );
  }
}

export default Home;

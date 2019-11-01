import React, { Component } from "react";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import Grid from "@material-ui/core/Grid";
import "./Home.css";
import { Link } from "@reach/router";
import Signin from "../SignIn/SignIn";
import Fly from "../../carbadex.JPG";
import Front from "../../front.png";
import Left from "../../left.png";
import Logo from "../../logo.png";

class Home extends Component {
  render() {
    return (
      <div className="house">
        <Grid item xs={9}>
          <div className="background_logo">
            <Link to="/">
              <img
                className="logo"
                src={Logo}
                style={{ marginLeft: 30, marginTop: 20 }}
              />
            </Link>
            <span className="Flydex">
              <span className="Flydex_first_text">F</span>
              <span className="Flydex_text">lydex</span>
              <br />
              <span className="Flydex_first_text">A</span>
              <span className="Flydex_text">utomobiles</span>
              <br />
            </span>
          </div>
          <div className="Side_text">
            <span className="Written_text">
              Increase your efficiency by 8%.
            </span>
            <AwesomeSlider className="Slider">
              <div data-src={Front} />
              <div data-src={Fly} />
              <div data-src={Left} />
            </AwesomeSlider>
          </div>
        </Grid>
        <Grid item xs={3}>
          <Signin />
        </Grid>
      </div>
    );
  }
}
export default Home;

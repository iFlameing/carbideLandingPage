import React, { Component } from "react";
import Typist from "react-typist";
import front from "../../front.png";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Grid from '@material-ui/core/Grid';
import "./Home.css";
import { Link } from "@reach/router";
import Signin from "../SignIn/SignIn";
class Home extends Component {
  render() {

    return (
      <div className="house">
          <Grid item xs={9}>
        <div className="background_logo">
            <Link to="/">
            <button><img className="logo" src={require('../../logo.png')}/></button>
            </Link>
            <span className="Flydex">
            <span className="Flydex_first_text">F</span><span className="Flydex_text">lydex</span><br />
            <span className="Flydex_first_text">A</span><span className="Flydex_text">utomobiles</span><br />
            </span>
        </div>
        <div className="Side_text">
            <span className="Written_text">Increase your efficiency by 8%.</span>
            <AwesomeSlider  className="Slider">
                <div data-src="/src/carbadex.JPG"/>
                <div data-src="/src/left.png"/>
                <div data-src="/src/top.png"/>
            </AwesomeSlider>
          </div>
          </Grid>
          <Grid item xs={3}>
            <Signin />
          </Grid>
        {/*
        <Typist
          cursor={{ hideWhenDone: true, hideWhenDoneDelay: 10 }}
          className="TypistClass"
        >
          CARBADEX
        </Typist>*/}
      </div>
    );
  }
}
export default Home;

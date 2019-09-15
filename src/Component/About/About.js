import React, { Component } from "react";
import "./About.css";
import fly from "../../fly.png";
import pr1 from "../../manifolds.JPG";
import pr2 from "../../Throttling Device.JPG";
import pr3 from "../../Separator Box.JPG";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="heading">
          <h1>
            About <span>Us</span>
          </h1>
          <h4>
            “A Solution To The Energy And Environmental Crisis”.
            <br />
            Let’s start revolution.
          </h4>
          <Grid container>
            <Grid item xs={12} lg={6} md={6}>
              <div className="image">
                <img src={fly} alt="about" className="image1"></img>
              </div>
            </Grid>
            <Grid item xs={12} lg={6} md={6}>
              <br />
              <br />
              <Paper elevation={4}>
                <h2 className="heading1">ABOUT THE COMPANY</h2>
              </Paper>
              <p className="detail">
                Company Founded On 13th June 2017 By Akash Srivastava, FLYDEX
                AUTOMOBILES is a private Company That Focuses On Manufacturing
                Products For Automobiles That Reduces Their Fuel Consumption
                Thus Reducing Pollution And Providing A Much Greener Solution To
                The Automobile Industry.
              </p>
            </Grid>
          </Grid>
        </div>
        <div>
          <div className="mission">
            <Grid item xs={6} lg={4} xl={3}>
              <Paper elevation={4}>
                <h2 className="mission1">MISSION</h2>
              </Paper>
            </Grid>
          </div>
          <div className="points">
            Develop innovative products which decrease fuel and energy consumption.<br/>
            Develop products which are compatible with I.C Engines as well as on rotatory motion devices.<br/>
            Low fuel and energy consumption to make environment less polluted and energizing.<br/>
            Increasing the engine life without affecting it’s performance.<br/>
            Develop products of superior value by focusing on the customer problems.<br/>
            To make Indian Industries highly Productive By reducing Power Consumption through using our products in their Machinery.
            <br/>
          </div>
          <div className="vision">
            <Grid item xs={6} lg={4} xl={3}>
              <Paper elevation={4}>
                <h2 className="vision1">VISION</h2>
              </Paper>
            </Grid>
          </div>
          <p className="vision2">
            We are proud to be A Company That Is Focused On Reducing Fuel and
            Energy Consumption Without Compromising The Performance Of The I. C.
            Engine or Any Kind of Rotary Motion Devices As Well As Making The
            Emission Of Harmful Gases Lesser So That Fuel Consumption Is More
            Environment Friendly. Further We Also Intended To Help Our Customer
            To Enhance Their Economic Capacity By Reducing To Input Cost To
            Their Vehicle and Home Appliances.
            Our Research And Develop Wing Is Sharply Focussing On Every Aspects
            Of Energy Saving And Enhancing.
          </p>
        </div>
        <br />
        <div className="product">
          <Grid item xs={6} lg={4} xl={3}>
            <Paper elevation={4}>
              <h2 className="product1">PRODUCT DETAILS</h2>
            </Paper>
          </Grid>
        </div>
        <p className="product2">
          The Present Invented Device is a Milestone in the Direction Towards
          increase in Fuel Efficiency. There Are Many Techniques and ideas
          available to do so. However By Using The Proposed Device, It is Easy
          to Increase the mileage and power of Any Gasoline Or Petrol Internal
          Combustion Engine. The Present Invention is a Milestone in the Field
          of Automobile Sector to Reduce The Effect of Greenhouse Gases and
          Pollution Level.
          <li>Two wheeler/Three wheeler Products</li>
          <li>Four wheeler Products</li>
          <li>Heavy Vehicles Products</li>
          <li>Marine Products</li>
          <li>Industrial Products</li>
        </p>

        <Grid container>
          <Grid item xs={12} lg={6} md={6}>
            <div className="image2">
              <img src={pr1} alt="about" width="50%" height="80%"></img>
            </div>
          </Grid>
          <Grid item xs={12} lg={6} md={6}>
       <Paper elevation={4}>     <h2 className="pr1">
              <b>INTAKE MANIFOLD</b>
            </h2></Paper>
            <div className="points">
              Made of Aluminium-nickel Alloy.<br/>
              Universal Adjustment Available.<br/>
              Easily Fitted In 2-Wheeler. <br/>
              Compatible with 100cc,125cc,150cc & 180cc Bikes.<br/>
              Installed At Carburetor And Combustion Chamber.
              <br/>
            </div>
          </Grid>
        </Grid>
        <br />
        <Grid container>
          <Grid item xs={12} lg={6} md={6}>
            <Paper elevation={4}><h2 className="pr1">
              <b>CYLINDRICAL SEPERATOR</b>
            </h2></Paper>
            <div className="points">
              Available In Nickel & Aluminium Material.<br/>
              Air tight Container. <br/>
              Converts Liquid Droplets Of Petrol In Gaseous State.<br/>
              Seperate Impurities Like Water & Kerosene Oil From Petrol.<br/>
              Connected With Carburetor And Throttling Devices.
            </div>
          </Grid>
          <Grid item xs={12} lg={6} md={6}>
            <div className="image2">
              <img src={pr3} alt="about" width="50%" ></img>
            </div>
          </Grid>
        </Grid>
        <br />
        <Grid container>
          <Grid item xs={12} lg={6} md={6}>
            <div className="image2">
              <br />
              <br />
              <img src={pr2} alt="about" width="50%" height="80%"></img>
            </div>
          </Grid>
          <Grid item xs={12} lg={6} md={6}>
        <Paper elevation={4}>   <h2 className="pr1">
              <b>THROTTLING DEVICE</b>
            </h2></Paper>
            <div className="points">
              Made Of Aluminium And Iron Alloy.<br/>
              To Regulate The Flow Of Gaseous Air & Petrol Mixture Into The Combustion Chamber.<br/>
              Connected With Accelerated Wire.<br/>
             Located Between Cylindrical Seperator & Combustion Chamber.
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default About;

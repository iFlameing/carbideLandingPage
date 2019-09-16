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
                Company founded on 13th June 2017 by Akash Srivastava, FLYDEX
                AUTOMOBILES is a private company that focuses on manufacturing
                products for automobiles that reduces their fuel consumption
                thus reducing pollution and providing a much greener solution to
                the Automobile Industry.
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
            To make Indian Industries highly productive by reducing power consumption through using our products in their machinery.
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
            We are proud to be a company that is focused on reducing fuel and
            energy consumption without compromising the performance of the I.C.
            engine or any kind of Rotary Motion Devices as well as making the
          emission of harmful Gases lesser so that fuel consumption is more
            environment friendly. Further we also intended to help our customer
            to enhance their economic capacity by reducing to input cost to
            their vehicle and home appliances.
            Our research and develop wing is sharply focussing on every aspects
            of energy saving and enhancing.
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
          The present invented device is a milestone in the direction towards
          increase in fuel efficiency. There are many techniques and ideas
          available to do so. However by using the proposed device, It is easy
          to increase the mileage and power of any Gasoline or petrol internal
          combustion engine. The present invention is a milestone in the field
          of Automobile sector to reduce the effect of Greenhouse Gases and
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
              Made of Aluminium-Nickel alloy.<br/>
              Universal adjustment available.<br/>
              Easily fitted in 2-wheeler. <br/>
              Compatible with 100cc,125cc,150cc & 180cc Bikes.<br/>
              Installed at carburetor and combustion chamber.
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
              Available in Nickel & Aluminium material.<br/>
              Air tight container. <br/>
              Converts liquid droplets of Petrol in Gaseous state.<br/>
              Seperate Impurities like Water & Kerosene oil from Petrol.<br/>
              Connected with Carburetor and Throttling Devices.
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
              Made of Aluminium and Iron alloy.<br/>
              To regulate the flow of Gaseous air & Petrol Mixture into the combustion chamber.<br/>
              Connected with accelerated wire.<br/>
             Located between cylindrical seperator & combustion chamber.
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default About;

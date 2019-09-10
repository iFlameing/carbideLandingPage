import React, { Component } from 'react';
import './About.css';
import fly from '../../fly.png';
import pr1 from '../../pr1.png';
import pr2 from '../../pr2.png';
import pr3 from '../../pr3.png';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
class About extends Component {
  render() {
    return (
      <div className='about'>
        <div className='heading'>
        <h1>About <span>Us</span></h1>
          <h4>“A Solution To The Energy And Environmental Crisis”.
<br/>
Let’s start revolution.</h4>
      <Grid container spacing={3}>
        
        <Grid item xs={12} lg={6} md={6}>
        <div className='image'>
          <img src={fly} alt="about" width='70%' height='60%'></img></div>
        </Grid>
        <Grid item xs={12} lg={6} md={6}>
          <br/>
          <br/>
          <Paper elevation={4}><h2 className='heading1'>ABOUT THE COMPANY</h2></Paper>
          <p className='detail'>Company Founded On 13th June 2017 By Akash Srivastava, FLYDEX
AUTOMOBILES is a private Company That Focuses On Manufacturing Products
For Automobiles That Reduces Their Fuel Consumption Thus Reducing Pollution
And Providing A Much Greener Solution To The Automobile Industry.
            </p>
        
        </Grid>
        
</Grid>
    </div>
    <div>
      <div className='mission'>
      <Grid item xs={6} lg={4} xl={3}>
      <Paper elevation={4}><h2 className='mission1'>MISSION</h2></Paper></Grid> </div>
     <div className='points'> <i className="fa fa-hand-o-right">   Develop innovative products which decrease fuel and energy
consumption.</i>
<i className="fa fa-hand-o-right">  Develop products which are compatible with I.C Engines as well as on rotatory
motion devices. </i>
<i className="fa fa-hand-o-right">  Low fuel and energy consumption to make environment less polluted and
energizing. </i>
<i className="fa fa-hand-o-right"> Increasing the engine life without affecting it’s performance.  </i>
<i className="fa fa-hand-o-right">  Develop products of superior value by focusing on the customer problems. </i>
<i className="fa fa-hand-o-right">  To make Indian Industries highly Productive By reducing Power Consumption through using our
products in their Machinery.</i>
  
    </div>
    <div className='vision'>
      <Grid item xs={6} lg={4} xl={3}>
      <Paper elevation={4}><h2 className='vision1'>VISION</h2></Paper></Grid> </div>
      <p className='vision2'>We are proud to be A Company That Is Focused On Reducing Fuel and Energy Consumption Without
Compromising The Performance Of The I. C. Engine or Any Kind of Rotary Motion Devices As Well As
Making The Emission Of Harmful Gases Lesser So That Fuel Consumption Is More Environment Friendly.
Further We Also Intended To Help Our Customer To Enhance Their Economic Capacity By Reducing To Input
Cost To Their Vehicle and Home Appliances.<br/>
Our Research And Develop Wing Is Sharply Focussing On Every Aspects Of Energy Saving And Enhancing.
            </p>
      
      </div><br/>
      <div className='product'>
      <Grid item xs={6} lg={4} xl={3}>
      <Paper elevation={4} ><h2 className='product1'>PRODUCT DETAILS</h2></Paper></Grid> </div>
      <p className='product2'>
            The Present Invented Device is a Milestone in the Direction Towards increase in
Fuel Efficiency. There Are Many Techniques and ideas available to do so. However By
Using The Proposed Device, It is Easy to Increase the mileage and power of Any
Gasoline Or Petrol Internal Combustion Engine. The Present Invention is a Milestone
in the Field of Automobile Sector to Reduce The Effect of Greenhouse Gases and
Pollution Level.
<li>Two wheeler/Three wheeler Products</li>
<li>Four wheeler Products</li>
<li>Heavy Vehicles Products</li>
<li>Marine Products</li>
<li>Industrial Products</li></p>


<Grid container spacing={3}>
  <Grid item xs={12} lg={6} md={6}>
        <div className='image'>
          <img src={pr1} alt="about" width='70%' height='60%'></img></div>
        </Grid>
        <Grid item xs={12} lg={6} md={6}>
          <br/>
          <br/>
          <h2 className='pr1'><b>INTAKE MANIFOLD</b></h2>
          <div className='points'> <i className="fa fa-arrow-right">  Made of Aluminium-nickel Alloy.</i>
<i className="fa fa-arrow-right">  Universal Adjustment Available. </i>
<i className="fa fa-arrow-right">  Easily Fitted In 2-Wheeler. </i>
<i className="fa fa-arrow-right">  Compatible with 100cc,125cc,150cc & 180cc Bikes.  </i>
<i className="fa fa-arrow-right">  Installed At Carburetor And Combustion Chamber. </i>
    </div>
        </Grid>
  </Grid><br/>
  <Grid container spacing={3}>
  <Grid item xs={12} lg={6} md={6}>
  <h2 className='pr1'><b>CYLINDRICAL SEPERATOR</b></h2>
          <div className='points'> <i className="fa fa-arrow-right">  Available In Nickel & Aluminium Material.</i>
<i className="fa fa-arrow-right">  Air tight Container. </i>
<i className="fa fa-arrow-right">  Converts Liquid Droplets Of Petrol In Gaseous State. </i>
<i className="fa fa-arrow-right">  Seperate Impurities Like Water & Kerosene Oil From Petrol.  </i>
<i className="fa fa-arrow-right">  Connected With Carburetor And Throttling Devices. </i>
    </div> 
        </Grid>
        <Grid item xs={12} lg={6} md={6}>
        <div className='image'>
          <img src={pr2} alt="about" width='70%' height='60%'></img></div>

          
        </Grid>
  </Grid><br/>
  <Grid container spacing={3}>
  <Grid item xs={12} lg={6} md={6}>
        <div className='image'>
          <br/><br/>
          <img src={pr3} alt="about" width='70%' height='60%'></img></div>
        </Grid>
        <Grid item xs={12} lg={6} md={6}>
          
          <h2 className='pr1'><b>THROTTLING DEVICE</b></h2>
          <div className='points'> <i className="fa fa-arrow-right">  Made Of Aluminium And Iron Alloy.</i>
<i className="fa fa-arrow-right">  To Regulate The Flow Of Gaseous Air & Petrol Mixture Into The Combustion Chamber. </i>
<i className="fa fa-arrow-right">  Connected With Accelerated Wire. </i>
<i className="fa fa-arrow-right">  Located Between Cylindrical Seperator & Combustion Chamber. </i>
  
    </div>
        </Grid>
  </Grid>
  </div>
    
    );
  }
}
export default About;
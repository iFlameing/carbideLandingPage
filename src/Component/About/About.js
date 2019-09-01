import React, { Component } from 'react';
import './About.css';
import fly from '../../fly.png';
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
          <p className='detail'>A Company That Is Focused On Reducing Fuel Consumption Without
Compromising The Performance Of The Engine As Well As Making The
Consumption More Environment Friendly.
            </p>
        
        </Grid>
        
</Grid>
    </div>
    <div>
      <div className='mission'>
      <Grid item xs={6} lg={4} xl={3}>
      <Paper elevation={4}><h2 className='mission1'>MISSION</h2></Paper></Grid> </div>
     <div className='points'> <i className="fa fa-hand-o-right">   Develop innovative products (like CARBADEX) which decrease fuel and energy
consumption.</i>
<i className="fa fa-hand-o-right">  Develop products which are compatible with I.C Engines as well as on rotatory
motion devices. </i>
<i className="fa fa-hand-o-right">  Low fuel and energy consumption to make environment less polluted and
energizing. </i>
<i className="fa fa-hand-o-right"> Increasing the engine life without affecting it’s performance.  </i>
<i className="fa fa-hand-o-right">  Develop products of superior value by focusing on the customer problems. </i>
<i className="fa fa-hand-o-right">  Establishing refreshing and innovative company through teamwork.</i>
  
    </div>
    <div className='vision'>
      <Grid item xs={6} lg={4} xl={3}>
      <Paper elevation={4}><h2 className='vision1'>VISION</h2></Paper></Grid> </div>
      <p className='vision2'>A Company That Is Focused On Reducing Fuel Consumption Without
Compromising The Performance Of The Engine As Well As Making The
Emission Of Harmful Gases Lesser So That Fuel Consumption Is More
Environment Friendly.
            </p>
      
      </div><br/>
      <div className='product'>
      <Grid item xs={6} lg={4} xl={3}>
      <Paper elevation={4} ><h2 className='product1'>PRODUCT DETAILS</h2></Paper></Grid> </div>
      <p className='product2'>
            The Present Inventional Device is a Milestone in the Direction Towards increase in
Fuel Efficiency. There Are Many Techniques and ideas available to do so. However By
Using The Proposed Device, It is Easy to Increase the mileage and power of Any
Gasoline Or Petrol Internal Combustion Engine. Tshe Present Invention is a Milestone
in the Field of Automobile Sector to Reduce The Effect of Greenhouse Gases and
Pollution Level.</p>
      
      </div>
      

    
    );
  }
}
export default About;
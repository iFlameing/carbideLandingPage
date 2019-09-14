import React,{Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import imgachieve from "../../imgachieve.jpg";
import './Achievements.css';
class Achievements extends Component{
    render(){
        return(
            <div className="achieve">
            <div className='achieve1'>
      <Grid item xs={6} lg={4} xl={3}>
      <Paper elevation={4}><h2 className='missiona1'>AWARDS AND RECOGNITION</h2></Paper></Grid> </div>
     
  
          <Paper elevation={4}>   <div id='myDIV'>  DIPP RECOGNIGED STARTUP (REGISTRATION NO. DIPP4505).<br /><br/>
  RECOGNISED AS A STARTUP UNDER JAMMU and KASHMIR POLICY
ON 1ST MARCH 2019 (RECOGNITION NO. 1324914395). <br /><br/>
  SMVDU-TBIC RECOGNISED STARTUP ON 13TH JUNE 2017. <br /><br/>
  3RD POSITION BEGGED IN GREEN ENERGY, STARTUP CATEGORY AT RISC 2018 AT NIRDPR, HYDERABAD.  <br/><br/>
  2ND POSITION BEGGED IN PRODUCT STAGE CATEGORY AT UP STARTUP CONCLAVE-2018, IIM LUCKNOW. <br/><br/>
 1ST POSITION AND 50 LACS INVESTMENT AGAINST 10% EQUITY SHARE (NEGOTIABLE) BEGGED AT STARTUP JALSA 4TH EDITION-2018 AT DHARMSHALA.<br/><br/>
  </div></Paper>
        
  </div>
        );
    }
}
export default Achievements;
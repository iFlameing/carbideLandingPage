import React,{Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './Achievements.css';
class Achievements extends Component{
    render(){
        return(
            <div className="achieve">
            <div className='achieve1'>
      <Grid item xs={6} lg={4} xl={3}>
      <Paper elevation={4}><h2 className='mission1'>AWARDS AND RECOGNITION</h2></Paper></Grid> </div>
     <div className='points'> <i className="fa fa-hand-o-right">  DIPP RECOGNIGED STARTUP (REGISTRATION NO. DIPP4505).</i>
<i className="fa fa-hand-o-right">  RECOGNISED AS A STARTUP UNDER JAMMU and KASHMIR POLICY
ON 1ST MARCH 2019 (RECOGNITION NO. 1324914395). </i>
<i className="fa fa-hand-o-right">  SMVDU-TBIC RECOGNISED STARTUP ON 13TH JUNE 2017. </i>
<i className="fa fa-hand-o-right">  3RD POSITION BEGGED IN GREEN ENERGY, STARTUP CATEGORY AT RISC 2018 AT NIRDPR, HYDERABAD.  </i>
<i className="fa fa-hand-o-right">  2ND POSITION BEGGED IN PRODUCT STAGE CATEGORY AT UP STARTUP CONCLAVE-2018, IIM LUCKNOW. </i>
<i className="fa fa-hand-o-right">  1ST POSITION AND 50 LACS INVESTMENT AGAINST 10% EQUITY SHARE (NEGOTIABLE) BEGGED AT STARTUP JALSA 4TH EDITION-2018 AT DHARMSHALA.</i>
  </div>
  </div>
        );
    }
}
export default Achievements;
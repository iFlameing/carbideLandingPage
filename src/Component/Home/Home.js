import React,{Component} from 'react';
import carbadex from '../../carbadex.png';
class Home extends Component{
    render(){
        return(
            <div className='img'>
          <img src={carbadex} alt="about" width='100%' height='100%'></img></div>
        );
    }
}
export default Home;
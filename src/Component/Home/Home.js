import React,{Component} from 'react';
import carbadex from '../../carbadex.jpg';
import "./Home.css";
class Home extends Component{
    render(){
        return(
            <div>
          <img src={carbadex} alt="about" className="home"></img></div>
        );
    }
}
export default Home;
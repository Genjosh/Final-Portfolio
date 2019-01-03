import React, { Component,} from 'react' 
import '../App.css';
import Navv from '../components/NavBar';
import AboutBox from '../components/AboutBox';

class About extends Component {
  render() {
    return (
      <div className="App">
      
      <Navv/>
      <br/>
      <AboutBox/>  
      </div>
      
    );
  }
}

export default About;

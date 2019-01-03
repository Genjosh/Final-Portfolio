import React, { Component,} from 'react';
import {Container, } from 'reactstrap'; 
import '../App.css';
import Navv from '../components/NavBar';
import AboutBox from '../components/AboutBox';
import MysterDiv from '../components/AboutNext';

class About extends Component {
  render() {
    return (
      <Container className="App">
      
      <Navv/>
      <br/>
      <AboutBox/> <br/> <MysterDiv/>
     
     
      </Container>
      
    );
  }
}

export default About;

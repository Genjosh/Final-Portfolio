import React, { Component, } from 'react';
import { Container,Row, Col } from 'reactstrap';
import './App.css';
import Navv from './components/NavBar';
import Tron from './components/Jumbotron';
import Projects from './components/projects';
import Recent from './components/Recent';
import './components/images/wallpaper.jpg';
import Bottom from './components/Footer';


class App extends Component {
  render() {
    return (
      <Container className="App" 
      style={{ 
        backgroundImage: './components/images/wallpaper.jpg', 
        justifyContent: 'center',
        }}>
        <Navv/>
        <br/>
        <Tron/>
        <br/>
        <wrapper>
          <Row>
            <Col><h1><strong>Projects</strong></h1></Col>
            <Col>Recent</Col>
          </Row>
          <Row>
            <Col><Projects/></Col>
            <Col><Recent/></Col>
          </Row>

        </wrapper>
        <br/>
        <Bottom/>
      </Container>

    );
  }
}

export default App;

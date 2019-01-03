import React, { Component, } from 'react';
import { Container, } from 'reactstrap';
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

        <Navv />
        <br />
        <Tron />
        <br />
        <Projects /> <Recent />
        <br />
        <Bottom />
      </Container>

    );
  }
}

export default App;

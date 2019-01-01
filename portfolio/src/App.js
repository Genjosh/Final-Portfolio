import React, { Component,} from 'react' 
import './App.css';
import Navv from './components/NavBar';
import Tron from './components/Jumbotron';
import Projects from './components/projects';
import Recent from './components/Recent';
import Contact from './pages/Contact';


class App extends Component {
  render() {
    return (
      <div className="App">
      
      <Navv/>
      <Tron/>
      <Projects/> <Recent/>
      <br/>
      <br/>
      {/* <About/> */}

      </div>
      
    );
  }
}

export default App;

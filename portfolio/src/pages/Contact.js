import React, { Component,} from 'react' 
import '../App.css';
import Navv from '../components/NavBar';
import ContactForm from '../components/ContactForm';



class Contact extends Component {
  render() {
    return (
      <div className="App">
      
      <Navv/>
      <ContactForm/>
      </div>
      
    );
  }
}

export default Contact;

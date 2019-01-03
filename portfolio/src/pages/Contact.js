import React, { Component,} from 'react';
import {Container, } from 'reactstrap';
import '../App.css';
import Navv from '../components/NavBar';
import ContactForm from '../components/ContactForm';



class Contact extends Component {
  render() {
    return (
      <Container className="App">
      
      <Navv/>
      <ContactForm/>
     
     
      </Container>
      
    );
  }
}

export default Contact;

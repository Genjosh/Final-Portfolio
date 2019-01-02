import React from 'react';
import {Container,} from 'reactstrap';
import './images/me(2).jpg';
const AboutBox = () => {
  return (
    <Container>
      <img className='float-left' src={require('./images/me(2).jpg')} style={{width:'25%'}}/>
    </Container>
  );
}

export default AboutBox;
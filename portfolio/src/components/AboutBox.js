import React from 'react';
import {Container,} from 'reactstrap';
import './images/me(2).jpg';
const AboutBox = () => {
  return (
    <Container className='info' color='primary' style={{backgroundColor:'', maxWidth:'1087.2px', alignSelf:'center'}}>
      <img className='float-left' src={require('./images/me(2).jpg')} style={{width:'15%'}} alt='Josh Romero'/>
      <div>
        <h1>A little bit about me </h1>
        <p>I have been studying code for a little over a year now, really diving deap into the fundamentals of javascript.
          
        </p>
      </div>
    </Container>
  );
}

export default AboutBox;
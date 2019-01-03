import React from 'react';
import './images/me(2).jpg';
const AboutBox = () => {
  return (
    <wrapper className='info' color='primary' style={{backgroundColor:'#333', maxWidth:'1087.2px', alignSelf:'center'}}>
      <img className='photo' 
      src={require('./images/me(2).jpg')} 
      style={{
        width:'15%',
        }} 
        
      alt='Josh Romero'/>
      <div className='about' 
      style={{
          backgroundColor:'#6180BE'
      }}>
        <h1><strong>A little bit about me</strong> </h1>
        <p><span> I have been studying code for a little over a year now, really diving deap into the fundamentals of javascript.
        I can't lie to anyone when I say I am still learning every day, but I think any Developer would agree that it never
        stops. I take pride in everything I do, it has always been my sense of nature.
        For my past time, it mostly consists of side work projects, and casual at home things.
        <br/>
                  I also have a part time job working at a cannabis dispensary, which I enjoy very much.
        Although it is part time it is an awesome place that I take pride in just like Web Development</span>
        </p>
      </div>
    </wrapper>
  );
}

export default AboutBox;
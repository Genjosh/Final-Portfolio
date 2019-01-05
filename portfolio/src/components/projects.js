import React from 'react';

import {Container, Row, Col, Button} from 'reactstrap';

class Projects extends React.Component {
    render() {

function ProjectName (props){
     return(
          <h3>{props.name}</h3>
     )
 }

 function Descriptions(props){
      return(
           <p>{props.descriptions}</p>
      )
 }
 

return(
     <Container>  
          <wrapper> 
          <Row>
               <Col><strong><ProjectName 
               class='first project'
               name='Project-2'
               /></strong></Col>
          </Row>
          <Row>
               <Col>
               <Descriptions
               descriptions='Although this app is not fully complete, 
                              I am proud to say that the back end is
                              complete. I worked very hard using Mongodb, express,
                              and standard node.js to assist me with building
                              the back-end. I am now very proficient at the front end
                              as well so I will have to collaborate with my fellow
                              devmates reguarding the topic.'
               />
               <br/>
               <Button 
               className='button' 
               href='https://github.com/farmuss/Project-2' 
               alt='Click me to view repo!!'>Click me to view repo</Button>
               </Col>
          </Row>
          </wrapper>

     </Container>
          );
     }
};





export default Projects;


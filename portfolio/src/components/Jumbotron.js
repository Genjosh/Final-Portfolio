import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Tron = () => {
  return (
    <div>
      <Jumbotron background-color="dark">
        <h1 className="display-3">Welcome!</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>My work is my pride, I love creating and never want to stop building. Here is some of my work feel free to check it out.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Tron;
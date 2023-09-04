import React from 'react';
import TrafficLight from './TrafficLight';
import './styles.css';
import TodoList from './TodoList';

const config = {
  red: {
    backgroundColor: 'red',
    duration: 4000,
    next: 'green',
  },
  yellow: {
    backgroundColor: 'yellow',
    duration: 500,
    next: 'red',
  },
  green: {
    backgroundColor: 'green',
    duration: 3000,
    next: 'yellow',
  },
};

const About = () => {
  return (
    <div className ="about-container">
      <div classname="wrapper">
      <TrafficLight config={config} />
      </div>
      <div classname="wrapper">
      <TodoList />
      </div>
      <div classname="wrapper">
      <TrafficLight config={config}/>
      </div>
    </div>
  );
};
export default About;
import React from 'react';
import TrafficLight from './TrafficLight';
import './styles.css';
import logo from './pdf.png';
import resume from './SweetyMahaleWebDeveloper.pdf';

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
      <div className="wrapper">
      <p>Click to download resume <a href={resume} target="_blank"> <img src={logo}  alt="logo" /> </a></p>
        <span className="about-info">  
          <p>Summary of Qualification </p>
          <p>
          - Around 8+ years’ experience in developing professional web applications which include Front-End hand coding with solid proficiency in usability, web and client application using HTML, CSS, jQuery, JavaScript, TypeScript, React, Context API, Mobx and Redux.
          </p>
          <p>
          - Having years of experience in developing web UI applications using JavaScript, React.JS, REDUX, JQuery, AJAX, GraphQL, PHP, Node JS, HTML, CSS, Bootstrap, GraphQL, JSON and XML, Babel, Jenkins, Docker.
          </p>
          <p>
          - Experience in developing the back end applications using Node.js, Babel, Java 8, Spring Boot, Microservices, MEAN/ MERN, and MySQL, MongDB, Firebase.
          </p>
          <p>
          - Experienced in database systems like MySQL and NOSQL Databases like MongoDB. 
          </p>
          <p>
          - Strong in computer science concepts algorithms, data structure and worked in various phases of SDLC using the Agile methodologies.
            AWS environment, building CI/CD pipeline, deployment of the code, log monitoring.
          </p>
          <p>
          - Experience in implementing Responsive web design and Single Page Applications (SPA). 
          </p>
          <p>
          - Experience with middleware using Redux-Thunk, Redux-Saga, Redux-Logger, Universal React Redux. Expertise in React JS framework to develop the SPA. 
          </p>
          <p>
          - Expertise in using Middleware, Redux-Promise in application to retrieve data from Back-End and to also perform RESTFUL services.
          </p>
        </span>
    </div>    
    </div>
  );
};
export default About;
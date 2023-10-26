import React from "react"
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import TrafficLight from './TrafficLight';
import './styles.css';
import TodoList from './TodoList';
import ContactForm from './ContactForm';
import DragnDrop from "./DragnDrop";
import Windowing from './Windowing/Windowing'

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

export default function Home() {
  return (
    <div className="container">
      <span className="home-intro">
        <span className="home-header">Welcome! </span>
        <p>I am Sweety Mahale, I have overall 8+ years of professional experience in Software Development focusing on the Web technologies.
        </p>
        <p>
          My skills set are Java, Spring boot, React.js, Javascript, PHP, HTML5, CSS3, SASS, LESS, Bootstrap, Jenkins, Docker, MySQL, Oracle, Postgres, AWS,
        </p>
        <p>
          I am interested in working on the latest technologies, using my skills and knowledge imporove the performance of application.
        </p>
        <p>
          More content coming soon...
        </p>
      </span>
      <Row gutter={40} justify="left" align="bottom">
        <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }}> <div className="wrapper example-header">Drag and Drop<DragnDrop /></div></Col>
      </Row>
      <Row gutter={40} justify="left" align="bottom">
        <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }}> <div className="wrapper example-header">Traffic Signal<TrafficLight config={config} /></div></Col>
      </Row>
      <Row gutter={40} justify="left" align="bottom">
        <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }}> <div className="wrapper example-header">ToDo List<TodoList /></div></Col>
      </Row>
      <Row gutter={40} justify="left" align="bottom">
        <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }}> <div className="wrapper example-header">Contact Form<ContactForm /></div></Col>
      </Row>
      <Row gutter={40} justify="left" align="bottom">
        <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }}> <div className="wrapper example-header"><Windowing /></div></Col>
      </Row>
    </div>
  )
}
import React from "react"
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import TrafficLight from './TrafficLight';
import './styles.css';
import TodoList from './TodoList';
import ContactForm from './ContactForm';

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
                I am interested in working on the latest technologies, using my skills and knowledge imporove the performance of application.
            </p>
        </span>
        <Row gutter={40} justify="left" align="bottom">
          <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 6 }} lg={{ span: 6 }} xl={{ span: 6 }}> <div className="wrapper example-header" >Traffic Signal<TrafficLight config={config} /></div></Col>
          <Col  xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 6 }}lg={{ span: 6 }} xl={{ span: 6 }}> <div className="wrapper example-header">ToDo List<TodoList/></div></Col>
        </Row>
        <Row gutter={40} justify="left" align="bottom">
          <Col  xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 6 }}lg={{ span: 6 }} xl={{ span: 6 }}> <div className="wrapper example-header">Contact Form<ContactForm /></div></Col>
        </Row>
    </div>
    
  )
}
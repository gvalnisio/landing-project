import './App.css';
import React , { useState } from "react"
import Calendar from 'react-calendar'
import Weather from './Components/Weather/Weather';
import Header from './Components/Header/Header'
import ToDo from './Components/To-Do/To-Do';
import Facts from "./Components/Facts/Facts"

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function App() {
  const [value, setValue] = useState(new Date());

  function onChange(nextValue) {
    setValue(nextValue);
  }
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <div className='principal'>
          <div>
            <ToDo />
          </div>
          <Container className='lateral'>
            <Row className='weather'> <Weather/> </Row>
            <Row>
              <Col className='facts'> <Facts/> </Col>
            </Row>
            <Row className='container-calendario'>
              <Col className='calendario'>
                Calendar
              </Col>
              <Calendar 
              onChange={onChange}
              value={value}
              />
            </Row>
          </Container>
        </div>  
      </div>      
    </div>
  );
}
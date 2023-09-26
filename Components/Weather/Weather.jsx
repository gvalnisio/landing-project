import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Weather.css'

const Weather = () => {

    const [lat, setLat] = useState([])
    const [long, setLon] = useState([])

    const search = async () => {
        
        navigator.geolocation.getCurrentPosition(function(position) {
            setLat(position.coords.latitude)
            setLon(position.coords.longitude)
        })
    
        let url = `https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&appid=66a8062ca9f2d7401b6ebd96e1f48920`
    
        let response = await fetch(url)
        let data = await response.json()
        console.log(data)
        
        const humidity = document.getElementsByClassName('humidity')
        const wind = document.getElementsByClassName('wind-speed')
        const temperature = document.getElementsByClassName('temperature')
        const location = document.getElementsByClassName('city')
        const description = document.getElementsByClassName('weather-description')

        humidity[0].innerHTML = data.main.humidity+'%'
        wind[0].innerHTML = Math.floor(data.wind.speed)+' km/h'
        temperature[0].innerHTML = Math.floor(data.main.temp)+' ºC'
        location[0].innerHTML = data.name
        description[0].innerHTML = data.weather[0].main
    }

    search()

    return (
        <Container fluid className="weather-box">
            <Row>
                <Col>
                <div className="city">Rio de Janeiro</div>
                <img src="" alt="" className="weather-icon" /></Col>
            </Row>
            <Row>
                <div className="temperature">23 ºC</div>
                <div className="weather-description">Cloudy</div>
            </Row>
            <Row>
               <Col><div className="humidity">60%</div></Col> 
               <Col><div className="wind-speed">14 km/h</div></Col>
            </Row>
        </Container>
    )

}

export default Weather
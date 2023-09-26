import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import './Weather.css'

import clear_icon from '../Assets/clear.png'
import cloud_icon from '../Assets/clouds.png'
import drizzle_icon from '../Assets/drizzle.png'
import humidity_icon from '../Assets/humidity.png'
import rain_icon from '../Assets/rain.png'
import snow_icon from '../Assets/snow.png'
import wind_icon from '../Assets/wind.png'

const Weather = () => {

    const [lat, setLat] = useState([])
    const [long, setLon] = useState([])
    const [wicon, setWicon] = useState(cloud_icon)
    

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

        if(data.weather[0].icon === '01d' || data.weather[0].icon === '01n') {
            setWicon(clear_icon)
        } else if (data.weather[0].icon === '02d' || data.weather[0].icon === '02n') {
            setWicon(cloud_icon)
        } else if (data.weather[0].icon === '03d' || data.weather[0].icon === '03n') {
            setWicon(drizzle_icon)
        } else if (data.weather[0].icon === '04d' || data.weather[0].icon === '04n') {
            setWicon(drizzle_icon)
        } else if (data.weather[0].icon === '09d' || data.weather[0].icon === '09n') {
            setWicon(rain_icon)
        } else if (data.weather[0].icon === '10d' || data.weather[0].icon === '10n') {
            setWicon(rain_icon)
        } else if (data.weather[0].icon === '13d' || data.weather[0].icon === '13n') {
            setWicon(snow_icon)
        } else {
            setWicon(clear_icon)
        }
    }

    search()

    return (
        <Container fluid className="weather-box">
            <div className="city">Rio de Janeiro</div>
            
            <div className="weather-container">
                <div className="weather-icon-temp">
                    <div >
                        <img src={wicon} alt="" className="weather-icon" />
                    </div>
                    <div>
                        <div className="temperature">23 ºC</div>
                        <div className="weather-description">Cloudy</div>
                    </div>
                </div>
                <div className="weather-humid-wind">
                    <div className="weather-humid">
                        <img src={humidity_icon} alt="" />
                        <div className="humidity">60%</div>
                    </div>
                    <div className="weather-wind">
                        <img src={wind_icon} alt="" />
                        <div className="wind-speed">14 km/h</div>
                    </div>
                    
                </div>
            </div>
        </Container>
    )

}

export default Weather
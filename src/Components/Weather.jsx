import React, { useState } from "react";

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
        
        const humidity = document.getElementsByClassName('humidity')
        const wind = document.getElementsByClassName('wind-speed')
        const temperature = document.getElementsByClassName('temperature')
        const location = document.getElementsByClassName('city')


    }

    search()

    return (
        <div className="weather-box" onLoad={() => {search()}}>
            <div className="weather-main">
                <div className="city">London</div>
                <div className="temperature">23 ºC</div>
            </div>
        <div className="weather-extras">
            <div className="humidity">69%</div>
            <div className="wind-speed">4 km/h</div>
        </div>
    </div>
    )

}

export default Weather
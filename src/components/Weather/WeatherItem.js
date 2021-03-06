import React, { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';
import API from "../../config/api";
import { ApiKey, REACT_APP_ICON_URL } from '../../config/apiKey';
import ReactCountryFlag from "react-country-flag"
import { Link } from 'react-router-dom';

const WeatherItem = ({ lat, lon }) => {
    const [weather, setWeather] = useState("");

    const handleWeatherSearch = async (lat, lon) => {
        await API.get(`data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${ApiKey}`)
            .then((res) => {
                if (res.status === 200) {
                    setWeather(res.data);
                }
            });
    };

    useEffect(() => {
        handleWeatherSearch(lat, lon);
    }, []);

    return (
        <>
            {weather
                ? (<section className='weatherItem'>
                    <img src={REACT_APP_ICON_URL + weather.weather[0].icon + ".png"} alt="Weather Icon" />
                    <div>
                        <article>
                            <Link to={`/weatherDetails/:${weather.coord.lat}/:${weather.coord.lon}`}>
                                {weather.name},{weather.sys.country}
                            </Link>
                            <span className='flag'>
                                <ReactCountryFlag countryCode={weather.sys.country === "XK" ? weather.sys.country = "RS" : weather.sys.country}
                                    svg
                                    cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                                    cdnSuffix="svg"
                                    title={weather.sys.country} />
                            </span>
                            <span>
                                {weather.weather[0].description}
                            </span>
                        </article>
                        <article>
                            <span className='temp'>{weather.main.temp}°C,</span>
                            <span> temperature from {weather.main.temp_min}°C to {weather.main.temp_max}°C, wind {weather.wind.speed} m/s, {weather.main.pressure} hpa</span>
                        </article>
                        <p className='geoCoords'> Geo coords <span>[{weather.coord.lat} , {weather.coord.lon}]</span></p>
                    </div>
                </section>)
                : <Loading />}

        </ >);
}

export default WeatherItem;
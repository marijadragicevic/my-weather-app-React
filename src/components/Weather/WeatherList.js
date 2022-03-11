import React from 'react';
import WeatherItem from './WeatherItem';
import { v4 as uuidv4 } from "uuid"


const WeatherList = ({ data }) => {
    console.log(data);
    // console.log(weather.list[2].weather[0].icon);
    return (<div className="weatherHome">
        {data.map(item => (
            // console.log(typeof item.lon, item.lat)
            <WeatherItem lat={item.lat} lon={item.lon} key={uuidv4()} />
            // console.log(item.name);
        ))}

        {/* <WeatherItem /> */}
        {/* <img src={REACT_APP_ICON_URL + weather.weather[0].icon + ".png"} />
        <div>
            <p>
                <Link to={`/weatherDetails/:${weather.coord.lat}/:${weather.coord.lon}`}>
                    {weather.name},{weather.sys.country}
                </Link>
                <span>
                    <ReactCountryFlag countryCode={weather.sys.country === "XK" ? weather.sys.country = "RS" : weather.sys.country}
                        svg
                        cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                        cdnSuffix="svg"
                        title={weather.sys.country} />
                    {weather.weather[0].description}
                </span>
            </p>
            <p>
                <span>{weather.main.temp}°C,</span>
                <span> temperature from {weather.main.temp_min}°C to {weather.main.temp_max}°C, wind {weather.wind.speed} m/s, {weather.main.pressure} hpa</span>
                <span>  </span>
            </p>
            <p>
                Geo coords <span>[{weather.coord.lat}, {weather.coord.lon}]</span>
            </p>
        </div> */}
    </div>)

}

export default WeatherList;
import React from 'react';
import WeatherItem from './WeatherItem';
import { v4 as uuidv4 } from "uuid"


const WeatherList = ({ data }) => {
    return (<div className="weatherList">
        {data.map(item => (
            <WeatherItem lat={item.lat} lon={item.lon} key={uuidv4()} />
        ))}
    </div>)

}

export default WeatherList;
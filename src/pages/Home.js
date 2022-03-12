import React, { useEffect, useState } from "react";
import API from "../config/api";
import { ApiKey } from "../config/apiKey";
import Search from "../components/Search/Search";
import WeatherList from "../components/Weather/WeatherList";
import Error from "../components/Error/Error";

const Home = () => {
    const [data, setData] = useState([]);

    const handleCitySearch = async (city) => {
        let d = await API.get(`geo/1.0/direct?q=${city}&limit=5&units=metric&appid=${ApiKey}`);
        setData(d.data);
    };

    useEffect(() => {
        handleCitySearch(city);
    }, []);

    return (
        <div className="home">
            <Search handleCitySearch={handleCitySearch} />

            {data.length !== 0
                ? <WeatherList data={data} />
                : <Error />}

        </div>);
};

export default Home;

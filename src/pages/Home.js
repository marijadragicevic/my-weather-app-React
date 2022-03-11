import React, { useEffect, useState } from "react";
import API from "../config/api";
import { ApiKey } from "../config/apiKey";
import Search from "../components/Search/Search";
import WeatherList from "../components/Weather/WeatherList";

const Home = () => {
    const [data, setData] = useState([]);

    const handleCitySearch = async (city) => {
        let d = await API.get(`geo/1.0/direct?q=${city}&limit=5&units=metric&appid=${ApiKey}`)
        console.log(d);
        setData(d.data);
    };
    // console.log(data);
    useEffect(() => {
        handleCitySearch("Krusevac");
    }, []);

    return (
        <div className="home">
            <Search handleCitySearch={handleCitySearch} />
            <WeatherList data={data} />

        </div>
    );
};

export default Home;

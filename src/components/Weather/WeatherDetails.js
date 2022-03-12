import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import API from "../../config/api";
import { ApiKey, REACT_APP_ICON_URL } from '../../config/apiKey';
import ReactCountryFlag from "react-country-flag";
import Loading from '../Loading/Loading';


const WeatherDetails = () => {
    const { lat, lon } = useParams();
    const [info, setInfo] = useState("");

    const navigate = useNavigate();
    const handleBackButton = () => {
        navigate("/");
    }

    const getData = async () => {
        await API.get(`data/2.5/forecast?lat=${lat.slice(1)}&lon=${lon.slice(1)}&units=metric&appid=${ApiKey}`)
            .then((result) => {
                if (result.status === 200) {
                    setInfo(result.data);
                }
            });
    }

    useEffect(() => {
        getData();
    }, []);

    return (<section className='container'>

        {info ?
            (<h2>{info.city.name}, {info.city.country}
                <ReactCountryFlag
                    countryCode={info.city.country === "XK" ? info.city.country = "RS" : info.city.country}
                    svg
                    cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                    cdnSuffix="svg"
                    title={info.city.country} />
            </h2>)
            : <Loading />}

        <div className='cards'>
            {info
                ? info.list.filter((li, index) => index % 2 === 0)
                    .map(li =>
                    (<article className='timeWeather' key={uuidv4()}>
                        <p className='date' key={uuidv4()}>
                            {li.dt_txt.slice(0, 10)}.
                        </p>
                        <p className='time'>{li.dt_txt.slice(10, 16)} h</p>
                        <img src={REACT_APP_ICON_URL + li.weather[0].icon + ".png"} alt="Weather icon" />
                        <p className='temperature'>temp {li.main.temp} °C </p>
                    </article>)
                    )
                : <Loading />}
        </div>
        <button onClick={handleBackButton}> Go Back</button>
    </section>);

}

export default WeatherDetails;
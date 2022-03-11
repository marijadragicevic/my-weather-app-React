import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import API from "../../config/api";
import { ApiKey, REACT_APP_ICON_URL } from '../../config/apiKey';

const WeatherDetails = () => {
    // treba ju mi svi podaci o vremenu;onaj api poziv mi vraca samo informacije o gradu
    const { lat, lon } = useParams();
    const [info, setInfo] = useState([]);

    const navigate = useNavigate();

    const handleBackButton = () => {
        navigate("/");
    }
    const getData = async () => {
        await API.get(`data/2.5/forecast?lat=${lat.slice(1)}&lon=${lon.slice(1)}&appid=${ApiKey}`)
            .then((result) => {
                if (result.status === 200) {
                    setInfo(result.data);
                }
            })
    }

    useEffect(() => {
        getData();
    }, []);


    return (<div className='container'>
        {info.length !== 0 ?
            // console.log(info.list)
            (<div className='card'>
                <img src={REACT_APP_ICON_URL + info.list[0].weather[0].icon + ".png"} />
            </div>)
            : "Loading"}


        <button onClick={handleBackButton}>back</button>
    </div>);
}
export default WeatherDetails;
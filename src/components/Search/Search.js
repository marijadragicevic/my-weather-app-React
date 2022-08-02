import React, { useState } from 'react';

const Search = ({ handleCitySearch }) => {
    const [city, setCity] = useState("");

    const handleChange = e => {
        setCity(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        handleCitySearch(city);
        setCity("");
    }

    return (
        <form className='searchForm' onSubmit={handleSubmit}>
            <input type="text" value={city} placeholder='Enter the name of the city' onChange={handleChange} required />
            <input type="submit" />
        </form>);
}

export default Search;
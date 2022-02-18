import React from 'react';
import'./Country.css';

const Country = (props) => {
    const {name, capital, flag, population, region} = props.country;
    return (
        <div className="country">
            <h2> Country Name: {name}</h2>
            <img src={flag} alt="flag" />
            <p><small>Region: {region}</small></p>
            <p>Capital : {capital}</p>
            <p>Population : {population}</p>
        </div>
    );
};

export default Country;
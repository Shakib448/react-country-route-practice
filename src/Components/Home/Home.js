import React from 'react'
import {useState} from 'react';
import {useEffect} from 'react';
import Axios from 'axios';
import CountryFound from '../CountryFount/CountryFound';

const Home = () => {

    const [country,
        setCountry] = useState([]);

    useEffect(() => {

        const fetchedCountry = async() => {
            try {
                const res = await Axios.get('https://restcountries.eu/rest/v2/all')
                const data = res.data;
                setCountry(data);
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchedCountry();
    }, [])

    return (
        <div>
            <div className="text-center">
            <h1>Total Country : {country.length}</h1>
            </div>
            <div className="container">
                <div className="row">
                    {country.map((countries) => <CountryFound key={countries.alpha2Code} countries={countries}/>)
}
                </div>
            </div>

        </div>
    )
}

export default Home;

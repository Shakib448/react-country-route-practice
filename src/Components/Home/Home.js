import React from 'react'
import {useState} from 'react';
import {useEffect} from 'react';
import Axios from 'axios';
import CountryFound from '../CountryFount/CountryFound';

const Home = () => {

    const [country,
        setCountry] = useState([{}]); // Try to console log and look at the data

    const lData = country[0];
    const {name} = lData; // This method is use for use loading......


    //Same as the countryDetails.............

    useEffect(() => {

        const fetchedCountry = async() => {
            try {
                const res = await Axios.get('https://restcountries.eu/rest/v2/all')
                const data = res.data;
                setCountry(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchedCountry();
    }, [])

    if(!name){
        return <div className="text-center"><p>Loading.......</p></div>;
    }

    return (
        lData ? ( 
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
        ): null
    )
}

export default Home;

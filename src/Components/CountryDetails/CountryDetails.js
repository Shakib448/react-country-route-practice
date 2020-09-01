import React, {useState, useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom';
import Axios from 'axios';

const CountryDetails = () => {

    let {name} = useParams();

    let history = useHistory();

    const handleBack = () => {
        history.push('/')
    }

    const [countryDetail,
        setCountryDetail] = useState([{}]);

    const [money,
        setMoney] = useState([]);

    const [languages,
        setLanguages] = useState([]);

    const showData = countryDetail[0];

    const {capital, flag, population, region} = showData;

    useEffect(() => {

        const fetchCountryDetail = async() => {
            try {
                const url = `https://restcountries.eu/rest/v2/name/${name}`;
                const res = await Axios.get(url)
                const data = res.data;
                const money = res.data[0].currencies[0].name;
                const languages = res.data[0].languages[0].name
                setLanguages(languages)
                setMoney(money)
                setCountryDetail(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchCountryDetail();

    }, [])

    if(!population){
        return <div className="text-center"><p>Loading.......</p></div>;
    }

    return (
        showData ? ( 
        <div className="container m4">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="detail text-center">
                        <div className="card">
                            <img src={flag} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Name of : {name}</h5>
                                <h5 className="card-title">Capital of : {capital}</h5>
                                <h5 className="card-title">Population : {population}</h5>
                                <h5 className="card-title">Region : {region}</h5>
                                <h5 className="card-title">Currency : {money}</h5>
                                <h5 className="card-title">Language : {languages}</h5>
                                <button className='btn btn-primary' onClick={handleBack}>Go Back</button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
        ) : null
    )
}

export default CountryDetails;

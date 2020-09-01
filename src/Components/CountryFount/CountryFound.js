import React from 'react'
import {useHistory} from 'react-router-dom';
import './Style.css'

const CountryFound = (props) => {
    const {name, flag} = props.countries;

    let history = useHistory();

    const handleCountry = (name) => {
        const url = `/country/details/${name}`
        history.push(url)
    }


    return (

        <>
            <div className="col-md-4">
                <div className="card">
                    <img src={flag} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <button className="btn btn-primary" onClick={() => handleCountry(name)}>More Information</button>
                    </div>
                </div>
            <br/>
            </div>
        </>


    )
}

export default CountryFound;

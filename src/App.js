import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Country from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import CountryDetails from './Components/CountryDetails/CountryDetails';

function App() {
  return (
    <>
      <Router>
          <Switch>
            <Route exact path='/' component={Country} />
            <Route exact path='/home' component={Country} />
            <Route exact path='/country/details/:name' component={CountryDetails}/>
            <Route exact path='*' component={NotFound}  />
          </Switch>
      </Router>
    </>
  );
}

export default App;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCountries } from '../redux/country/countrySlice';
import { selectSearchTerm } from '../redux/searchbox/searchboxSlice';

function Countries() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.countries);
  const loading = useSelector((state) => state.countries.loading);
  const error = useSelector((state) => state.countries.error);
  const searchTerm = useSelector(selectSearchTerm);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const filteredCountries = countries.filter(
    (country) => country.name.common.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  if (loading) {
    return (<div>Loading ...</div>);
  } if (error) {
    return (<div>{error.message}</div>);
  }
  return (
    <div className="container">
      <h1 className="header">List of Countries</h1>
      <div className="countriesContainer">
        {filteredCountries.map((country) => (
          <div className="countryContainer" key={country.name.common}>
            <img src={country.flags.svg} alt={country.flags.alt} className="flag" />
            <span className="commonName">
              Common Name:
              {' '}
              {country.name.common}
            </span>
            <span className="capitalName">
              Capital Name:
              {' '}
              {country.capital}
            </span>
            <span className="population">
              Population:
              {' '}
              {country.population}
            </span>
            <Link to={`/country/${country.name.common}`} className="link">More info</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Countries;

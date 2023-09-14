import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchCountries } from '../redux/country/countrySlice';

function CountryDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.countries);
  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  // Check if countries is not null and has data
  if (!countries || countries.length === 0) {
    return (
      <div className="countryDetailsContainer">
        <h1>Country Details</h1>
        <p>Loading...</p>
      </div>
    );
  }

  const theCountry = countries.find((country) => country.name.common === id);

  if (!theCountry) {
    return (
      <div className="countryDetailsContainer">
        <Link to="/">
          <img src="https://img.icons8.com/ios/30/circled-left-2.png" alt="circled-left-2" title="turn back" />
        </Link>
        <h1>Country Details</h1>
        <p>Country not found</p>
      </div>
    );
  }

  return (
    <div className="countryDetailsContainer">
      <Link to="/">
        <img src="https://img.icons8.com/ios/30/circled-left-2.png" alt="circled-left-2" title="turn back" />
      </Link>
      <h1>Country Details</h1>
      <img src={theCountry.flags.svg} alt="country flag" className="flag" />
      <table className="countryDetailsTable">
        <thead className="tableHead">
          <tr>
            <th>Country Name</th>
            <th>{theCountry.altSpellings[2] || theCountry.altSpellings[1]}</th>
          </tr>
        </thead>
        <tbody className="tableBody">
          <tr>
            <td className="label">Area(km2)</td>
            <td className="value">{theCountry.area}</td>
          </tr>
          <tr>
            <td className="label">Capital</td>
            <td className="value">{theCountry.capital}</td>
          </tr>
          <tr>
            <td className="label">Population</td>
            <td className="value">{theCountry.population}</td>
          </tr>
          <tr>
            <td className="label">Time Zone</td>
            <td className="value">{theCountry.timezones}</td>
          </tr>
          <tr>
            <td className="label">Start of the week</td>
            <td className="value">{theCountry.startOfWeek}</td>
          </tr>
          <tr>
            <td className="label">Official Language</td>
            <td className="value">{Object.values(theCountry.languages)}</td>
          </tr>
          <tr>
            <td className="label">Currency Symbol</td>
            <td className="value">{Object.keys(theCountry.currencies)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCountries } from '../redux/home/homeSlice';
import {
  getCountryDetail,
  countrySelectedAction,
} from '../redux/country/countrySlice';
import Search from './Searchbar';
import Population from './Population';
import Nav from './Navbar';
import Footer from './Footer';
import CircleArrow from '../assets/icons/circle-arrow-right-solid.svg';
import './Home.css';

const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.country.countriesData);
  const searchField = useSelector((state) => state.country.searchResult);
  const status = useSelector((state) => state.country.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getCountries());
    }
  }, [status, dispatch]);

  const filteredCountries = () => {
    if (searchField.length > 0) {
      return countries.filter((country) => country.name.toLowerCase()
        .includes(searchField.toLowerCase()));
    }
    return countries;
  };

  const onCardHandler = (e) => {
    dispatch(getCountryDetail(e.target.id));
    dispatch(countrySelectedAction(e.target.id));
  };

  return (
    <div className="home_containter">
      <Nav />
      <Population />
      <Search />
      <div className="country_grid">
        {
        filteredCountries().length > 0 ? (
          filteredCountries().map((country) => (
            <div className="card_column" key={country.name}>
              <Link
                to={`/countrydetail/${country.id}`}
                id={country.name}
                onClick={(e) => { onCardHandler(e); }}
                className="card_link"
              >
                <button type="button" id={country.name} className="arrow_link">
                  <img src={CircleArrow} id={country.name} alt="Circle Arrow" />
                </button>
                <div id={country.name} className="mapgrid_image">
                  <img
                    id={country.name}
                    src={country.map}
                    alt={country.cca2}
                  />
                </div>
                <div id={country.name} className="country_text">
                  <h1 id={country.name}>{country.name}</h1>
                  <p id={country.name}>{country.capital}</p>
                </div>
              </Link>
            </div>

          ))
        ) : (
          <h1 className="country_text_zero">Country not found, please try again!</h1>
        )
}
      </div>
      <Footer />
    </div>
  );
};

export default Home;

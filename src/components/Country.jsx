import React from 'react';
import { useSelector } from 'react-redux';
import rightArrow from '../assets/icons/circle-arrow-right-solid.svg';
import Footer from './Footer';
import NavDetail from './NavDetails';
import './Country.css';

const CountryDetail = () => {
  const country = useSelector((state) => state.countryDetail.detailCountry);
  return (
    <div className="country_detail_body">
      <NavDetail />
      {country.length > 0 ? (
        <div>
          <div className="country_detail_header_box">
            <div className="country_detail_header_box_map">
              <img src={country[0].map} alt="" />
            </div>
            <div className="country_detail_header_box_text">
              <h1>{country[0].name}</h1>
              <p>
                {' '}
              </p>
            </div>
          </div>
          <h2 className="country_overview_headline">Overview</h2>
          <div className="country_detail_overview_box">
            <div className="country_detail_overview_box_text">
              <h3>Area</h3>
              <p>
                {country[0].area.toLocaleString('en-US')}
                {' '}
                km
              </p>
              <button type="button">
                <img src={rightArrow} alt="Right Arrow" />
              </button>
            </div>
            <div className="country_detail_overview_box_text color_black">
              <h3>Population</h3>
              <p>
                {country[0].population.toLocaleString('en-US')}
                {' '}
              </p>
              <button type="button">
                <img src={rightArrow} alt="Right Arrow" />
              </button>
            </div>
            <div className="country_detail_overview_box_text">
              <h3>Coat of Arms</h3>
              <img
                className="country_coat_of_arms"
                src={country[0].coatOfArms}
                alt={`${country[0].name} Coat of Arms`}
              />
              <button type="button">
                <img src={rightArrow} alt="Right Arrow" />
              </button>
            </div>
            <div className="country_detail_overview_box_text color_black">
              <h3>Flag</h3>
              <img
                className="country_flag"
                src={country[0].flag}
                alt={`${country[0].name} Flag`}
              />
              <button type="button">
                <img src={rightArrow} alt="Right Arrow" />
              </button>
            </div>
            <div className="country_detail_overview_box_text">
              <h3>Capital</h3>
              <p>{country[0].capital}</p>
              <button type="button">
                <img src={rightArrow} alt="Right Arrow" />
              </button>
            </div>
            <div className="country_detail_overview_box_text color_black">
              <h3>Continent</h3>
              <p>{country[0].continents}</p>
              <button type="button">
                <img src={rightArrow} alt="Right Arrow" />
              </button>
            </div>
            <div className="country_detail_overview_box_text">
              <h3>Timezone</h3>
              <p>{country[0].timezones}</p>
              <button type="button">
                <img src={rightArrow} alt="Right Arrow" />
              </button>
            </div>
            <div className="country_detail_overview_box_text color_black">
              <h3>Code</h3>
              <p>{country[0].fifa}</p>
              <button type="button">
                <img src={rightArrow} alt="Right Arrow" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <h1 className="error_back">Error, please go back! </h1>
      )}
      <Footer />
    </div>
  );
};

export default CountryDetail;

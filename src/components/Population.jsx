import React from 'react';
import { useSelector } from 'react-redux';
import './Population.css';

const Population = () => {
  const countries = useSelector((state) => state.country.countriesData);
  const totalPopulation = () => {
    const total = countries.map((country) => country.population).reduce((a, b) => a + b);
    const formatter = total.toLocaleString('en-US');
    return formatter;
  };

  return (
    <div className="population">
      <div className="population_img_box">
        <img className="world_img" src="https://svgsilh.com/svg/306338.svg" alt="World Map" />
      </div>
      <div className="center_line" />
      <div className="population_text">
        <h1>Population</h1>
        <p>
          {countries.length > 0 ? totalPopulation() : 'Loading, please wait!'}
          {' '}
        </p>
      </div>
    </div>
  );
};

export default Population;

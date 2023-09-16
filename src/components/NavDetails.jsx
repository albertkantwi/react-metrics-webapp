import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import arrowLeft from '../assets/icons/angle-left-solid.svg';
import micro from '../assets/icons/microphone-solid.svg';
import gear from '../assets/icons/gear-solid.svg';
import './NavDetails.css';

const NavDetail = () => {
  const countrySelected = useSelector(
    (state) => state.countryDetail.countrySelected,
  );

  return (
    <>
      <nav className="nav_container">
        <Link to="/" className="block_display">
          <img src={arrowLeft} alt="Angle Left Arrow" className="arrow_logo" />
        </Link>
        <span className="navtext_center">
          Details of
          {' '}
          {countrySelected}
          {' '}
          {' '}
        </span>

        <div className="navbox">
          <button type="button">
            <img src={micro} alt="Microphone" />
          </button>
          <button type="button">
            <img src={gear} alt="Gear" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavDetail;

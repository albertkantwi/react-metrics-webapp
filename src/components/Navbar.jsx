import React from 'react';
import micro from '../assets/icons/microphone-solid.svg';
import gear from '../assets/icons/gear-solid.svg';
import logo from '../assets/images/logo.png';
import './Navbar.css';

const Nav = () => (
  <>
    <nav className="nav_container">
      <div className="logo_box">
        <div className="logo_text">
          <img className="logo_img" src={logo} alt="Logo" />
        </div>
      </div>

      <span className="navtext_center">Countries of World</span>

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

export default Nav;

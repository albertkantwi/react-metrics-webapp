import React from 'react';
import { useDispatch } from 'react-redux';
import { search } from '../redux/home/homeSlice';
import searchLogo from '../assets/icons/magnifying-glass-solid.svg';
import './Searchbar.css';

const Search = () => {
  const dispatch = useDispatch();
  const onSearchHandler = (e) => {
    dispatch(search(e.target.value));
  };
  return (
    <div className="search_container">
      <img className="search_icon" src={searchLogo} alt="" />
      <input
        type="text"
        placeholder="Search country"
        className="search_input"
        onChange={onSearchHandler}
      />
    </div>
  );
};

export default Search;

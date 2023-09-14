import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../redux/searchbox/searchboxSlice'; // Import setSearchTerm from filtersSlice

function Searchbox() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <section className="searchBarContainer">
      <input
        type="text"
        className="searchbar"
        placeholder="search by company name..."
        onChange={(e) => handleChange(e)}
      />
    </section>
  );
}

export default Searchbox;

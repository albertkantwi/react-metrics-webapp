import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './country/countrySlice';
import filtersReducer from './searchbox/searchboxSlice';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
    filters: filtersReducer,
  },
});

export default store;

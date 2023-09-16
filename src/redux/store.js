import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import homeReducer from './home/homeSlice';
import countryReducer from './country/countrySlice';

const store = configureStore({
  reducer: {
    country: homeReducer,
    countryDetail: countryReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  countriesData: [],
  status: 'idle',
  error: null,
  searchResult: '',
};

export const getCountries = createAsyncThunk('countries/getCountries', async () => {
  const countries = await fetch(' https://restcountries.com/v3.1/all');
  const data = await countries.json();
  return data;
});

export const homeSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    search: (state, action) => ({
      ...state, searchResult: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCountries.pending, (state) => ({
        ...state, status: 'loading',
      }))
      .addCase(getCountries.fulfilled, (state, action) => ({
        ...state,
        status: 'succeeded',
        countriesData: action.payload.map((country) => ({
          id: country.cca3,
          name: country.name.common,
          capital: country.capital,
          population: country.population,
          map: `https://raw.githubusercontent.com/djaiss/mapsicon/master/all/${country.cca2.toLowerCase()}/vector.svg`,
        })),
      }))
      .addCase(getCountries.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: [...state.error, action.error.message],
      }));
  },
});

export const { search } = homeSlice.actions;

export default homeSlice.reducer;

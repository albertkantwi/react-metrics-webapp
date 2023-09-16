import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  detailCountry: [],
  status: 'idle',
  error: null,
  countrySelected: '',
};

export const getCountryDetail = createAsyncThunk(
  'countryDetail/getCountryDetail',
  async (countrySelected) => {
    const API = 'https://restcountries.com/v3.1/name/';
    try {
      const response = await fetch(`${API}${countrySelected}`);
      if (response.status === 200) {
        return await response.json();
      }
      throw new Error(response.statusText);
    } catch (error) {
      return error.message;
    }
  },
);

export const countryDetailSlice = createSlice({
  name: 'countryDetail',
  initialState,
  reducers: {
    countrySelectedAction: (state, action) => ({
      ...state,
      countrySelected: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCountryDetail.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(getCountryDetail.fulfilled, (state, action) => ({
        ...state,
        detailCountry: action.payload.map((countryName) => ({
          id: countryName.name.common,
          name: countryName.name.common,
          capital: countryName.capital,
          offical: countryName.official,
          population: countryName.population,
          map: `https://raw.githubusercontent.com/djaiss/mapsicon/master/all/${countryName.cca2.toLowerCase()}/vector.svg`,
          flag: countryName.flags.svg,
          area: countryName.area,
          continents: countryName.continents,
          timezones: countryName.timezones[0],
          fifa: countryName.fifa,
          coatOfArms: countryName.coatOfArms.svg,
        })),
        status: 'succeeded',
      }))
      .addCase(getCountryDetail.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: [...state.error, action.error.message],
      }));
  },
});

export const { countrySelectedAction } = countryDetailSlice.actions;

export default countryDetailSlice.reducer;

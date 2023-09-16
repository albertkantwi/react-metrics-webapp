import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Population from '../components/Population';

const mockStore = configureStore();
const store = mockStore({
  country: {
    countriesData: [
      { name: 'Canada', population: 38005238 },
      { name: 'Morocco', population: 36910558 },
    ],
  },
});
describe('Population Component', () => {
  test('Check if the Population component is rendered correctly', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <Population />
        </BrowserRouter>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
  test('renders without crashing', () => {
    render(
      <Provider store={store}>
        <Population />
      </Provider>,
    );
  });
  test('calculates and displays total population correctly', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Population />
      </Provider>,
    );
    const totalPopulationText = getByText('74,915,796');
    expect(totalPopulationText).toBeInTheDocument();
  });
});

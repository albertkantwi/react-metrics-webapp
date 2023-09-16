import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import NavDetail from '../components/NavDetails';

describe('NavDetail Component', () => {
  const mockStore = configureStore();
  const store = mockStore({
    countryDetail: {
      countrySelected: 'Morocco',
    },
  });
  test('Check if the NavDetail component is rendered correctly', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <NavDetail />
        </BrowserRouter>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
  test('renders without crashing', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <NavDetail />
        </BrowserRouter>
      </Provider>,
    );
  });
  test('displays the country name correctly', () => {
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <NavDetail />
        </BrowserRouter>
      </Provider>,
    );
    const countryName = getByText('Details of Morocco');
    expect(countryName).toBeInTheDocument();
  });
});

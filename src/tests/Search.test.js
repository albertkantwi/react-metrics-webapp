import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Search from '../components/Searchbar';

const mockStore = configureStore();
const store = mockStore({});
describe('Search Component', () => {
  test('renders without crashing', () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>,
    );
  });
  test('dispatches search action when the input changes', () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <Search />
      </Provider>,
    );
    const inputElement = getByPlaceholderText('Search country');
    fireEvent.change(inputElement, { target: { value: 'Canada' } });
  });
});

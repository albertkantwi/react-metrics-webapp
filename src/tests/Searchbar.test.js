import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import Search from '../components/Searchbar';

test('Check if the Search component is rendered correctly', () => {
  const tree = render(
    <Provider store={store}>
      <BrowserRouter>
        <Search />
      </BrowserRouter>
    </Provider>,
  );

  expect(tree).toMatchSnapshot();
});

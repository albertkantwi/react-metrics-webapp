import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Searchbox from '../components/Searchbar';
import store from '../redux/store';

test('Check if the Search component is rendered correctly', () => {
  const tree = render(
    <Provider store={store}>
      <BrowserRouter>
        <Searchbox />
      </BrowserRouter>
    </Provider>,
  );

  expect(tree).toMatchSnapshot();
});

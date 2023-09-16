import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import Home from '../components/Home';

test('Check if the Home component is rendered correctly', () => {
  const tree = render(
    <BrowserRouter>
      <Provider store={store}>
        <Home />
      </Provider>
      ,
    </BrowserRouter>,
  );
  expect(tree).toMatchSnapshot();
});

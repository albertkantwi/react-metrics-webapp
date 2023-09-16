import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import Population from '../components/Population';

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

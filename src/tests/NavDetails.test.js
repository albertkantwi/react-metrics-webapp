import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import NavDetail from '../components/NavDetails';

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

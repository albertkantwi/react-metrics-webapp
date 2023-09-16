import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import CountryDetail from '../components/Country';
import store from '../redux/store';

test('Check if the CountryDetail component is rendered correctly', () => {
  const tree = render(
    <Provider store={store}>
      <BrowserRouter>
        <CountryDetail />
      </BrowserRouter>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});

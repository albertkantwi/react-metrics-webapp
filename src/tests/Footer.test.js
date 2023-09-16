import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../components/Footer';

test('Check if the Footer component is rendered correctly', () => {
  const tree = render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>,
  );
  expect(tree).toMatchSnapshot();
});

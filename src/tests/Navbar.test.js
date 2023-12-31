import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Nav from '../components/Navbar';

describe('Nav Component', () => {
  test('Check if Nav component is rendered correctly', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
  test('renders without crashing', () => {
    render(<Nav />);
  });
  test('displays the correct title', () => {
    const { getByText } = render(<Nav />);
    const title = getByText('Countries of World');
    expect(title).toBeInTheDocument();
  });
});

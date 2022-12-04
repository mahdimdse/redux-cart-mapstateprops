import React from 'react';
import { render, screen } from '@testing-library/react';
// import App from './App';
import CartTitle from './components/cartTitle';

test('renders title in page', () => {
  // render(<App />);
  render(<CartTitle />)
  const linkElement = screen.getByText(/Add to cart:/i);
  expect(linkElement).toBeInTheDocument();
});

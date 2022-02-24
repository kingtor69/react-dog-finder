import { render, getByText } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import defaultProps from './defaultProps';

import App from './App';

it('renders without crashing', () => {
  <MemoryRouter>
    render(<App />);
  </MemoryRouter>
});

it('displays dog list', () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={['/dogs']}>
q      <App />
    </MemoryRouter>
  );
  expect(getByText('We Got Dogs!')).toBeInTheDocument();
  expect(getByText(defaultProps.dogs[0].name)).toBeInTheDocument();
  expect(() => {getByText(defaultProps.dogs[0].facts[0])}).toThrow();
});

it.only('displays dog data with correct link', () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={[`/dogs/${defaultProps.dogs[0].src}`]}>
      <App />
    </MemoryRouter>
  );
  expect(getByText(defaultProps.dogs[0].facts[0])).toBeInTheDocument();
});

it('redirects to dog list with incorrect link', () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={['/dogs/bogus-src']}>
      <App />
    </MemoryRouter>
  );
  expect(getByText(defaultProps.dogs[0].name)).toBeInTheDocument();
  expect(getByText(defaultProps.dogs[0].facts[0])).not.toBeInTheDocument();
});

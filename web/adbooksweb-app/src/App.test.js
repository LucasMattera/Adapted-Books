import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/ADAPTED BOOKS INC row 2/i);
  expect(linkElement).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/© 2021–2021 Adapted Books/i);
  expect(linkElement).toBeInTheDocument();
});

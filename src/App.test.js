import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/customer data/i); 
 // const linkElement = screen.getElementById('root');
  expect(linkElement).toBeInTheDocument();
});

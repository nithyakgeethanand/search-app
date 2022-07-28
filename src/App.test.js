import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import App from './App';
import React from "react";

describe('App', () => {
  test('should render app components', () => {
    render(<App />);

    const linkElement = screen.getByText(/customer data/i);
    expect(linkElement).toBeInTheDocument();
    expect(screen.getByTestId("search-app")).toBeInTheDocument();
    expect(screen.getByTestId("search-heading")).toBeInTheDocument();
    expect(screen.getByTestId("search-input-word")).toBeInTheDocument();
  });
})


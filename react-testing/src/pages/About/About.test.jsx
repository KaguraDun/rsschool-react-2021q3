import { render, screen } from '@testing-library/react';
import React from 'react';

import About from './About';

describe('About', () => {
  it('renders', () => {
    render(<About />);
    expect(screen.getAllByText(/Lorem ipsum dolor sit amet/i)).toHaveLength(3);
  });
});

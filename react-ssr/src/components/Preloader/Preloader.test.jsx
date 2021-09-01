import { render, screen } from '@testing-library/react';
import React from 'react';

import Preloader from './Preloader';

describe('Preloader', () => {
  it('renders', () => {
    render(<Preloader />);

    expect(screen.getByTestId('preloader')).toBeInTheDocument();
  });
});

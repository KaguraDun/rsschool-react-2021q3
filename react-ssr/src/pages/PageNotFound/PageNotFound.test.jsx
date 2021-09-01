import { render, screen } from '@testing-library/react';
import React from 'react';

import PageNotFound from './PageNotFound';

describe('PageNotFound', () => {
  it('renders', () => {
    render(<PageNotFound />);
    expect(screen.getByText(/404/i)).toBeInTheDocument();
    expect(screen.getByText(/Page not found!/i)).toBeInTheDocument();
  });
});

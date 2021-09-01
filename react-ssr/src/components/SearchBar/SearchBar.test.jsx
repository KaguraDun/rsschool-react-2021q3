import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('renders', () => {
    render(<SearchBar />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByText(/search/i)).toBeInTheDocument();
  });

  it('text can be entered', () => {
    render(<SearchBar />);

    expect(screen.getByRole('textbox')).toBeEmptyDOMElement();
    userEvent.type(screen.getByRole('textbox'), 'cute cats');
    expect(screen.getByDisplayValue('cute cats')).toBeInTheDocument();
  });

  it('submit value by button press', () => {
    const mockSubmit = jest.fn();
    render(<SearchBar handleSearch={mockSubmit} />);

    userEvent.type(screen.getByRole('textbox'), 'cute cats');
    userEvent.keyboard('[Enter]');
    expect(mockSubmit).toBeCalled();
  });

  it('submit value by button click', () => {
    const mockSubmit = jest.fn();
    render(<SearchBar handleSearch={mockSubmit} />);

    userEvent.type(screen.getByRole('textbox'), 'cute cats');
    userEvent.click(screen.getByText(/search/i));
    expect(mockSubmit).toBeCalled();
  });
});

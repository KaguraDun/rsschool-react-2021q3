import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Card from './Card';

const fakeData = {
  id: '14934282524',
  owner: 'John Doe',
  secret: '344c84246b',
  server: '5598',
  title: 'Cat',
  url: 'https://live.staticflickr.com/4536/38465451442_59291a4a2f_n.jpg',
};

const linkUrl = '/details';

describe('Card', () => {
  it('renders', () => {
    render(
      <Router>
        <Card cardData={fakeData} linkUrl={linkUrl} />
      </Router>
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText(fakeData.title)).toBeInTheDocument();

    const owner = new RegExp(`Owner: ${fakeData.owner}`);
    expect(screen.getByText(owner)).toBeInTheDocument();

    const id = new RegExp(`ID: ${fakeData.id}`);
    expect(screen.getByText(id)).toBeInTheDocument();

    const server = new RegExp(`Server: ${fakeData.server}`);
    expect(screen.getByText(server)).toBeInTheDocument();
  });
});

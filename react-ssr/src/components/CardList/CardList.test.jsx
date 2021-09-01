import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import CardList from './CardList';

const fakeData = [
  {
    id: '14934282524',
    owner: 'John Doe',
    secret: '344c84246b',
    server: '5598',
    title: 'Cat',
    url: 'https://live.staticflickr.com/4536/38465451442_59291a4a2f_n.jpg',
  },
  {
    id: '14934282525',
    owner: 'John Doe',
    secret: '344c84246b',
    server: '5598',
    title: 'Cat',
    url: 'https://live.staticflickr.com/4536/38465451442_59291a4a2f_n.jpg',
  },
  {
    id: '14934282526',
    owner: 'John Doe',
    secret: '344c84246b',
    server: '5598',
    title: 'Cat',
    url: 'https://live.staticflickr.com/4536/38465451442_59291a4a2f_n.jpg',
  },
];

describe('CardList', () => {
  it('render 3 items', () => {
    render(
      <Router>
        <CardList
          isError={false}
          isLoading={false}
          items={fakeData}
          linkUrl="/details"
        />
      </Router>
    );
    expect(screen.getAllByRole('img')).toHaveLength(3);
  });

  it('show error message', () => {
    render(
      <Router>
        <CardList
          isError
          isLoading={false}
          items={fakeData}
          linkUrl="/details"
        />
      </Router>
    );
    expect(screen.getByText('Error occurred')).toBeInTheDocument();
  });

  it('show preloader', () => {
    render(
      <Router>
        <CardList
          isError={false}
          isLoading
          items={fakeData}
          linkUrl="/details"
        />
      </Router>
    );
    expect(screen.getByTestId('preloader')).toBeInTheDocument();
  });
  it('show nothing found message', () => {
    render(
      <Router>
        <CardList
          isError={false}
          isLoading={false}
          items={[]}
          linkUrl="/details"
        />
      </Router>
    );
    expect(screen.getByText('Oops nothing found')).toBeInTheDocument();
  });
});

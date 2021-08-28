/* eslint-disable react/prop-types */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Router } from 'react-router-dom';

import store from '../../store';
import App from './App';

const getAppStructure = (historyAdditional) => {
  const history = createMemoryHistory();
  if (historyAdditional) history.push(historyAdditional);

  return (
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  );
};

describe('App routing', () => {
  it('should render home page with search bar by default', () => {
    render(getAppStructure());

    expect(screen.getByText(/search/i)).toBeInTheDocument();
  });

  it('should navigate to about page', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    userEvent.click(screen.getByText(/about/i));
    expect(screen.getAllByText(/Lorem ipsum dolor sit amet/i)).toHaveLength(3);
  });

  it('should navigate to 404 page', () => {
    render(getAppStructure('/bad-link'));

    expect(screen.getByText(/404/i)).toBeInTheDocument();
    expect(screen.getByText(/Page not found!/i)).toBeInTheDocument();
  });
});

/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Header from '@/components/Header/Header';
import About from '@/pages/About/About';
import Details from '@/pages/Details/Details';
import Home from '@/pages/Home/Home';
import PageNotFound from '@/pages/PageNotFound/PageNotFound';

import style from './App.scss';

const App = () => {
  const PageContent = () => {
    const location = useLocation();

    return (
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames={{
            enter: style.pageEnter,
            enterActive: style.pageEnterActive,
            exit: style.pageExit,
            exitActive: style.pageExitActive,
          }}
          timeout={300}
          unmountOnExit
        >
          <div className={style.container}>
            <Switch location={location}>
              <Route component={() => <Home />} exact path="/" />
              <Route component={About} exact path="/about" />
              <Route
                component={({ match }) => {
                  const { id } = match.params;
                  return <Details itemId={id} />;
                }}
                exact
                path="/details/:id"
              />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </CSSTransition>
      </TransitionGroup>
    );
  };

  return (
    <>
      <Header />
      <PageContent />
    </>
  );
};

export default App;

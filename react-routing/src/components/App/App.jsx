import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Header from '@/components/Header/Header';
import About from '@/pages/About/About';
import Details from '@/pages/Details/Details';
import Home from '@/pages/Home/Home';
import PageNotFound from '@/pages/PageNotFound/PageNotFound';
import ApiService from '@/services/ApiService';

import style from './App.scss';

const App = () => {
  const apiService = new ApiService();

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
              <Route
                component={() => <Home apiService={apiService} />}
                exact
                path="/"
              />
              <Route component={About} exact path="/about" />
              <Route
                component={({ match }) => {
                  const { id } = match.params;
                  return <Details apiService={apiService} itemId={id} />;
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
    <Router>
      <Header />
      <PageContent />
    </Router>
  );
};

export default App;

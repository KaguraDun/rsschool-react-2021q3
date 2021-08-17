import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ApiService from '../../services/ApiService';
import About from '../About/About';
import CardList from '../CardList/CardList';
import Details from '../Details/Details';
import Header from '../Header/Header';
import PageNotFound from '../PageNotFound/PageNotFound';
import SearchBar from '../SearchBar/SearchBar';
import SearchOptions from '../SearchOptions/SearchOptions';
import style from './App.scss';

const apiService = new ApiService();

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [searchOptions, setSearchOptions] = useState({
    sort: 'relevance',
    resultsPerPage: 10,
    currentPage: 1,
  });

  const getDataFromApi = () => {
    if (searchValue) {
      apiService
        .getData(searchValue, searchOptions)
        .then(async (data) => {
          const photo = await Promise.all(
            apiService.getDataWithImages(data, 4)
          );
          const updatedData = JSON.parse(JSON.stringify(data));

          updatedData.photos.photo = photo;
          return updatedData;
        })
        .then((data) => {
          setSearchResult(data.photos);
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
          setIsError(true);
        });
    }
  };

  const handleSearch = (e, text) => {
    e.preventDefault();
    if (text === searchValue) return;

    setSearchValue(text);
    setIsLoading(true);
    setIsError(false);
  };

  const handleOptionChange = (option, value) => {
    setIsLoading(true);
    setIsError(false);
    setSearchOptions((options) => ({
      ...options,
      [option]: value,
    }));
  };

  useEffect(getDataFromApi, [searchOptions, searchValue]);

  const Home = () => (
    <div className={style.container}>
      <div className={style.searchBarWrapper}>
        <SearchBar handleSearch={handleSearch} />
      </div>
      <div className={style.searchOptionsWrapper}>
        <SearchOptions
          handleOptionChange={handleOptionChange}
          maxPages={searchResult.pages}
          options={searchOptions}
        />
      </div>
      <CardList
        isError={isError}
        isLoading={isLoading}
        items={searchResult.photo}
        linkUrl="/details"
      />
    </div>
  );

  return (
    <Router>
      <Header />
      <Switch>
        <Route component={Home} exact path="/" />
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
    </Router>
  );
};

export default App;

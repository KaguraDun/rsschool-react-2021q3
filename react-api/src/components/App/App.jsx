import React, { useEffect, useState } from 'react';

import ApiService from '../../model/ApiService';
import CardList from '../CardList/CardList';
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
          const photo = await Promise.all(apiService.getDataWithImages(data, 4));
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

  return (
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
      />
    </div>
  );
};

export default App;

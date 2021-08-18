/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';

import CardList from '@/components/CardList/CardList';
import SearchBar from '@/components/SearchBar/SearchBar';
import SearchOptions from '@/components/SearchOptions/SearchOptions';

import style from './Home.scss';

const Home = ({ apiService }) => {
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

  useEffect(getDataFromApi, [apiService, searchOptions, searchValue]);

  return (
    <div className={style.wrapper}>
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
};

export default Home;

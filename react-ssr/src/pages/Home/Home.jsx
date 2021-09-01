/* eslint-disable react-redux/useSelector-prefer-selectors */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CardList from '@/components/CardList/CardList';
import SearchBar from '@/components/SearchBar/SearchBar';
import SearchOptions from '@/components/SearchOptions/SearchOptions';
import {
  searchPhotos,
  setSearchOptions,
  submitSearchValue,
} from '@/features/search';

import style from './Home.scss';

const Home = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector(({ search }) => search.value);
  const searchOptionsParams = useSelector(({ search }) => search.options);
  const searchResult = useSelector(({ search }) => search.result);
  const isError = useSelector(({ search }) => search.isError);
  const isLoading = useSelector(({ search }) => search.isLoading);

  const getDataFromApi = () => {
    if (searchValue) {
      dispatch(
        searchPhotos({ value: searchValue, options: searchOptionsParams })
      );
    }
  };

  const handleSearch = (e, text) => {
    e.preventDefault();
    if (text === searchValue) return;
    dispatch(submitSearchValue(text));
  };

  const handleOptionChange = (option, value) => {
    const newState = { ...searchOptionsParams, [option]: value };
    dispatch(setSearchOptions(newState));
  };

  useEffect(getDataFromApi, [dispatch, searchOptionsParams, searchValue]);

  return (
    <div className={style.wrapper}>
      <div className={style.searchBarWrapper}>
        <SearchBar handleSearch={handleSearch} />
      </div>
      <div className={style.searchOptionsWrapper}>
        <SearchOptions
          handleOptionChange={handleOptionChange}
          maxPages={searchResult?.photos?.pages}
          options={searchOptionsParams}
        />
      </div>
      <CardList
        isError={isError}
        isLoading={isLoading}
        items={searchResult?.photos?.photo}
        linkUrl="/details"
      />
    </div>
  );
};

export default Home;

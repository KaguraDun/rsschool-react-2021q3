/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import SearchIcon from './icons/search-icon.svg';
import style from './SearchBar.scss';

const SearchBar = ({ handleSearch }) => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <form
      className={style.searchBar}
      onSubmit={(e) => handleSearch(e, searchValue)}
    >
      <div className={style.searchIconWrapper}>
        <SearchIcon className={style.searchIcon} height="30px" width="30px" />
      </div>
      <input
        className={style.input}
        onChange={({ target }) => setSearchValue(target.value)}
        placeholder="What are you searching?"
        type="text"
        value={searchValue}
      />
      <button className={style.button} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;

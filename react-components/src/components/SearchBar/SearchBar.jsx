import React from 'react';
import style from './SearchBar.scss';

import SearchIcon from './icons/search-icon.svg';

const SearchBar = () => (
  <div className={style.searchBar}>
    <div className={style.searchIconWrapper}>
      <SearchIcon className={style.searchIcon} height="30px" width="30px" />
    </div>

    <input
      className={style.input}
      placeholder="What are you searching?"
      type="text"
    />
  </div>
);

export default SearchBar;

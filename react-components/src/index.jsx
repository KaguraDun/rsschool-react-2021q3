import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles/index.scss';
import SearchBar from './components/SearchBar/SearchBar';

ReactDOM.render(
  <div className={style.container}>
    <div className={style.SearchBarWrapper}>
      <SearchBar />
    </div>
  </div>,
  document.getElementById('root')
);

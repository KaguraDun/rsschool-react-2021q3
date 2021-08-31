import React from 'react';
import ReactDOM from 'react-dom';

import CardList from './components/CardList/CardList';
import SearchBar from './components/SearchBar/SearchBar';
import cardData from './model/cardData';
import style from './styles/index.scss';

ReactDOM.render(
  <div className={style.container}>
    <div className={style.SearchBarWrapper}>
      <SearchBar />
    </div>
    <div className={style.cardsWrapper}>
      <CardList cardData={cardData} />
    </div>
  </div>,
  document.getElementById('root')
);

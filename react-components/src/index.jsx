import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles/index.scss';
import SearchBar from './components/SearchBar/SearchBar';
import CardList from './components/CardList/CardList';
import cardData from './model/cardData';

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

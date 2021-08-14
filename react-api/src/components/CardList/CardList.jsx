/* eslint-disable react/prop-types */
import React from 'react';

import Card from '../Card/Card';
import Preloader from '../Preloader/Preloader';
import style from './CardList.scss';

const getCards = (items) =>
  items.map((item) => <Card key={`card-${item.id}`} cardData={item} />);

const CardList = ({ items, isLoading }) => (
  <div className={style.wrapper}>
    {isLoading ? <Preloader /> : getCards(items)}
  </div>
);

export default CardList;

/* eslint-disable react/prop-types */
import React from 'react';

import Card from '../Card/Card';
import Preloader from '../Preloader/Preloader';
import style from './CardList.scss';

const getCards = (items, linkUrl) =>
  items.map((item) => (
    <Card key={`card-${item.id}`} cardData={item} linkUrl={linkUrl} />
  ));

const CardList = ({ items, isLoading, isError, linkUrl }) => {
  const isDataOk = items && !isError && !isLoading;
  const error = isError ? 'Error occurred' : null;
  const loading = isLoading ? <Preloader /> : null;
  const notFound = isDataOk && items.length === 0 ? 'Oops nothing found' : null;
  const cards = isDataOk ? getCards(items, linkUrl) : null;

  return (
    <div className={style.wrapper}>
      {error}
      {loading}
      {notFound}
      {cards}
    </div>
  );
};

export default CardList;
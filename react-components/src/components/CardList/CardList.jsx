/* eslint-disable react/prop-types */
import React from 'react';

import Card from '../Card/Card';
import style from './CardList.scss';

const CardList = ({cardData}) => (
  <div className={style.cardsContainer}>
    {cardData.map((card) => (
      <Card key={card.id} cardData={card} />
    ))}
  </div>
);

export default CardList;

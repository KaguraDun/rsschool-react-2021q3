/* eslint-disable react/prop-types */
import React from 'react';
import style from './CardList.scss';
import Card from '../Card/Card';

const CardList = ({cardData}) => (
  <div className={style.cardsContainer}>
    {cardData.map((card) => (
      <Card key={card.id} cardData={card} />
    ))}
  </div>
);

export default CardList;

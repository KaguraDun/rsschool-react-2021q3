/* eslint-disable react/prop-types */
import React from 'react';

import Card from '../Card/Card';
import style from './CardList.scss';

const CardList = ({ items }) => (
  <div className={style.wrapper}>
    {items.map((item) => (
      <Card key={`card-${item.orderID}`} cardData={item} />
    ))}
  </div>
);

export default CardList;

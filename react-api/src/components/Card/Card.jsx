/* eslint-disable react/prop-types */
import React from 'react';

import style from './Card.scss';

const Card = ({ cardData }) => (
  <article className={style.card}>
    <div className={style.cardContent}>
      <header>
        <h3 className={style.title}>{cardData.title}</h3>
      </header>
      <p className={style.item}>
        Owner: {cardData.owner}
      </p>
      <p className={style.item}>ID: {cardData.id}</p>
      <p className={style.item}>Server: {cardData.server}</p>
    </div>
  </article>
);

export default Card;

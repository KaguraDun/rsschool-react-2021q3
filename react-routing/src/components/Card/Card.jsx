/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

import style from './Card.scss';

const Card = ({ cardData, linkUrl }) => (
  <article className={style.card}>
    <img alt={cardData.title} className={style.thumbnail} src={cardData.url} />
    <div className={style.cardContent}>
      <header>
        <Link to={`${linkUrl}/${cardData.id}`}>
          <h3 className={style.title}>{cardData.title}</h3>{' '}
        </Link>
      </header>
      <p className={style.item}>Owner: {cardData.owner}</p>
      <p className={style.item}>ID: {cardData.id}</p>
      <p className={style.item}>Server: {cardData.server}</p>
    </div>
  </article>
);

export default Card;

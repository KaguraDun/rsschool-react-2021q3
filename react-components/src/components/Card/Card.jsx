/* eslint-disable react/prop-types */
import React from 'react';

import Like from '../Like/Like';
import style from './Card.scss';

const Card = ({ cardData }) => (
  <article className={style.card}>
    <img alt="" className={style.thumbnail} src={cardData.thumbnail} />
    <div className={style.cardContent}>
      <header>
        <a className={style.cardLink} href={cardData.link}>
          <h3 className={style.title}>{cardData.title}</h3>
        </a>

        <p className={style.author}>by {cardData.author}</p>
      </header>
      <p className={style.description}>{cardData.description}</p>
      <footer className={style.footer}>
        <Like likesNumber={cardData.likesNumber} />
        <p className={style.date}>{cardData.date}</p>
      </footer>
    </div>
  </article>
);

export default Card;

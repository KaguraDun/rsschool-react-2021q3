/* eslint-disable react/prop-types */
import React from 'react';

import foodList from '../../model/foodList';
import toppingsList from '../../model/toppingsList';
import style from './Card.scss';

const getToppings = (toppings) => {
  const toppingsString = [];

  toppings.forEach((isChecked, index) => {
    if (isChecked) toppingsString.push(toppingsList[index].name);
  });

  return toppingsString.length > 0
    ? `С добавками: ${toppingsString.join(', ')}`
    : false;
};

const Card = ({ cardData }) => (
  <article className={style.card}>
    <div className={style.cardContent}>
      <header>
        <h3 className={style.title}>{cardData.customerName} ваш заказ:</h3>
      </header>
      <p className={style.item}>
        Шаурма {foodList[cardData.foodID].name.toLowerCase()}
      </p>
      <p className={style.item}>{getToppings(cardData.toppings)}</p>
      <p className={style.item}>Доставим {cardData.deliveryDate}</p>
      <p className={style.item}>Позвоним на {cardData.contactNumber}</p>
      <p className={style.item}>
        {cardData.subscribe
          ? 'Вы подписались на обновления!'
          : 'Уведомлений не будет'}
      </p>
    </div>
  </article>
);

export default Card;

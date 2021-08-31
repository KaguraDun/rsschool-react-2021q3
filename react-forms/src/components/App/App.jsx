import React, { useEffect, useState } from 'react';

import foodList from '../../model/foodList';
import toppingsList from '../../model/toppingsList';
import CardForm from '../CardForm/CardForm';
import CardList from '../CardList/CardList';
import style from './App.scss';

const App = () => {
  const [cardItems, setCardItems] = useState([]);
  const [showMessage, setShowMessage] = useState(false);

  const createCard = (formData) => {
    setCardItems([formData, ...cardItems]);
    setShowMessage(true);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setShowMessage(false);
    }, 2000);
    return () => clearInterval(timer);
  });

  return (
    <div className={style.container}>
      <CardForm
        createCard={createCard}
        foodOptions={foodList}
        toppingsOptions={toppingsList}
      />
      <div className={style.wrapper}>
        <div className={style.messageWrapper}>
          <p className={style.message}>
            {showMessage ? 'Данные сохранены' : false}
          </p>
        </div>
        <CardList items={cardItems} />
      </div>
    </div>
  );
};

export default App;

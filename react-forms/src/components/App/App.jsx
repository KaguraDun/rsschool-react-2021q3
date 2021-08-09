import React, { useState } from 'react';

import foodList from '../../model/foodList';
import toppingsList from '../../model/toppingsList';
import CardForm from '../CardForm/CardForm';
import CardList from '../CardList/CardList';
import style from './App.scss';

const App = () => {
  const [cardItems, setCardItems] = useState([]);

  const createCard = (formData) => {
    setCardItems([...cardItems, formData]);
  };

  return (
    <div className={style.container}>
      <CardForm
        createCard={createCard}
        foodOptions={foodList}
        toppingsOptions={toppingsList}
      />
      <CardList items={cardItems} />
    </div>
  );
};

export default App;

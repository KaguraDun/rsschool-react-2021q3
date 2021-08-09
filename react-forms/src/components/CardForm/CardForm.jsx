/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import CheckboxGroup from '../CheckboxGroup/CheckboxGroup';
import Dropdown from '../Dropdown/Dropdown';
import Input from '../Input/Input';
import Switch from '../Switch/Switch';
import style from './CardForm.scss';

const CardForm = ({ foodOptions, toppingsOptions, createCard }) => {
  const [orderID, setOrderID] = useState(0);
  const [customerName, setCustomerName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [foodID, setFoodID] = useState(0);
  const [toppings, setToppings] = useState(
    new Array(Object.keys(toppingsOptions).length).fill(false)
  );
  const [subscribe, setSubscribe] = useState(false);

  const updateToppings = (id) => {
    const newToppings = toppings.map((item, index) =>
      index === id ? !item : item
    );
    setToppings(newToppings);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    createCard({
      orderID,
      customerName,
      contactNumber,
      deliveryDate,
      foodID,
      toppings,
      subscribe,
    });

    setOrderID(orderID + 1);
  };

  return (
    <form action="" className={style.form} onSubmit={handleOnSubmit}>
      <Input
        handleOnChange={(e) => setCustomerName(e.target.value)}
        label="Имя"
        type="text"
      />
      <Input
        handleOnChange={(e) => setContactNumber(e.target.value)}
        label="Контактный телефон"
        type="tel"
      />
      <Input
        handleOnChange={(e) => setDeliveryDate(e.target.value)}
        label="Дата доставки"
        type="date"
      />
      <Dropdown
        handleOnChange={(e) => setFoodID(e.target.value)}
        label="Выберите шаурму:"
        options={foodOptions}
      />
      <CheckboxGroup
        handleOnChange={updateToppings}
        legend="Дополнительная начинка:"
        options={toppingsOptions}
      />
      <Switch
        handleOnChange={(e) => setSubscribe(e.target.checked)}
        label="Получать уведомления?"
      />
      <button className={style.buttonSubmit} type="submit">
        Отправить
      </button>
    </form>
  );
};

export default CardForm;

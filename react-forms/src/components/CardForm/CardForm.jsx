/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import CheckboxGroup from '../CheckboxGroup/CheckboxGroup';
import Dropdown from '../Dropdown/Dropdown';
import Input from '../Input/Input';
import Switch from '../Switch/Switch';
import style from './CardForm.scss';

const CardForm = ({ foodOptions, toppingsOptions, createCard }) => {
  const toppingsStateArr = new Array(Object.keys(toppingsOptions).length).fill(
    false
  );

  const [orderID, setOrderID] = useState(0);
  const [customerName, setCustomerName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [foodID, setFoodID] = useState(0);
  const [toppings, setToppings] = useState(toppingsStateArr);
  const [subscribe, setSubscribe] = useState(false);

  const updateToppings = (id) => {
    const newToppings = toppings.map((item, index) =>
      index === id ? !item : item
    );
    setToppings(newToppings);
  };

  const reset = () => {
    setCustomerName('');
    setContactNumber('');
    setDeliveryDate('');
    setFoodID(0);
    setToppings(toppingsStateArr);
    setSubscribe(false);
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

    reset();
  };

  return (
    <form action="" className={style.form} onSubmit={handleOnSubmit}>
      <Input
        handleOnChange={(e) => setCustomerName(e.target.value)}
        label="Имя"
        type="text"
        value={customerName}
      />
      <Input
        handleOnChange={(e) => setContactNumber(e.target.value)}
        label="Контактный телефон"
        type="tel"
        value={contactNumber}
      />
      <Input
        handleOnChange={(e) => setDeliveryDate(e.target.value)}
        label="Дата доставки"
        type="date"
        value={deliveryDate}
      />
      <Dropdown
        handleOnChange={(e) => setFoodID(e.target.value)}
        label="Выберите шаурму:"
        options={foodOptions}
        value={foodID}
      />
      <CheckboxGroup
        checkedItems={toppings}
        handleOnChange={updateToppings}
        legend="Дополнительная начинка:"
        options={toppingsOptions}
      />
      <Switch
        checked={subscribe}
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

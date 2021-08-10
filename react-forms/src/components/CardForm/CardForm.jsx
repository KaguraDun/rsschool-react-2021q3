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

  const todayISO = new Date().toISOString().substring(0, 10);

  const [orderID, setOrderID] = useState(0);
  const [customerName, setCustomerName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [deliveryDate, setDeliveryDate] = useState(todayISO);
  const [foodID, setFoodID] = useState(0);
  const [toppings, setToppings] = useState(toppingsStateArr);
  const [subscribe, setSubscribe] = useState(false);
  const [errors, setErrors] = useState({});

  const updateToppings = (id) => {
    const newToppings = toppings.map((item, index) =>
      index === id ? !item : item
    );
    setToppings(newToppings);
  };

  const reset = () => {
    setCustomerName('');
    setContactNumber('');
    setDeliveryDate(todayISO);
    setFoodID(0);
    setToppings(toppingsStateArr);
    setSubscribe(false);
    setErrors({});
  };

  const phoneNumberRegex = /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/;
  const errorsList = {
    name: (value) => value.length > 1 && value.length < 15,
    number: (value) => phoneNumberRegex.test(value),
    date: (value) => value >= todayISO,
  };

  const validate = () => {
    const testErrors = {};

    if (!errorsList.name(customerName)) testErrors.name = true;
    if (!errorsList.number(contactNumber)) testErrors.number = true;
    if (!errorsList.date(deliveryDate)) testErrors.date = true;

    return testErrors;
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const testErrors = validate();
    if (Object.keys(testErrors).length > 0) {
      setErrors(testErrors);
      return;
    }

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
        error={errors.name ? 'Имя от 1 до 15 символов' : false}
        handleOnChange={(e) => setCustomerName(e.target.value)}
        label="Имя"
        type="text"
        value={customerName}
      />
      <Input
        error={errors.number ? 'Некорректный формат' : false}
        handleOnChange={(e) => setContactNumber(e.target.value)}
        label="Контактный телефон"
        type="tel"
        value={contactNumber}
      />
      <Input
        error={errors.date ? 'У нас нет машины времени!' : false}
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

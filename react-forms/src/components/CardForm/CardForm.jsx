import React from 'react';

import Checkbox from '../Checkbox/Checkbox';
import Dropdown from '../Dropdown/Dropdown';
import Input from '../Input/Input';
import Switch from '../Switch/Switch';
import style from './CardForm.scss';

const CardForm = () => (
  <form action="" className={style.form}>
    <Input label="Имя" type="text" />
    <Input label="Дата доставки" type="date" />
    <Dropdown
      label="Выберите шаурму:"
      options={[
        { value: 'chicken', name: 'С курицей' },
        { value: 'pork', name: 'Со свининой' },
        { value: 'vegan', name: 'С овощами' },
      ]}
    />
    <fieldset className={style.checkboxFieldset}>
      <legend className={style.checkboxLegend}>Дополнительная начинка:</legend>
      <Checkbox label="Сыр" />
      <Checkbox label="Картофель фри" />
      <Checkbox label="Сырный лаваш" />
    </fieldset>
    <Switch label="Получать уведомления?" />
  </form>
);

export default CardForm;

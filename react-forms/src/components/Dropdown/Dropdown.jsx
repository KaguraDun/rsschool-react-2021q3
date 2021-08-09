/* eslint-disable react/prop-types */
import React from 'react';

import style from './Dropdown.scss';

const Option = ({ options }) =>
  Object.values(options).map(({ value, name },index) => (
    <option key={`option${value}`} value={index}>
      {name}
    </option>
  ));

const Dropdown = ({ options, label, handleOnChange }) => (
  <label className={style.label}>
    {label}
    <select className={style.dropdown} name={label} onChange={handleOnChange}>
      <Option options={options} />
    </select>
  </label>
);

export default Dropdown;

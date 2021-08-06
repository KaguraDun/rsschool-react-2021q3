/* eslint-disable react/prop-types */
import React from 'react';

import style from './Dropdown.scss';

const Option = ({ options }) =>
  options.map(({ value, name }) => (
      <option key={value} value={value}>
        {name}
      </option>
    ));

const Dropdown = ({ options, label }) => (
  <label className={style.label}>
    {label}
    <select className={style.dropdown} name={label}>
      <Option options={options} />
    </select>
  </label>
);

export default Dropdown;

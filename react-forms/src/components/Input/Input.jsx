/* eslint-disable react/prop-types */
import React from 'react';

import style from './Input.scss';

const Input = ({ type, label, handleOnChange, value, error }) => (
  <label className={style.label}>
    {label}
    <span className={style.error}>{error}</span>
    <input
      className={style.input}
      onChange={handleOnChange}
      type={type}
      value={value}
    />
  </label>
);

export default Input;

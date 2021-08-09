/* eslint-disable react/prop-types */
import React from 'react';

import style from './Input.scss';

const Input = ({ type, label, handleOnChange }) => (
  <label className={style.label}>
    {label}
    <input className={style.input} onChange={handleOnChange} type={type} />
  </label>
);

export default Input;

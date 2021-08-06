/* eslint-disable react/prop-types */
import React from 'react';

import style from './Input.scss';

const Input = ({ type, label }) => (
  <label className={style.label}>
    {label}
    <input className={style.input} type={type} />
  </label>
);

export default Input;

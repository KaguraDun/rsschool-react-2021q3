/* eslint-disable react/prop-types */
import React from 'react';

import style from './Switch.scss';

const Switch = ({ label, handleOnChange, checked }) => (
  <label className={style.label}>
    <input
      checked={checked}
      className={style.switch}
      onChange={handleOnChange}
      type="checkbox"
    />
    <span className={style.icon} />
    {label}
  </label>
);

export default Switch;

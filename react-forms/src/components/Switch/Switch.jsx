/* eslint-disable react/prop-types */
import React from 'react';

import style from './Switch.scss';

const Switch = ({ label, handleOnChange }) => (
  <label className={style.label}>
    <input className={style.switch} onChange={handleOnChange} type="checkbox" />
    <span className={style.icon} />
    {label}
  </label>
);

export default Switch;

/* eslint-disable react/prop-types */
import React from 'react';

import style from './Switch.scss';

const Switch = ({ label }) => (
  <label className={style.label}>
    <input className={style.switch} type="checkbox" />
    <span className={style.icon} />
    {label}
  </label>
);

export default Switch;

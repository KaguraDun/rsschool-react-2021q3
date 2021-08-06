/* eslint-disable react/prop-types */
import React from 'react';

import style from './Checkbox.scss';

const Checkbox = ({ label }) => (
  <label className={style.label}>
    <input className={style.checkbox} type="checkbox" />
    <span className={style.icon} />
    {label}
  </label>
);

export default Checkbox;

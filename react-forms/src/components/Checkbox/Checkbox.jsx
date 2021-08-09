/* eslint-disable react/prop-types */
import React from 'react';

import style from './Checkbox.scss';

const Checkbox = ({ label, handleOnChange }) => (
  <label className={style.label}>
    <input
      className={style.checkbox}
      onChange={handleOnChange}
      type="checkbox"
    />
    <span className={style.icon} />
    {label}
  </label>
);

export default Checkbox;

/* eslint-disable react/prop-types */
import React from 'react';

import Checkbox from '../Checkbox/Checkbox';
import style from './CheckboxGroup.scss';

const CheckboxGroup = ({ legend, options, handleOnChange }) => (
  <fieldset className={style.fieldset}>
    <legend className={style.legend}>{legend}</legend>
    {Object.values(options).map((item, index) => (
      <Checkbox
        key={`checkbox${item.name}`}
        handleOnChange={() => handleOnChange(index)}
        label={item.name}
      />
    ))}
  </fieldset>
);

export default CheckboxGroup;

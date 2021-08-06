import React from 'react';
import ReactDOM from 'react-dom';

import CardForm from './components/CardForm/CardForm';
import style from './styles/index.scss';

ReactDOM.render(
  <div className={style.container}>
    <CardForm />
  </div>,
  document.getElementById('root')
);

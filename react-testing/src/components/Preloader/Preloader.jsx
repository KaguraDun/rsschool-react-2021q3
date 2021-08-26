import React from 'react';

import style from './Preloader.scss';

const Preloader = () => (
  <div className={style.preloader} data-testid="preloader">
    <div className={style.wrapper}>
      <div />
      <div />
      <div />
    </div>
  </div>
);

export default Preloader;

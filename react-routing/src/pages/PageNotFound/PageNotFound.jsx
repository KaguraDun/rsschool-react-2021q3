import React from 'react';

import style from './PageNotFound.scss';

const PageNotFound = () => (
  <div className={style.wrapper}>
    <p className={style.errorCode}>404</p>
    <p className={style.message}>Page not found!</p>
  </div>
);

export default PageNotFound;

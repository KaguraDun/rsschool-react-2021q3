import React from 'react';

import LikeIcon from './icons/like.svg';
import style from './like.scss';

// eslint-disable-next-line react/prop-types
const Like = ({ likesNumber }) => (
  <div className={style.like}>
    <LikeIcon className={style.likeIcon} height="20px" width="20px" />
    <div className={style.likesNumber}>{likesNumber}</div>
  </div>
);

export default Like;

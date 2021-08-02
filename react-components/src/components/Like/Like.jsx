import React from 'react';
import style from './like.scss';
import LikeIcon from './icons/like.svg';

// eslint-disable-next-line react/prop-types
const Like = ({ likesNumber }) => (
  <div className={style.like}>
    <LikeIcon className={style.likeIcon} height="20px" width="20px" />
    <div className={style.likesNumber}>{likesNumber}</div>
  </div>
);

export default Like;

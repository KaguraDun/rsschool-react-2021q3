/* eslint-disable react-redux/useSelector-prefer-selectors */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Preloader from '@/components/Preloader/Preloader';
import { searchPhotoInfo } from '@/features/details';

import style from './Details.scss';

const Details = ({ itemId }) => {
  const dispatch = useDispatch();
  const photoInfo = useSelector(({ details }) => details.photoInfo);
  const isLoading = useSelector(({ details }) => details.isLoading);
  const isError = useSelector(({ details }) => details.isError);

  useEffect(() => dispatch(searchPhotoInfo(itemId)), [dispatch, itemId]);

  const InfoInJson = () => (
    <code className={style.info}>
      <pre className={style.json}>{JSON.stringify(photoInfo, null, 4)}</pre>
    </code>
  );

  return (
    <div className={style.details}>
      {isLoading ? <Preloader /> : null}
      {isError ? 'Error occurred' : null}
      {photoInfo ? <InfoInJson /> : null}
    </div>
  );
};

export default Details;

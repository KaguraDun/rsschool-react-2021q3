/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';

import Preloader from '@/components/Preloader/Preloader';

import style from './Details.scss';

const Details = ({ itemId, apiService }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [info, setInfo] = useState(null);

  useEffect(() => {
    apiService
      .getInfo(itemId)
      .then((data) => {
        setInfo(data.photo);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  }, [apiService, itemId]);

  const InfoInJson = () => (
    <code className={style.info}>
      <pre>{JSON.stringify(info, null, 4)}</pre>
    </code>
  );

  return (
    <div className={style.details}>
      {isLoading ? <Preloader /> : null}
      {isError ? 'Error occurred' : null}
      {info ? <InfoInJson /> : null}
    </div>
  );
};

export default Details;

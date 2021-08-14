/* eslint-disable react/prop-types */
import React from 'react';

import style from './SearchOptions.scss';

const SearchOptions = ({ handleOptionChange, options, maxPages }) => (
  <div className={style.options}>
    <label className={style.label}>
      Sort order
      <select
        className={style.select}
        onChange={(e) => handleOptionChange('sort', e.target.value)}
        value={options.sort}
      >
        <option value="relevance">relevance</option>
        <option value="date-posted-asc">date-posted-asc</option>
        <option value="date-posted-desc">date-posted-desc</option>
      </select>
    </label>
    <label className={style.label}>
      Results per page (1-50)
      <input
        className={style.input}
        max="50"
        min="1"
        onChange={(e) => handleOptionChange('resultsPerPage', e.target.value)}
        type="number"
        value={options.resultsPerPage}
      />
    </label>
    <div className={style.pagination}>
      <button
        className={style.button}
        onClick={() =>
          handleOptionChange(
            'currentPage',
            options.currentPage - 1 > 0
              ? options.currentPage - 1
              : options.currentPage
          )
        }
        type="button"
      >
        {'<'}
      </button>
      <label className={style.label}>
        Page/max:{maxPages || '?'}
        <input
          className={style.input}
          max={maxPages}
          min="1"
          onChange={(e) => handleOptionChange('currentPage', e.target.value)}
          type="number"
          value={options.currentPage}
        />
      </label>
      <button
        className={style.button}
        onClick={() =>
          handleOptionChange(
            'currentPage',
            options.currentPage + 1 <= maxPages
              ? options.currentPage + 1
              : options.currentPage
          )
        }
        type="button"
      >
        {'>'}
      </button>
    </div>
  </div>
);

export default SearchOptions;

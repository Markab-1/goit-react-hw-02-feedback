import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={s.Results__thumb}>
      <ul className={s.Results__list}>
        <li className={s.Results__item}>
          Good: <span className={s.number}>{good}</span>
        </li>
        <li className={s.Results__item}>
          Neutral: <span className={s.number}>{neutral}</span>
        </li>
        <li className={s.Results__item}>
          Bad: <span className={s.number}>{bad}</span>
        </li>
        <li className={s.Results__item}>
          Total: <span className={s.number}>{total}</span>
        </li>
        <li className={s.Results__item}>
          Positive feedback:{' '}
          <span className={s.number}>{positivePercentage}</span>%
        </li>
      </ul>
    </div>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  posotovePercentage: PropTypes.number.isRequired,
};

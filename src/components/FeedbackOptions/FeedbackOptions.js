import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <ul className={s.Statistics__list}>
        {options.map(option => (
          <li key={option} className={s.Statistics__item}>
            <button
              type="button"
              className={s.Statistics__btn}
              onClick={onLeaveFeedback}
            >
              <span className={s.text}>{option}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};

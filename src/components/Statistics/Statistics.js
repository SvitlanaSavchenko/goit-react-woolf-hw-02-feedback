import PropTypes from 'prop-types';
import style from './Statistics.module.css';

import Notification from '../Notification';

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positiveFeedbackPercentage,
}) => {
  return (
    <>
      {total > 0 && (
        <ul className={style.list}>
          <li className={style.item}>Good Feedback: {good} </li>
          <li className={style.item}>Neutral Feedback: {neutral}</li>
          <li className={style.item}>Bad Feedback: {bad}</li>
          <li className={style.item}>Total Feedback: {total}</li>
          <li className={style.item}>
            Positive Feedback Percentage: {positiveFeedbackPercentage}
          </li>
        </ul>
      )}
      {total === 0 && <Notification message="There is no feedback" />}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default Statistics;

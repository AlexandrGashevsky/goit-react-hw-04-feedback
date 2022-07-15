import React from "react";
import PropTypes from "prop-types";
import statisticStyles from "./Statistic.module.css";
const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={statisticStyles.statistic} >
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage} %</p>
    </div>
  );
};
Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistic;

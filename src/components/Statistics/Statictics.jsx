import PropTypes from 'prop-types';
import { StyledItem } from './Statictics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul>
      <StyledItem>Good: {good}</StyledItem>
      <StyledItem>Neutral: {neutral}</StyledItem>
      <StyledItem>Bad: {bad}</StyledItem>
      <StyledItem>Total: {total}</StyledItem>
      <StyledItem>Positive feedback: {positivePercentage}</StyledItem>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
};

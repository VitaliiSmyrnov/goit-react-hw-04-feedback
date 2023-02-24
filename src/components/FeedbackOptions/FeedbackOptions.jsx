import PropTypes from 'prop-types';
import { FaRegSmile, FaRegMeh, FaRegFrown } from 'react-icons/fa';
import { StyledList, StyledButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const icons = {
    good: <FaRegSmile color="green" />,
    neutral: <FaRegMeh color="yellow" />,
    bad: <FaRegFrown color="red" />,
  };

  return (
    <StyledList>
      {options.map(option => (
        <li key={option}>
          <StyledButton type="button" onClick={() => onLeaveFeedback(option)}>
            {icons[option]}
            {option[0].toUpperCase() + option.slice(1)}
          </StyledButton>
        </li>
      ))}
    </StyledList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

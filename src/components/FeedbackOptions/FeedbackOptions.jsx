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
      {Object.keys(options).map(name => (
        <li key={name}>
          <StyledButton type="button" onClick={() => onLeaveFeedback(name)}>
            {icons[name]}
            {name[0].toUpperCase() + name.slice(1)}
          </StyledButton>
        </li>
      ))}
    </StyledList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  onLeaveFeedback: PropTypes.func.isRequired,
};

import PropTypes from 'prop-types';
import { StyledSection, StyledTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <StyledSection>
      {title && <StyledTitle>{title}</StyledTitle>}
      {children}
    </StyledSection>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

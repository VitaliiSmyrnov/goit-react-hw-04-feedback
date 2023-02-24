import styled from 'styled-components';

export const StyledMessage = styled.p`
  font-size: ${p => p.theme.fontSizes.md};

  text-align: center;
  padding-top: ${p => p.theme.spacing(4)};
`;

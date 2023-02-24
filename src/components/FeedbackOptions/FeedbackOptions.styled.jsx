import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  justify-content: space-between;

  margin-top: ${p => p.theme.spacing(4)};
  margin-left: auto;
  margin-right: auto;
`;

export const StyledButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.spacing(1)};

  min-width: 90px;
  text-align: center;

  padding-left: ${p => p.theme.spacing(4)};
  padding-right: ${p => p.theme.spacing(4)};
  padding-top: ${p => p.theme.spacing(1)};
  padding-bottom: ${p => p.theme.spacing(1)};

  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.background};

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.secondary};
  }

  box-shadow: ${p => p.theme.shadows.normal};
  cursor: pointer;
`;

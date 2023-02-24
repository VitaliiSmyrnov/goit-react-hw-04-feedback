import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;

  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.background};
`;

export const StyledContainer = styled.div`
  padding-left: ${p => p.theme.spacing(8)};
  padding-right: ${p => p.theme.spacing(8)};

  background-color: ${p => p.theme.colors.muted};
  box-shadow: ${p => p.theme.shadows.normal};
`;

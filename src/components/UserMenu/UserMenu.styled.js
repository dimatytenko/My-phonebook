import styled from '@emotion/styled';

export const UserMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  color: white;
`;

export const UserMenuButtonOut = styled.button`
  outline: none;
  color: ${props => props.theme.colors.appPrimary};
  background-color: ${props => props.theme.backgrounds.appPrimary};
  border-radius: 5px;
  border: none;
  display: flex;
  align-items: center;
  padding: 10px 8px;
  cursor: pointer;
  transition: background-color ${props => props.theme.transitions.primary};

  &:hover,
  &:focus {
    background-color: ${props => props.theme.hovers.primary};
  }
`;

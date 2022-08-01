import styled from '@emotion/styled';

export const AppBarWrapper = styled.div`
  position: relative;
  min-height: 90px;
  background-color: ${props => props.theme.backgrounds.appPrimary};
  display: flex;
  align-items: center;
`;

export const AppBarBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AppBarSwitchBox = styled.div`
  position: absolute;
  right: 3%;
  top: 120%;
`;

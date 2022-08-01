import styled from '@emotion/styled';

export const HomeImage = styled.nav`
  max-width: 250px;
  height: 300px;
  background-image: url(${props => props.img});
  background-size: 250px 300px;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 50px;
  border-radius: 6px;
`;

export const HomeTitle = styled.nav`
  text-align: center;
  font-size: 48px;
  font-weight: 500;
  border-radius: 10px;
  padding: 30px 50px;
  color: ${props => props.theme.colors.bodyPrimary};

  box-shadow: 0 2.8px 2.2px red, 0 6.7px 5.3px blue, 0 12.5px 10px green,
    0 22.3px 17.9px purple, 0 41.8px 33.4px orange, 0 100px 80px teal;
`;

export const HomeLink = styled.span`
  color: ${props => props.theme.colors.bodyPrimary};
  transition: color ${props => props.theme.transitions.primary};

  &:hover,
  &:focus {
    color: ${props => props.theme.hovers.primary};
  }
`;

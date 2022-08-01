import styled from '@emotion/styled';

export const NotFoundWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const NotFoundTitle = styled.div`
  color: ${props => props.theme.colors.bodyPrimary};
  margin-top: 20px;
  text-align: center;
  font-size: 28px;
`;

export const NotFoundSubTitle = styled.div`
  color: ${props => props.theme.colors.bodyPrimary};
  margin-top: 20px;
  text-align: center;
  font-size: 28px;
`;

export const NotFoundGoHome = styled.span`
  color: ${props => props.theme.colors.bodyPrimary};
  text-decoration: underline;
  text-transform: uppercase;

  transition: color ${props => props.theme.transitions.primary};

  &:hover,
  &:focus {
    color: ${props => props.theme.hovers.primary};
  }
`;

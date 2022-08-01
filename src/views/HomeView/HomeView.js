import { NavLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';

import { HomeImage, HomeTitle, HomeLink } from './HomeView.styled';
import phoneBook from '../../image/phoneBook.png';

export default function HomeView() {
  return (
    <>
      <HomeImage img={phoneBook}></HomeImage>
      <HomeTitle>
        <Typography
          component="h1"
          variant="string"
          align="center"
          sx={{
            fontSize: {
              xs: 24,
              sm: 53,
              md: 80,
            },
          }}
        >
          Did you register ?
          <NavLink to="/login">
            <HomeLink> Log in </HomeLink>
          </NavLink>
          :
          <NavLink to="/register">
            <HomeLink> Sign up</HomeLink>
          </NavLink>
          ;
        </Typography>
      </HomeTitle>
    </>
  );
}

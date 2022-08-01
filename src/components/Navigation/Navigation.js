import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import HomeIcon from '@mui/icons-material/Home';

import { authSelectors } from '../../redux/auth';
import { NavigationWrapper, NavigationLink } from './Navigation.styled';

function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <NavigationWrapper>
      <NavLink to="/">
        <NavigationLink>
          <HomeIcon fontSize="large" sx={{ mr: 1 }} />
          <Typography
            component="h3"
            variant="string"
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'block' },
              fontSize: '28px',
            }}
          >
            Home
          </Typography>
        </NavigationLink>
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts">
          <NavigationLink>
            <ImportContactsIcon fontSize="large" sx={{ mr: 1 }} />
            <Typography
              component="h3"
              variant="string"
              sx={{
                flexGrow: 1,
                display: { xs: 'none', sm: 'block' },
                fontSize: '28px',
              }}
            >
              Contacts
            </Typography>
          </NavigationLink>
        </NavLink>
      )}
    </NavigationWrapper>
  );
}

export default Navigation;

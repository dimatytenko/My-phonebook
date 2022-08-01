import { NavLink } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { Typography } from '@mui/material';

import { AuthWrapper, AuthLink } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <AuthWrapper>
      <NavLink to="/register">
        <AuthLink>
          <HowToRegIcon fontSize="large" sx={{ mr: 1 }} />
          <Typography
            component="h3"
            variant="string"
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'block' },
              fontSize: '28px',
            }}
          >
            Sign up
          </Typography>
        </AuthLink>
      </NavLink>
      <NavLink to="/login">
        <AuthLink>
          <LoginIcon fontSize="large" sx={{ mr: 1 }} />
          <Typography
            variant="string"
            component="h3"
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'block' },
              fontSize: '28px',
            }}
          >
            Log in
          </Typography>
        </AuthLink>
      </NavLink>
    </AuthWrapper>
  );
}

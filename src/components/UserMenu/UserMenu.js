import { authSelectors, authOperations } from '../../redux/auth';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, Box } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

import { UserMenuWrapper, UserMenuButtonOut } from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const nameUser = useSelector(authSelectors.getUsername);

  return (
    <UserMenuWrapper>
      <Box sx={{ display: 'flex' }}>
        <Typography
          component="div"
          variant="string"
          sx={{
            display: { xs: 'none', md: 'block' },
            mr: 1,
            fontSize: '28px',
          }}
        >
          Welcome,
        </Typography>
        <Typography
          component="div"
          variant="string"
          sx={{
            flexGrow: 1,
            display: { xs: 'none', sm: 'block' },
            fontSize: '28px',
          }}
        >
          {nameUser}
        </Typography>
      </Box>

      <UserMenuButtonOut
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        <LogoutIcon fontSize="large" sx={{ mr: 1 }} />
        Log out
      </UserMenuButtonOut>
    </UserMenuWrapper>
  );
}

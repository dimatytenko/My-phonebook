import { createTheme } from '@mui/material/styles';

export const ThemeLight = createTheme({
  palette: { mode: 'light' },
  backgrounds: {
    appPrimary: 'black',
    appSecondary: 'white',
    modalBackdrop: 'rgba(0, 0, 0, 0.85)',
    modalBody: 'white',
    body: 'white',
  },
  colors: {
    appPrimary: 'white',
    bodyPrimary: '#2a363b',
  },
  hovers: {
    primary: 'red',
  },
  transitions: {
    primary: '0.5s ease 0s',
  },
});

export const ThemeDark = createTheme({
  palette: { mode: 'dark' },

  backgrounds: {
    appPrimary: 'black',
    appSecondary: 'white',
    modalBackdrop: 'rgba(0, 0, 0, 0.85)',
    modalBody: 'hwb(273deg 18% 80%)',
    body: 'hwb(273deg 18% 80%)',
  },
  colors: {
    appPrimary: 'white',
    bodyPrimary: 'white',
  },
  hovers: {
    primary: 'red',
  },
  transitions: {
    primary: '0.5s ease 0s',
  },
});

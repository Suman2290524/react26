
import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#0057D9' },     // Brand primary
    secondary: { main: '#00C2A8' },   // Accent
    background: { default: '#ffffff', paper: '#f8fafc' }
  },
  typography: {
    fontFamily:
      '"Inter", system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 }
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#7AB7FF' },
    secondary: { main: '#66DFC9' },
    background: { default: '#0b0f14', paper: '#10161d' }
  },
});

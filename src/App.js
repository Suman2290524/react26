
import { useMemo, useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from './theme';
import LandingPage from './pages/LandingPage';

export default function App() {
  const [dark, setDark] = useState(false);
  const theme = useMemo(() => (dark ? darkTheme : lightTheme), [dark]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LandingPage dark={dark} onToggleTheme={() => setDark(v => !v)} />
    </ThemeProvider>
  );
}
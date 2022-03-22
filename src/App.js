import React, { useMemo } from 'react';
import { ThemeProvider } from '@emotion/react';
import { createTheme, CssBaseline } from '@mui/material';
import PlanetsProvider from './context/PlanetsProvider';
import './App.css';
import Header from './components/Header';
import MuiTable from './components/MuiTable';
import MuiFilterInputs from './components/MuiFilterInputs';

function App() {
  const darkTheme = useMemo(
    () => createTheme({
      palette: {
        mode: 'dark',
      },
    }),
  );

  return (
    <PlanetsProvider>
      <ThemeProvider theme={ darkTheme }>
        <CssBaseline />
        <Header />
        <MuiFilterInputs />
        <MuiTable />
      </ThemeProvider>
    </PlanetsProvider>
  );
}

export default App;

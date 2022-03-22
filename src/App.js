import React, { useMemo } from 'react';
import { ThemeProvider } from '@emotion/react';
import { createTheme, CssBaseline } from '@mui/material';
import PlanetsProvider from './context/PlanetsProvider';
import './App.css';
import Header from './components/Header';
// import Table from './components/Table';
import MuiTable from './components/MuiTable';
// import SearchInputs from './components/SearchInputs';
// import FilterInputs from './components/FilterInputs';
import MuiFilterInputs from './components/MuiFilterInputs';
// import OrderInput from './components/OrderInput';

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
        {/* <SearchInputs /> */}
        {/* <FilterInputs /> */}
        {/* <OrderInput /> */}
        {/* <Table /> */}
        <MuiTable />
      </ThemeProvider>
    </PlanetsProvider>
  );
}

export default App;

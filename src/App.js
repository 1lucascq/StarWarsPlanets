import React from 'react';
import { createTheme } from '@mui/system';
import { ThemeProvider } from '@emotion/react';
import PlanetsProvider from './context/PlanetsProvider';
import './App.css';
import Header from './components/Header';
// import Table from './components/Table';
import MuiTable from './components/MuiTable';
// import SearchInputs from './components/SearchInputs';
// import FilterInputs from './components/FilterInputs';
import MuiFilterInputs from './components/MuiFilterInputs';
// import OrderInput from './components/OrderInput';

// const theme = createTheme({
//   typography: {
//     fontFamily: [
//       'Star Jedi',
//       'Roboto',
//     ].join(','),
//   } });

function App() {
  return (
    <PlanetsProvider>
      {/* <ThemeProvider theme={ theme }> */}
      <Header />
      <MuiFilterInputs />
      {/* <SearchInputs /> */}
      {/* <FilterInputs /> */}
      {/* <OrderInput /> */}
      {/* <Table /> */}
      <MuiTable />
      {/* </ThemeProvider> */}
    </PlanetsProvider>
  );
}

export default App;

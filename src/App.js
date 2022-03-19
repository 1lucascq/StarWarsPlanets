import React from 'react';
import PlanetsProvider from './context/PlanetsProvider';
import './App.css';
import Header from './components/Header';
// import Table from './components/Table';
import MuiTable from './components/MuiTable';
// import SearchInputs from './components/SearchInputs';
import FilterInputs from './components/FilterInputs';
import MuiFilterInputs from './components/MuiFilterInputs';
// import OrderInput from './components/OrderInput';

function App() {
  return (
    <PlanetsProvider>
      <Header />
      <MuiFilterInputs />
      {/* <SearchInputs /> */}
      <FilterInputs />
      {/* <OrderInput /> */}
      {/* <Table /> */}
      <MuiTable />
    </PlanetsProvider>
  );
}

export default App;

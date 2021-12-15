import React from 'react';
import PlanetsProvider from './context/PlanetsProvider';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import SearchInputs from './components/SearchInputs';
import FilterInputs from './components/FilterInputs';
import OrderInput from './components/OrderInput';

function App() {
  return (
    <PlanetsProvider>
      <Header />
      <SearchInputs />
      <FilterInputs />
      <OrderInput />
      <Table />
    </PlanetsProvider>
  );
}

export default App;

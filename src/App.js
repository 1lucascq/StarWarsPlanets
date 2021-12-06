import React from 'react';
import PlanetsProvider from './context/PlanetsProvider';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import SearchInputs from './components/SearchInputs';

function App() {
  return (
    <PlanetsProvider>
      <Header />
      <SearchInputs />
      <Table />
    </PlanetsProvider>
  );
}

export default App;

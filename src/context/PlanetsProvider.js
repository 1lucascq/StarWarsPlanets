import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
// import filterData from '../helpers/filterData';
// import filterResults from '../helpers/filterResults';

const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState([]);
  // const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(URL);
      const fetchData = await response.json();
      setData(fetchData.results);
    }
    getData();
  }, []);

  // --> Ver como passar essa lógica para cá (tá no Table.jsx) --> Fica dando loop infinito
  // useEffect(() => {
  //   if (filters.length) {
  //     const filter = filterData(filters, data);
  //     setFilteredData(filterResults(query, filter));
  //     console.log('useEffect', filter);
  //   } else {
  //     setFilteredData(filterResults(query, data));
  //   }
  // }, [data, filteredData, filters, query]);

  return (
    <PlanetsContext.Provider value={ { data, query, setQuery, filters, setFilters } }>
      {children}
    </PlanetsContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

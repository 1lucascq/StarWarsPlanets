import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
// const INITIAL_FILTERS = {
//   filterByNumericValues: [
//     {
//       column: 'population',
//       comparison: 'maior que',
//       value: '100000',
//     },
//   ],
// };
// {
//   filterByName: {
//     name: 'Tatoo'
//   }
// }
function Provider({ children }) {
  const [data, setData] = useState({});
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch(URL);
      const fetchData = await response.json();
      setData(fetchData.results);
    }
    getData();
  }, []);

  // const [filteredResults, setFilteredResults] = useState();

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

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

function Provider({ children }) {
  const [data, setData] = useState({});
  const [query, setQuery] = useState('');
  useEffect(() => {
    async function getData() {
      const response = await fetch(URL);
      const fetchData = await response.json();
      setData(fetchData.results);
    }
    getData();
  }, []);

  // const [filteredResults, setFilteredResults] = useState();

  // console.log('data in provider', data);
  return (
    <PlanetsContext.Provider value={ { data, query, setQuery } }>
      {children}
    </PlanetsContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

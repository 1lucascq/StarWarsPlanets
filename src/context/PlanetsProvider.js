import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import filterData from '../helpers/filterData';
import filterResults from '../helpers/filterResults';

const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState([]);
  const [renderData, setRenderData] = useState([]);
  // const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(URL);
      const fetchData = await response.json();
      setData(fetchData.results);
    }
    getData();
  }, []);

  useEffect(() => {
    console.log(filters);
    if (filters.length === 1) {
      const filteredData = filterData(filters, data);
      setRenderData(filterResults(query, filteredData));
    } else if (filters.length > 1) {
      setRenderData((prevRenderData) => {
        console.log(prevRenderData);
        const filteredData = filterData(filters, prevRenderData);
        console.log(filteredData);
        return filterResults(query, filteredData);
      });
    } else {
      setRenderData(filterResults(query, data));
    }
  }, [data, filters, query]);

  return (
    <PlanetsContext.Provider
      value={ {
        data,
        query,
        setQuery,
        filters,
        setFilters,
        renderData,
        setRenderData,
      } }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

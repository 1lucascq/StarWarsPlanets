import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import filterData from '../helpers/filterData';
import filterResults from '../helpers/filterResults';
import { orderDataByNumbers } from '../helpers/orderData';

const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const DEFAULT_ORDER = {
  column: 'name',
  sort: 'ASC',
};
function Provider({ children }) {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState([]);
  const [renderData, setRenderData] = useState([]);
  const [order, setOrder] = useState(DEFAULT_ORDER);

  useEffect(() => {
    async function getData() {
      const response = await fetch(URL);
      const fetchData = await response.json();
      setData(fetchData.results);
    }
    getData();
  }, []);

  useEffect(() => {
    if (filters.length === 1) {
      const filteredData = filterData(filters, data);
      setRenderData(filterResults(query, filteredData));
    } else if (filters.length > 1) {
      setRenderData((prevRenderData) => {
        const filteredData = filterData(filters, prevRenderData);
        return filterResults(query, filteredData);
      });
    } else {
      setRenderData(filterResults(query, data));
    }
  }, [data, filters, query]);

  useEffect(() => {
    setRenderData(orderDataByNumbers(order, renderData));
  }, [order, renderData]);

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
        order,
        setOrder,
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

import React, { useContext, useState, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const COMPARISON_OPTIONS = ['maior que', 'menor que', 'igual a'];

export default function FilterInputs() {
  const DEFAULT_FILTER = {
    column: 'population',
    comparison: 'maior que',
    value: '0',
  };
  const { filters, setFilters } = useContext(PlanetsContext);
  const [filter, setFilter] = useState(DEFAULT_FILTER);
  const { column, comparison, value } = filter;
  const [columnOptions, setColumnOptions] = useState(['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water']);

  useEffect(() => {
    setColumnOptions(['population', 'orbital_period', 'diameter',
      'rotation_period', 'surface_water']);
  }, []);

  function handleFilterBtn() {
    setFilters([...filters, filter]);
    const i = columnOptions.indexOf(filter.column);
    columnOptions.splice(i, 1);
    setFilter({ ...DEFAULT_FILTER, column: columnOptions[0] });
  }

  function renderOptions(options) {
    return (
      options.map((item, i) => (
        <option
          key={ i }
          value={ item }
        >
          {item}

        </option>
      )));
  }

  function removeFilter(id) {
    const info = id.split('-');
    setFilters(filters.filter((filt) => filt.column !== filters[Number(info[1])].column));
    columnOptions.push(info[0]);
  }

  return (
    <>
      <select
        type="text"
        name="column-filter"
        value={ column }
        onChange={ ({ target }) => setFilter({ ...filter, column: target.value }) }
        data-testid="column-filter"
      >
        {renderOptions(columnOptions)}
      </select>

      <select
        type="text"
        name="comparison-filter"
        value={ comparison }
        onChange={ ({ target }) => setFilter({ ...filter, comparison: target.value }) }
        data-testid="comparison-filter"
      >
        {renderOptions(COMPARISON_OPTIONS)}

      </select>

      <input
        type="number"
        name="value-filter"
        value={ value }
        onChange={ ({ target }) => setFilter({ ...filter, value: target.value }) }
        data-testid="value-filter"
      />

      <button
        data-testid="button-filter"
        type="button"
        onClick={ handleFilterBtn }
      >
        Filtrar
      </button>

      <ul>
        {filters.length && filters.map((fil, i) => (
          <li key={ i } data-testid="filter">
            {`${fil.column} | ${fil.comparison} | ${fil.value}`}
            <button
              type="button"
              id={ `${fil.column}-${i}` }
              onClick={ ({ target }) => removeFilter(target.id) }
            >
              X
            </button>
          </li>
        )) }
      </ul>
    </>
  );
}

import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const COMPARISON_OPTIONS = ['maior que', 'menor que', 'igual a'];
const COLUMN_OPTIONS = ['population', 'orbital_period', 'diameter',
  'rotation_period', 'surface_water'];

export default function FilterInputs() {
  const DEFAULT_FILTER = {
    column: 'population',
    comparison: 'maior que',
    value: '0',
  };
  const { filters, setFilters } = useContext(PlanetsContext);
  const [filter, setFilter] = useState(DEFAULT_FILTER);
  const { column, comparison, value } = filter;

  function handleFilterBtn() {
    setFilters([...filters, filter]);
    const i = COLUMN_OPTIONS.indexOf(filter.column);
    COLUMN_OPTIONS.splice(i, 1);
    setFilter({ ...DEFAULT_FILTER, column: COLUMN_OPTIONS[0] });
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
    COLUMN_OPTIONS.push(info[0]);
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
        {renderOptions(COLUMN_OPTIONS)}
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

      {filters.length && filters.map((fil, i) => (
        <ul key={ i }>
          <li>
            {`${fil.column} | ${fil.comparison} | ${fil.value}`}
          </li>
          <button
            type="button"
            id={ `${fil.column}-${i}` }
            onClick={ ({ target }) => removeFilter(target.id) }
          >
            X
          </button>
        </ul>
      )) }

    </>
  );
}

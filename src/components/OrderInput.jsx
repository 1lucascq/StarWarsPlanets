import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import { orderDataByNumbers } from '../helpers/orderData';

const COLUMN_OPTIONS = ['population', 'orbital_period',
  'diameter', 'rotation_period', 'surface_water'];

export default function OrderInput() {
  const { order, setOrder, renderData, setRenderData } = useContext(PlanetsContext);
  const { name } = order;

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

  return (
    <>
      <select
        type="text"
        name="column-filter"
        value={ name }
        onChange={ ({ target }) => setOrder({ ...order, column: target.value }) }
        data-testid="column-sort"
      >
        {renderOptions(COLUMN_OPTIONS)}
      </select>

      <label htmlFor="ASC">
        <input
          type="radio"
          name="value-filter"
          value="ASC"
          onChange={ ({ target }) => setOrder({ ...order, sort: target.value }) }
          data-testid="column-sort-input-asc"
        />
        Ascendente
      </label>

      <label htmlFor="DESC">
        <input
          type="radio"
          name="value-filter"
          value="DESC"
          onChange={ ({ target }) => setOrder({ ...order, sort: target.value }) }
          data-testid="column-sort-input-desc"
        />
        Descendente
      </label>

      <button
        data-testid="column-sort-button"
        type="button"
        onClick={ setRenderData(orderDataByNumbers(order, renderData)) }
      >
        Ordenar
      </button>

    </>
  );
}

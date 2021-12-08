import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function SearchInputs() {
  const { query, setQuery } = useContext(PlanetsContext);
  return (
    <input
      placeholder="Filtre por nome"
      name="query"
      value={ query }
      data-testid="name-filter"
      onChange={ ({ target }) => setQuery(target.value) }
    />
  );
}

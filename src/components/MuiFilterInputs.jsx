import React, { useContext, useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {
  Button, FormControl, Box, InputLabel, Select, MenuItem,
  List, ListItem, IconButton, ListItemText,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PlanetsContext from '../context/PlanetsContext';

const DEFAULT_OPTIONS = [
  { name: 'Population', value: 'population' },
  { name: 'Orbital Period', value: 'orbital_period' },
  { name: 'Diameter', value: 'diameter' },
  { name: 'Rotation Period', value: 'rotation_period' },
  { name: 'Surface Water', value: 'surface_water' },
];
const COMPARISON_OPTIONS = [
  { name: '>', value: 'maior que' },
  { name: '<', value: 'menor que' },
  { name: '=', value: 'igual a' },
];
const DEFAULT_FILTER = {
  column: 'population',
  comparison: 'maior que',
  value: '0',
};

export default function MuiFilterInputs() {
  const { query, setQuery, data, filters, setFilters } = useContext(PlanetsContext);
  const [filter, setFilter] = useState(DEFAULT_FILTER);
  const [columnOptions, setColumnOptions] = useState(DEFAULT_OPTIONS);
  const { column, comparison, value } = filter;

  useEffect(() => {
    if (data) {
      setColumnOptions(data.map((planet) => planet.name));
    }
  }, [data]);

  function handleFilterBtn() {
    setFilters([...filters, filter]);
    const i = columnOptions.indexOf(filter.column);
    columnOptions.splice(i, 1);
    setFilter({ ...DEFAULT_FILTER, column: columnOptions[0] });
  }

  function removeFilter(colValue) {
    setFilters(filters.filter((fil) => fil.column !== colValue));
  }

  console.log(query);
  return (
    <Box
      sx={
        { display: 'flex', flexDirection: 'column', dminWidth: 120, maxWidth: 3000 }
      }
    >
      {/* <FormControl> */}
      <Autocomplete
        disablePortal
        isOptionEqualToValue={ (option, fieldValue) => option.id === fieldValue.id }
        id="nameFilter"
        options={ columnOptions }
        value={ query }
        onInputChange={ (event, newQuery) => setQuery(newQuery || event.target.value) }
        sx={ { width: 300 } }
        renderInput={ (params) => <TextField { ...params } label="Planet Search" /> }
      />
      {/* </FormControl> */}

      <Box>

        <FormControl>
          <InputLabel id="filter-label">Filter</InputLabel>
          <Select
            labelId="filter-field-label"
            id="filter-field"
            value={ column }
            label="filter-field"
            onChange={ ({ target }) => setFilter({ ...filter, column: target.value }) }
          >
            {DEFAULT_OPTIONS.map((opt, i) => (
              <MenuItem key={ i } value={ opt.value }>{opt.name}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl>
          <Select
            labelId="comparison-field-label"
            id="comparison-field"
            value={ comparison }
            label="comparison-field"
            onChange={
              ({ target }) => setFilter({ ...filter, comparison: target.value })
            }
          >
            {COMPARISON_OPTIONS.map((opt, i) => (
              <MenuItem key={ i } value={ opt.value }>{opt.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          id="value"
          label="Value"
          type="number"
          value={ value }
          onChange={ ({ target }) => setFilter({ ...filter, value: target.value }) }
          InputLabelProps={ {
            shrink: true,
          } }
        />

        <FormControl />
        <Button
          variant="outlined"
          onClick={ handleFilterBtn }
          type="button"
        >
          Filter
        </Button>
      </Box>

      <Box sx={ { display: 'flex', flexDirection: 'column', width: '25em' } }>
        <List dense>
          {filters.length && filters.map((fil, i) => (
            <ListItem
              key={ i }
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="delete"
                  type="button"
                  id={ `${fil.column}-${i}` }
                  onClick={ () => removeFilter(fil.column) }
                >
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText
                primary={ `${fil.column} | ${fil.comparison} | ${fil.value}` }

                // secondary={ secondary ? 'Secondary text' : null }
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}

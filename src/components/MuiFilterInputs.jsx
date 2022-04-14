import React, { useContext, useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {
  Button, FormControl, Box, Grid, Select, MenuItem,
  List, ListItem, IconButton, ListItemText, Fade,
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

// const boxStyle = {
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   dminWidth: 120,
//   maxWidth: 3000,
// };
export default function MuiFilterInputs() {
  const { query, setQuery, data, filters, setFilters } = useContext(PlanetsContext);
  const [filter, setFilter] = useState(DEFAULT_FILTER);
  const [columnOptions, setColumnOptions] = useState(DEFAULT_OPTIONS);
  const [show, setShow] = useState(false);
  const { column, comparison, value } = filter;

  useEffect(() => {
    if (data) {
      setColumnOptions(data.map((planet) => planet.name));
    }
    if (filters.length) {
      return setShow(true);
    }
    return setShow(false);
  }, [data, filters.length]);

  function handleFilterBtn() {
    setFilters([...filters, filter]);
    const i = columnOptions.indexOf(filter.column);
    columnOptions.splice(i, 1);
    setFilter({ ...DEFAULT_FILTER, column: columnOptions[0] });
  }

  function removeFilter(colValue) {
    setFilters(filters.filter((fil) => fil.column !== colValue));
  }

  function isOptionEqualToValue(option, fieldValue) {
    if (!fieldValue) return true;
    if (option.name) return option.name.includes(fieldValue);
    if (!option.name) return option.toLowerCase().includes(fieldValue.toLowerCase());
  }

  return (
    <Grid
      container
      spacing={ 0 }
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Autocomplete
        disablePortal
        fullWidth="true"
        isOptionEqualToValue={ (opt, fldValue) => isOptionEqualToValue(opt, fldValue) }
        id="nameFilter"
        size="small"
        options={ columnOptions }
        value={ query }
        onInputChange={ (event, newQuery) => setQuery(newQuery || event.target.value) }
        sx={ { width: '22em', py: '1em' } }
        renderInput={ (params) => <TextField { ...params } label="Planet Search" /> }
      />

      <Box fullWidth="true">

        <FormControl>
          <Select
            labelId="filter-field-label"
            id="filter-field"
            size="small"
            sx={ { width: '9.8em' } }
            value={ column }
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
            size="small"
            value={ comparison }
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
          type="number"
          size="small"
          value={ value }
          sx={ { width: '4em' } }
          onChange={ ({ target }) => setFilter({ ...filter, value: target.value }) }
          InputLabelProps={ {
            shrink: true,
          } }
        />

        <FormControl />
        <Button
          variant="outlined"
          sx={ { height: '2.85em' } }
          onClick={ handleFilterBtn }
          type="button"
        >
          Filter
        </Button>
      </Box>

      <Box sx={ { display: 'flex', flexDirection: 'column', width: '23.5em' } }>
        <Fade in={ show }>
          <List dense>
            {filters.length ? filters.map((fil, i) => (
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

                />
              </ListItem>
            ))
              : <p> </p>}
          </List>
        </Fade>

      </Box>
    </Grid>
  );
}

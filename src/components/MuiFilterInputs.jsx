import React, { useContext, useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { FormControl, Box, InputLabel, Select, MenuItem } from '@mui/material';
import PlanetsContext from '../context/PlanetsContext';

const DEFAULT_OPTIONS = [
  { name: 'Population', value: 'population' },
  { name: 'Orbital Period', value: 'orbital_period' },
  { name: 'Diameter', value: 'diameter' },
  { name: 'Rotation Period', value: 'rotation_period' },
  { name: 'Surface Water', value: 'surface_water' },
];

export default function MuiFilterInputs() {
  const { query, setQuery, data } = useContext(PlanetsContext);
  const [columnOptions, setColumnOptions] = useState(DEFAULT_OPTIONS);

  useEffect(() => {
    if (data) {
      setColumnOptions(data.map((planet) => planet.name));
    }
  }, [data]);

  console.log(query);
  return (
    <Box sx={ { minWidth: 120 } }>
      <FormControl fullWidth>

        <Autocomplete
          disablePortal
          isOptionEqualToValue={ (option, value) => option.id === value.id }
          id="nameFilter"
          options={ columnOptions }
          value={ query }
          onInputChange={ (newQuery) => setQuery(newQuery) }
          sx={ { width: 300 } }
          renderInput={ (params) => <TextField { ...params } label="Planet Search" /> }
        />
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={ age }
          label="Age"
          onChange={ handleChange }
        >
          <MenuItem value={ 10 }>Ten</MenuItem>
          <MenuItem value={ 20 }>Twenty</MenuItem>
          <MenuItem value={ 30 }>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

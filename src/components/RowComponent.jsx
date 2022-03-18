/* eslint-disable react/jsx-max-depth */
import PropTypes from 'prop-types';
import React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function getId(url) {
  if (url) {
    const param = url.match(/(\d+)/);
    return +param[0];
  }
}

export default function RowComponent({ planetsData }) {
  console.log(planetsData);

  const {
    name,
    climate,
    diameter,
    films,
    gravity,
    orbital_period: orbital,
    population,
    rotation_period: rotation,
    surface_water: water,
    terrain,
    url,
  } = planetsData;

  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TableRow sx={ { '& > *': { borderBottom: 'unset' } } }>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={ () => setOpen(!open) }
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {name}
        </TableCell>
        <TableCell align="left">{getId(url)}</TableCell>
        <TableCell align="left">{rotation}</TableCell>
        <TableCell align="left">{orbital}</TableCell>
        <TableCell align="left">{diameter}</TableCell>
        <TableCell align="left">{climate}</TableCell>
        <TableCell align="left">{gravity}</TableCell>
        <TableCell align="left">{terrain}</TableCell>
        <TableCell align="left">{water}</TableCell>
        <TableCell align="left">{population}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={ { paddingBottom: 0, paddingTop: 0 } } colSpan={ 6 }>
          <Collapse in={ open } timeout="auto" unmountOnExit>
            <Box sx={ { margin: 1 } }>
              {/* <Typography variant="h6" gutterBottom component="div">
                Films
              </Typography> */}
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Films</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  { films && films.map((film) => (
                    <TableRow key={ film }>
                      <TableCell component="th" scope="row">
                        {film}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

RowComponent.propTypes = {
  planetsData: PropTypes.shape({
    climate: PropTypes.string.isRequired,
    diameter: PropTypes.string.isRequired,
    films: PropTypes.arrayOf(PropTypes.string),
    gravity: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    orbital_period: PropTypes.string.isRequired,
    population: PropTypes.string.isRequired,
    rotation_period: PropTypes.string.isRequired,
    surface_water: PropTypes.string.isRequired,
    terrain: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

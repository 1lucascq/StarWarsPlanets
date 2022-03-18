import React, { useContext, useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import RowComponent from './RowComponent';
import PlanetsContext from '../context/PlanetsContext';
import orderData from '../helpers/orderData';

export default function CollapsibleTable() {
  const { renderData, query, filters, data, order } = useContext(PlanetsContext);
  const [orderedData, setOrderedData] = useState([]);

  useEffect(() => {
    setOrderedData(orderData(order, data));
  }, [data, order]);

  console.log('renderData no table é:', renderData);

  return (
    <TableContainer component={ Paper }>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Name</TableCell>
            <TableCell align="left">ID</TableCell>
            <TableCell align="left">Rotation Period</TableCell>
            <TableCell align="left">Orbital Period</TableCell>
            <TableCell align="left">Diameter</TableCell>
            <TableCell align="left">Climate</TableCell>
            <TableCell align="left">Gravity</TableCell>
            <TableCell align="left">Terrain</TableCell>
            <TableCell align="left">Surface Water</TableCell>
            <TableCell align="left">Population</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filters.length || order.column !== 'name' || !!query
            ? renderData.length && renderData.map((planet) => (
              <RowComponent
                key={ planet.name }
                planetsData={ planet }
              />))
            : orderedData.map((planet) => (
              <RowComponent
                ordered
                key={ planet.name }
                planetsData={ planet }
              />))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

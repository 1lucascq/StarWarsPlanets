import React, { useContext, useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableSortLabel from '@mui/material/TableSortLabel';
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
  const [sortOrder, setSortOrder] = useState('');
  const [sortOrderBy, setSortOrderBy] = useState('');

  const tableHeaders = [
    { name: 'Name', id: 'name' }, { name: 'ID', id: 'id' },
    { name: 'Rotation Period', id: 'rotationPeriod' },
    { name: 'Orbital Period', id: 'orbitalPeriod' },
    { name: 'Diameter', id: 'diameter' }, { name: 'Climate', id: 'climate' },
    { name: 'Gravity', id: 'gravity' }, { name: 'Terrain', id: 'terrain' },
    { name: 'Surface Water', id: 'surfaceWater' },
    { name: 'Population', id: 'population' },
  ];

  useEffect(() => {
    setOrderedData(orderData(order, data));
  }, [data, order]);

  function handleSort(cellId) {
    const isAsc = sortOrderBy === cellId && sortOrder === 'asc';
    console.log(isAsc, cellId, sortOrderBy);
    setSortOrder(isAsc ? 'desc' : 'asc');
    setSortOrderBy(cellId);
  }

  return (
    <TableContainer component={ Paper }>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            {tableHeaders.map(({ name, id }) => (
              <TableCell key={ id }>
                <TableSortLabel
                  active={ sortOrderBy === id }
                  direction={ sortOrderBy === id ? sortOrder : 'asc' }
                  onClick={ () => handleSort(id) }
                >
                  {name}
                </TableSortLabel>
              </TableCell>
            ))}
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

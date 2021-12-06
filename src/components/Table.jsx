import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetsContext';
import filterResults from '../helpers/filterResults';

export default function Table() {
  const { data, query } = useContext(PlanetContext);
  if (!data.length) return <p>Loading</p>;
  const renderData = query ? filterResults(query, data) : data;
  console.log('rende');
  // console.log(Object.keys(data.results[0]));
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>

      <tbody>
        { renderData.map((planet) => {
          const { name, created, climate, diameter, edited,
            films, gravity, orbital_period: orbital,
            population, rotation_period: rotation, surface_water: water,
            terrain, url } = planet;
          return (
            <tr key={ name }>
              <td>{name}</td>
              <td>{rotation}</td>
              <td>{orbital}</td>
              <td>{diameter}</td>
              <td>{climate}</td>
              <td>{gravity}</td>
              <td>{terrain}</td>
              <td>{water}</td>
              <td>{population}</td>
              <td>{films.map((film) => film)}</td>
              <td>{created}</td>
              <td>{edited}</td>
              <td>{url}</td>
            </tr>
          );
        })}
      </tbody>

    </table>
  );
}

import React, { useState, useContext } from 'react';
import MyContext from '../context/MyContext';

function SortPlanets() {
  const columns = ['name', 'rotation_period', 'orbital_period',
    'diameter', 'climate', 'gravity', 'terrain', 'surface_water',
    'population', 'films', 'created', 'edited', 'url'];
  const [column, setColumn] = useState('name');
  const [radioValue, setRadioValue] = useState('ASC');
  const { filteredPlanets, setFilteredPlanets } = useContext(MyContext);

  function handleClick() {
    switch (radioValue) {
    case 'ASC':
      setFilteredPlanets(filteredPlanets
        .sort((a, b) => b[column] - [column]));
      break;
    case 'DESC':
      setFilteredPlanets(filteredPlanets
        .sort((a, b) => Number.isNaN(+a[column] - +(b[column]))));
      break;
    default:
    }
  }

  return (
    <div>
      Ordenar:
      <select
        data-testid="column-sort"
        name="column"
        value={ column }
        onChange={ ({ target }) => setColumn(target.value) }
      >
        {columns.map((option) => (
          <option key={ option } value={ option }>
            {option}
          </option>
        ))}
      </select>
      <div className="radios-container">
        <label htmlFor="ingrediente">
          <input
            id="ingrediente"
            type="radio"
            value="ASC"
            name="radio-Sort"
            data-testid="column-sort-input-asc"
            onChange={ ({ target }) => setRadioValue(target.value) }
          />
          Ascendente
        </label>
        <label htmlFor="input-DESC">
          <input
            id="input-DESC"
            type="radio"
            value="DESC"
            name="radio-Sort"
            data-testid="column-sort-input-desc"
            onChange={ ({ target }) => setRadioValue(target.value) }
          />
          Descendente
        </label>
        <button
          type="button"
          data-testid="column-sort-button"
          onClick={ handleClick }
        >
          Ordenar
        </button>
      </div>
    </div>
  );
}

export default SortPlanets;

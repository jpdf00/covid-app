import React from 'react';
// import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const STATUS = ['Confimed', 'Deaths', 'Recovered'];

const Filter = () => (
  <select name="filter">
    {STATUS.map((category) => (
      <option key={uuidv4()} value={category}>
        {category}
      </option>
    ))}
  </select>
);

export { STATUS, Filter };

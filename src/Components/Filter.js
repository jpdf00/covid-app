import React from 'react';
// import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import '../Assets/Stylesheets/Filter.css';

const STATUS = ['Confirmed', 'Deaths', 'Recovered'];

const Filter = () => (
  <select name="filter" className="filter">
    {STATUS.map((category) => (
      <option key={uuidv4()} value={category}>
        {category}
      </option>
    ))}
  </select>
);

export { STATUS, Filter };

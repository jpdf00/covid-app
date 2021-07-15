import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../Actions/index';
import '../Assets/Stylesheets/Filter.css';

const STATUS = ['Confirmed', 'Deaths', 'Recovered'];

const Filter = () => {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    const data = e.target.value;
    dispatch(changeFilter(data));
  };

  return (
    <select name="filter" className="filter" value={filter} onChange={handleFilterChange}>
      {STATUS.map((category) => (
        <option key={uuidv4()} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default Filter;

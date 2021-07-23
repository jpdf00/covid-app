import React from 'react';
import PropTypes from 'prop-types';
import '../Assets/Stylesheets/Earth.css';

const AllDays = (props) => {
  const { country } = props;

  return (
    <div className="topContainer">
      <h3 className="topTitle">{country}</h3>
    </div>
  );
};

AllDays.propTypes = { country: PropTypes.string.isRequired };

export default AllDays;

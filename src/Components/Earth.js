import React from 'react';
import PropTypes from 'prop-types';
import '../Assets/Stylesheets/Earth.css';

const Earth = (props) => {
  const { globe, filter } = props;
  const d = new Date(globe.Date);

  function changeStats() {
    if (filter === 'Confirmed') {
      return globe.TotalConfirmed;
    }
    if (filter === 'Deaths') {
      return globe.TotalDeaths;
    }
    if (filter === 'Recovered') {
      return globe.TotalRecovered;
    }
    return 0;
  }

  return (
    <div className="topContainer">
      <h2 className="topTitle">{`${d.getDate()}/${d.getMonth() + 1}/${d.getUTCFullYear()}`}</h2>

      <p className="topText">
        {
          `Total ${filter}:
          ${changeStats()}`
        }
      </p>
    </div>
  );
};

Earth.propTypes = {
  globe: PropTypes.shape({
    NewConfirmed: PropTypes.number.isRequired,
    TotalConfirmed: PropTypes.number.isRequired,
    NewDeaths: PropTypes.number.isRequired,
    TotalDeaths: PropTypes.number.isRequired,
    NewRecovered: PropTypes.number.isRequired,
    TotalRecovered: PropTypes.number.isRequired,
    Date: PropTypes.string.isRequired,
  }).isRequired,
  filter: PropTypes.string.isRequired,
};

export default Earth;

import React from 'react';
import PropTypes from 'prop-types';
import '../Assets/Stylesheets/Earth.css';

const Dayly = (props) => {
  const { day, filter } = props;
  const d = new Date(day.Date);

  function changeStats() {
    if (filter === 'Confirmed') {
      return day.Confirmed;
    }
    if (filter === 'Deaths') {
      return day.Deaths;
    }
    if (filter === 'Recovered') {
      return day.Recovered;
    }
    return 0;
  }

  return (
    <div className="card">
      <h3 className="topTitle">{`${d.getDate()}/${d.getMonth() + 1}/${d.getUTCFullYear()}`}</h3>
      <p className="topText">{changeStats()}</p>
    </div>
  );
};

Dayly.propTypes = {
  day: PropTypes.shape({
    ID: PropTypes.string.isRequired,
    Country: PropTypes.string.isRequired,
    CountryCode: PropTypes.string.isRequired,
    Province: PropTypes.string.isRequired,
    City: PropTypes.string.isRequired,
    CityCode: PropTypes.string.isRequired,
    Lat: PropTypes.string.isRequired,
    Lon: PropTypes.string.isRequired,
    Confirmed: PropTypes.number.isRequired,
    Deaths: PropTypes.number.isRequired,
    Recovered: PropTypes.number.isRequired,
    Active: PropTypes.number.isRequired,
    Date: PropTypes.string.isRequired,
  }).isRequired,
  filter: PropTypes.string.isRequired,
};

export default Dayly;

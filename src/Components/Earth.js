import React from 'react';
import PropTypes from 'prop-types';
import '../Assets/Stylesheets/Earth.css';

const Earth = (props) => {
  const { globe } = props;
  const d = new Date(globe.Date);
  const test = 'confirmed';

  function filter() {
    if (test === 'confirmed') {
      return globe.TotalConfirmed;
    }
    if (test === 'deaths') {
      return globe.TotalDeaths;
    }
    if (test === 'recovered') {
      return globe.TotalRecovered;
    }
    return 0;
  }

  return (
    <div className="topContainer">
      <h2 className="topTitle">{`${d.getDate()}/${d.getMonth() + 1}/${d.getUTCFullYear()}`}</h2>

      <p className="topText">
        {
          `Total ${test}:
          ${filter()}`
        }
      </p>
      {/*
      <p className="topText">
        {
          `Total Deaths:
          ${globe.TotalDeaths}`
        }
      </p>
      <p className="topText">
        {
          `Total Recovered:
          ${globe.TotalRecovered}`
        }
      </p>
      */}
    </div>
  );
};

Earth.propTypes = {
  globe: PropTypes.arrayOf(PropTypes.shape({
    NewConfirmed: PropTypes.number.isRequired,
    TotalConfirmed: PropTypes.number.isRequired,
    NewDeaths: PropTypes.number.isRequired,
    TotalDeaths: PropTypes.number.isRequired,
    NewRecovered: PropTypes.number.isRequired,
    TotalRecovered: PropTypes.number.isRequired,
    Date: PropTypes.string.isRequired,
  })).isRequired,
};

export default Earth;

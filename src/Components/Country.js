import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../Assets/Stylesheets/Earth.css';

const Country = (props) => {
  const { country, filter, handleCountryChange } = props;

  function changeStats() {
    if (filter === 'Confirmed') {
      return country.TotalConfirmed;
    }
    if (filter === 'Deaths') {
      return country.TotalDeaths;
    }
    if (filter === 'Recovered') {
      return country.TotalRecovered;
    }
    return 0;
  }

  return (
    <Link to={`${country.Slug}`} onClick={() => handleCountryChange(country.Slug)}>
      <div className="card">
        <h3 className="topTitle">{country.Country}</h3>

        <p className="topText">
          {
            `Total ${filter}:
            ${changeStats()}`
          }
        </p>
      </div>
    </Link>
  );
};

Country.propTypes = {
  country: PropTypes.shape({
    ID: PropTypes.string.isRequired,
    Country: PropTypes.string.isRequired,
    CountryCode: PropTypes.string.isRequired,
    Slug: PropTypes.string.isRequired,
    NewConfirmed: PropTypes.number.isRequired,
    TotalConfirmed: PropTypes.number.isRequired,
    NewDeaths: PropTypes.number.isRequired,
    TotalDeaths: PropTypes.number.isRequired,
    NewRecovered: PropTypes.number.isRequired,
    TotalRecovered: PropTypes.number.isRequired,
    Date: PropTypes.string.isRequired,
  }).isRequired,
  filter: PropTypes.string.isRequired,
  handleCountryChange: PropTypes.func.isRequired,
};

export default Country;

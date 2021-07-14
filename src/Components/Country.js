import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../Assets/Stylesheets/Earth.css';

const Country = (props) => {
  const { country } = props;
  const test = 'confirmed';

  function filter() {
    if (test === 'confirmed') {
      return country.TotalConfirmed;
    }
    if (test === 'deaths') {
      return country.TotalDeaths;
    }
    if (test === 'recovered') {
      return country.TotalRecovered;
    }
    return 0;
  }

  return (
    <Link to="/Daylies">
      <div className="card">
        <h3 className="topTitle">{country.Country}</h3>
        <p className="topText">
          {
            `Total ${test}:
            ${filter()}`
          }
        </p>
      </div>
    </Link>
  );
};

Country.propTypes = {
  country: PropTypes.arrayOf(PropTypes.shape({
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
  })).isRequired,
};

export default Country;

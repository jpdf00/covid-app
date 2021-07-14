import React from 'react';
import Earth from './Earth';
import Country from './Country';
import SUMMARY from '../States/initialState';

const CountriesList = () => {
  const countries = SUMMARY.Countries;
  const globe = SUMMARY.Global;

  return (
    <div>
      <Earth globe={globe} />
      {countries.map((country) => (
        <Country key={country.ID} country={country} />
      ))}
    </div>
  );
};

export default CountriesList;

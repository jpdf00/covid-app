import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeGlobalData, changeCountryData, changeCountry } from '../Actions/index';
import Earth from './Earth';
import Country from './Country';

const CountriesList = () => {
  const filter = useSelector((state) => state.filter);
  const countries = useSelector((state) => state.countryData);
  const globe = useSelector((state) => state.globalData);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://api.covid19api.com/summary', { method: 'GET', redirect: 'follow' })
      .then((resp) => (resp.json()))
      .then((resp) => {
        dispatch(changeGlobalData(resp.Global));
        dispatch(changeCountryData(resp.Countries));
      });
  }, [dispatch]);

  const handleCountryChange = (data) => {
    dispatch(changeCountry(data));
  };

  return (
    <div>
      <Earth globe={globe} filter={filter} />
      {countries.map((country) => (
        <Country
          key={country.ID}
          country={country}
          filter={filter}
          handleCountryChange={handleCountryChange}
        />
      ))}
    </div>
  );
};

export default CountriesList;

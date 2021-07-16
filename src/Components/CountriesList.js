import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeGlobalData, changeCountryData, changeCountry } from '../Actions/index';
import Earth from './Earth';
import Country from './Country';
import '../Assets/Stylesheets/NotFound.css';

const CountriesList = () => {
  const filter = useSelector((state) => state.filter);
  const countries = useSelector((state) => state.countryData);
  const globe = useSelector((state) => state.globalData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://api.covid19api.com/summary', { method: 'GET', redirect: 'follow' })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        }
        throw resp;
      })
      .then((resp) => {
        dispatch(changeGlobalData(resp.Global));
        dispatch(changeCountryData(resp.Countries));
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [dispatch]);

  const handleCountryChange = (data) => {
    dispatch(changeCountry(data));
  };

  if (loading) {
    return (
      <div className="processing" />
    );
  }

  if (error) {
    return (
      <div className="NotFound" />
    );
  }

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

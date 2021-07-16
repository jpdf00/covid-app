import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeDayData } from '../Actions/index';
import AllDays from './AllDays';
import Dayly from './Dayly';
import '../Assets/Stylesheets/NotFound.css';

const DayliesList = () => {
  const filter = useSelector((state) => state.filter);
  const country = useSelector((state) => state.country);
  const days = useSelector((state) => state.dayData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const url = `https://api.covid19api.com/country/${country}`;

  useEffect(() => {
    fetch(url, { method: 'GET', redirect: 'follow' })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        }
        throw resp;
      })
      .then((resp) => {
        dispatch(changeDayData(resp));
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [dispatch]);

  if (loading) {
    return (
      <div className="processing">
        Processing
      </div>
    );
  }

  if (error) {
    return (
      <div className="NotFound" />
    );
  }

  return (
    <div>
      <AllDays country={days[0].Country} />
      {days.map((day) => (
        <Dayly key={day.ID} day={day} filter={filter} />
      ))}
    </div>
  );
};

export default DayliesList;

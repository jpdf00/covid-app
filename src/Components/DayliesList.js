import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeDayData } from '../Actions/index';
import AllDays from './AllDays';
import Dayly from './Dayly';

const DayliesList = () => {
  const filter = useSelector((state) => state.filter);
  const country = useSelector((state) => state.country);
  const days = useSelector((state) => state.dayData);
  const dispatch = useDispatch();
  const url = `https://api.covid19api.com/country/${country}`;

  useEffect(() => {
    fetch(url, { method: 'GET', redirect: 'follow' })
      .then((resp) => (resp.json()))
      .then((resp) => {
        dispatch(changeDayData(resp));
      });
  }, [dispatch]);

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

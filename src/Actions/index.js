const CHANGE_COUNTRY = 'CHANGE_COUNTRY';
const CHANGE_FILTER = 'CHANGE_FILTER';
const CHANGE_GLOBAL_DATA = 'CHANGE_GLOBAL_DATA';
const CHANGE_COUNTRY_DATA = 'CHANGE_COUNTRY_DATA';
const CHANGE_DAY_DATA = 'CHANGE_DAY_DATA';

const changeCountry = (country) => ({
  type: CHANGE_COUNTRY,
  payload: country,
});

const changeFilter = (filter) => ({
  type: CHANGE_FILTER,
  payload: filter,
});

const changeGlobalData = (globalData) => ({
  type: CHANGE_GLOBAL_DATA,
  payload: globalData,
});

const changeCountryData = (countryData) => ({
  type: CHANGE_COUNTRY_DATA,
  payload: countryData,
});

const changeDayData = (daylyData) => ({
  type: CHANGE_DAY_DATA,
  payload: daylyData,
});

export {
  changeCountry,
  changeFilter,
  changeGlobalData,
  changeCountryData,
  changeDayData,
  CHANGE_COUNTRY,
  CHANGE_FILTER,
  CHANGE_GLOBAL_DATA,
  CHANGE_COUNTRY_DATA,
  CHANGE_DAY_DATA,
};

import { SUMMARY, BRAZIL } from './mockData';
import countryReducer from '../Reducers/country';
import countryDataReducer from '../Reducers/countryData';
import dayDataReducer from '../Reducers/dayData';
import filterReducer from '../Reducers/filter';
import globalDataReducer from '../Reducers/globalData';
import {
  changeCountry,
  changeCountryData,
  changeDayData,
  changeFilter,
  changeGlobalData,
} from '../Actions/index';

describe('Country Reducer', () => {
  it('It should return the payload', () => {
    const country = 'Albania';
    expect(countryReducer(undefined, changeCountry(country))).toBe('Albania');
  });

  it('It should not return an empty payload', () => {
    const country = null;
    expect(countryReducer(undefined, changeCountry(country))).not.toBeNull();
  });

  it('It should return the initial state', () => {
    const country = null;
    expect(countryReducer(undefined, changeCountry(country))).toBe('Brazil');
  });
});

describe('Country Data Reducer', () => {
  it('It should return the payload', () => {
    const countryData = SUMMARY.Countries;
    expect(countryDataReducer(undefined, changeCountryData(countryData)))
      .toEqual(SUMMARY.Countries);
  });

  it('It should not return an empty payload', () => {
    const countryData = null;
    expect(countryDataReducer(undefined, changeCountryData(countryData))).not.toBeNull();
  });

  it('It should return the initial state', () => {
    const countryData = null;
    expect(countryDataReducer(undefined, changeCountryData(countryData))).toEqual([]);
  });
});

describe('Day Data Reducer', () => {
  it('It should return the payload', () => {
    const dayData = BRAZIL;
    expect(dayDataReducer(undefined, changeDayData(dayData))).toEqual(BRAZIL);
  });

  it('It should not return an empty payload', () => {
    const dayData = null;
    expect(dayDataReducer(undefined, changeDayData(dayData))).not.toBeNull();
  });

  it('It should return the initial state', () => {
    const dayData = null;
    expect(dayDataReducer(undefined, changeDayData(dayData))).toEqual([]);
  });
});

describe('Filter Reducer', () => {
  it('It should return the payload', () => {
    const filter = 'Deaths';
    expect(filterReducer(undefined, changeFilter(filter))).toBe('Deaths');
  });

  it('It should not return an empty payload', () => {
    const filter = null;
    expect(filterReducer(undefined, changeFilter(filter))).not.toBeNull();
  });

  it('It should return the initial state', () => {
    const filter = null;
    expect(filterReducer(undefined, changeFilter(filter))).toBe('Confirmed');
  });
});

describe('Global Data Reducer', () => {
  it('It should return the payload', () => {
    const globalData = SUMMARY.Global;
    expect(globalDataReducer(undefined, changeGlobalData(globalData))).toEqual(SUMMARY.Global);
  });

  it('It should not return an empty payload', () => {
    const globalData = null;
    expect(globalDataReducer(undefined, changeGlobalData(globalData))).not.toBeNull();
  });

  it('It should return the initial state', () => {
    const globalData = null;
    expect(globalDataReducer(undefined, changeGlobalData(globalData))).toEqual({});
  });
});

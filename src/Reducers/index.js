import { combineReducers } from 'redux';
import countryReducer from './country';
import filterReducer from './filter';
import countryDataReducer from './countryData';
import globalDataReducer from './globalData';
import dayDataReducer from './dayData';

const REDUCERS_LIST = {
  country: countryReducer,
  filter: filterReducer,
  countryData: countryDataReducer,
  globalData: globalDataReducer,
  dayData: dayDataReducer,
};

const rootReducer = combineReducers(REDUCERS_LIST);

export default rootReducer;

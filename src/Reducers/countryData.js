import { CHANGE_COUNTRY_DATA } from '../Actions/index';

const countryDataReducer = (state = [], action) => {
  let newState = [...state];
  if (action.payload) {
    switch (action.type) {
      case CHANGE_COUNTRY_DATA:
        newState = action.payload;
        return newState;
      default:
        return newState;
    }
  }
  return newState;
};

export default countryDataReducer;

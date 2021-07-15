import { CHANGE_COUNTRY_DATA } from '../Actions/index';

const countryDataReducer = (state = [], action) => {
  let newState = [...state];
  switch (action.type) {
    case CHANGE_COUNTRY_DATA:
      newState = action.payload;
      return newState;
    default:
      return newState;
  }
};

export default countryDataReducer;

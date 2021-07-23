import { CHANGE_COUNTRY } from '../Actions/index';

const countryReducer = (state = 'Brazil', action) => {
  let newState = state;
  if (action.payload) {
    switch (action.type) {
      case CHANGE_COUNTRY:
        newState = action.payload;
        return newState;
      default:
        return newState;
    }
  }
  return newState;
};

export default countryReducer;

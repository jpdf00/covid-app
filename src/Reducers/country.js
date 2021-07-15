import { CHANGE_COUNTRY } from '../Actions/index';

const countryReducer = (state = 'Brazil', action) => {
  let newState = state;
  switch (action.type) {
    case CHANGE_COUNTRY:
      newState = action.payload;
      return newState;
    default:
      return newState;
  }
};

export default countryReducer;

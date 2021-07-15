import { CHANGE_FILTER } from '../Actions/index';

const filterReducer = (state = 'Confirmed', action) => {
  let newState = state;
  switch (action.type) {
    case CHANGE_FILTER:
      newState = action.payload;
      return newState;
    default:
      return newState;
  }
};

export default filterReducer;

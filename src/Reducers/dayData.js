import { CHANGE_DAY_DATA } from '../Actions/index';

const dayDataReducer = (state = [], action) => {
  let newState = [...state];
  if (action.payload) {
    switch (action.type) {
      case CHANGE_DAY_DATA:
        newState = action.payload;
        return newState;
      default:
        return newState;
    }
  }
  return newState;
};

export default dayDataReducer;

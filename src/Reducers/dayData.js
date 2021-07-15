import { CHANGE_DAY_DATA } from '../Actions/index';

const dayDataReducer = (state = [], action) => {
  let newState = [...state];
  switch (action.type) {
    case CHANGE_DAY_DATA:
      newState = action.payload;
      return newState;
    default:
      return newState;
  }
};

export default dayDataReducer;

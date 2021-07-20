import { CHANGE_GLOBAL_DATA } from '../Actions/index';

const globalDataReducer = (state = {}, action) => {
  let newState = { ...state };
  if (action.payload) {
    switch (action.type) {
      case CHANGE_GLOBAL_DATA:
        newState = action.payload;
        return newState;
      default:
        return newState;
    }
  }
  return newState;
};

export default globalDataReducer;

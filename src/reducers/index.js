// import actions
import { LOGIN_SUCCESS } from "../actions";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, loggingIn: false };
    default:
      return state;
  }
};

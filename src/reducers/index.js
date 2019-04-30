// import actions
import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE
} from '../actions';

const initialState = {
  loggingIn: false,
  loggedIn: false,
  fetchingUser: false,
  user: {},
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        loggingIn: true,
        error: null
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        loggedIn: true
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        loggingIn: false,
        error: action.payload
      };
    case REGISTER_USER:
      return {
        ...state,
        loggingIn: true,
        error: null
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        loggedIn: true
      };
    case REGISTER_USER_FAILURE:
      return {
        ...state,
        loggingIn: false,
        error: action.payload
      };
    case FETCH_USER:
      return {
        ...state,
        fetchingUser: true,
        error: null
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        fetchingUser: false,
        user: action.payload
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        fetchingUser: false,
        error: action.payload
      };
    default:
      return state;
  }
};

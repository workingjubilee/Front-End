import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  EDIT_USER_REQUEST,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE
} from 'actions';

import { initialState } from './initialState';

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: true,
        error: null
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        loggedIn: true,
        user: {
          ...action.payload,
          username: localStorage.getItem('Auth0username')
        }
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        error: action.payload
      };

    case LOGOUT_SUCCESS:
      return {
        state: initialState
      };

    case EDIT_USER_REQUEST:
      return {
        ...state,
        error: null
      };
    case EDIT_USER_SUCCESS:
      return {
        ...state,
        user: action.payload
      };
    case EDIT_USER_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    case FETCH_USER_REQUEST:
      return {
        ...state,
        fetchingUser: true,
        error: null
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        fetchingUser: false,
        user: {
          ...action.payload,
          username: localStorage.getItem('Auth0username')
        }
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
}

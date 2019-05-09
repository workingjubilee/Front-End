// import actions
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  EDIT_USER,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  FETCH_MEDS_REQUEST,
  FETCH_MEDS_SUCCESS,
  FETCH_MEDS_FAILURE,
  FETCH_DIARY_REQUEST,
  FETCH_DIARY_SUCCESS,
  FETCH_DIARY_FAILURE,
  FETCH_REMS_REQUEST,
  FETCH_REMS_SUCCESS,
  FETCH_REMS_FAILURE
} from '../actions';
// import Auth from '../Auth/Auth';

// const auth = new Auth();

const initialState = {
  loggingIn: false,
  loggedIn: false,
  fetchingUser: false,
  isAuthenticated: false,
  user: {},
  fetchingMeds: false,
  meds: [],
  fetchingDiary: false,
  diary: [],
  fetchingRems: false,
  rems: [],
  filteredRems: [],
  error: null
};

export default (state = initialState, action) => {
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
        user: action.payload
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        error: action.payload
      };
    case EDIT_USER:
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
        user: action.payload
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        fetchingUser: false,
        error: action.payload
      };

    case FETCH_MEDS_REQUEST:
      return {
        ...state,
        fetchingMeds: true,
        error: null
      };
    case FETCH_MEDS_SUCCESS:
      return {
        ...state,
        fetchingMeds: false,
        meds: action.payload
      };
    case FETCH_MEDS_FAILURE:
      return {
        ...state,
        fetchingMeds: false,
        error: action.payload
      };

    case FETCH_DIARY_REQUEST:
      return {
        ...state,
        fetchingDiary: true,
        error: null
      };
    case FETCH_DIARY_SUCCESS:
      return {
        ...state,
        fetchingDiary: false,
        diary: action.payload
      };
    case FETCH_DIARY_FAILURE:
      return {
        ...state,
        fetchingDiary: false,
        error: action.payload
      };
    case FETCH_REMS_REQUEST:
      return {
        ...state,
        fetchingRems: true,
        error: null
      };
    case FETCH_REMS_SUCCESS:
      return {
        ...state,
        fetchingRems: false,
        rems: action.payload
      };
    case FETCH_REMS_FAILURE:
      return {
        ...state,
        fetchingRems: false,
        error: action.payload
      };

    default:
      return state;
  }
};

// import actions
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  EDIT_USER_REQUEST,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  FETCH_MEDS_REQUEST,
  FETCH_MEDS_SUCCESS,
  FETCH_MEDS_FAILURE,
  ADD_MED_REQUEST,
  ADD_MED_SUCCESS,
  ADD_MED_FAILURE,
  EDIT_MED_REQUEST,
  EDIT_MED_SUCCESS,
  EDIT_MED_FAILURE,
  DELETE_MED_REQUEST,
  DELETE_MED_SUCCESS,
  DELETE_MED_FAILURE,
  FETCH_DIARY_REQUEST,
  FETCH_DIARY_SUCCESS,
  FETCH_DIARY_FAILURE,
  EDIT_DIARY_REQUEST,
  EDIT_DIARY_SUCCESS,
  EDIT_DIARY_FAILURE,
  DELETE_DIARY_REQUEST,
  DELETE_DIARY_SUCCESS,
  DELETE_DIARY_FAILURE,
  FETCH_REMS_REQUEST,
  FETCH_REMS_SUCCESS,
  FETCH_REMS_FAILURE,
  ADD_REMS_REQUEST,
  ADD_REMS_SUCCESS,
  ADD_REMS_FAILURE
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
  addingMed: false,
  editingMed: false,
  deletingMed: false,
  meds: [],
  fetchingDiary: false,
  editingDiary: false,
  deletingDiary: false,
  diary: [],
  fetchingRems: false,
  addingRems: false,
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
    case ADD_MED_REQUEST:
      return {
        ...state,
        addingMed: true,
        error: null
      };
    case ADD_MED_SUCCESS:
      return {
        ...state,
        addingMed: false,
        meds: [...state.meds, action.payload]
      };
    case ADD_MED_FAILURE:
      return {
        ...state,
        addingMed: false,
        error: action.payload
      };
    case EDIT_MED_REQUEST:
      return {
        ...state,
        editingMed: true,
        error: null
      };
    case EDIT_MED_SUCCESS:
      return {
        ...state,
        editingMed: false,
        meds: state.meds.map(med => {
          if (med.id === action.payload.id) {
            return {
              ...action.payload
            };
          } else {
            return med;
          }
        })
      };
    case EDIT_MED_FAILURE:
      return {
        ...state,
        editingMed: false,
        error: action.payload
      };
    case DELETE_MED_REQUEST:
      return {
        ...state,
        deletingMed: true,
        error: null
      };
    case DELETE_MED_SUCCESS:
      return {
        ...state,
        deletingMed: false,
        meds: state.meds.filter(med => med.id !== action.payload.id),
        rems: state.rems.filter(rem => rem.med_id !== action.payload.id)
      };
    case DELETE_MED_FAILURE:
      return {
        ...state,
        deletingMed: false,
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

    case EDIT_DIARY_REQUEST:
      return {
        ...state,
        editingDiary: true,
        error: null
      };
    case EDIT_DIARY_SUCCESS:
      return {
        ...state,
        editingDiary: false,
        diary: state.diary.map(diaryEntry => {
          if (diaryEntry.id === action.payload.id) {
            return action.payload;
          } else {
            return diaryEntry;
          }
        })
      };
    case EDIT_DIARY_FAILURE:
      return {
        ...state,
        editingDiary: false,
        error: action.payload
      };

    case DELETE_DIARY_REQUEST:
      return {
        ...state,
        deletingDiary: true,
        error: null
      };
    case DELETE_DIARY_SUCCESS:
      return {
        ...state,
        deletingDiary: false,
        diary: state.diary.filter(diaryEntry => {
          return diaryEntry.id !== action.payload.id;
        })
      };
    case DELETE_DIARY_FAILURE:
      return {
        ...state,
        deletingDiary: false,
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
    case ADD_REMS_REQUEST:
      return {
        ...state,
        addingRems: true,
        error: null
      };
    case ADD_REMS_SUCCESS:
      return {
        ...state,
        addingRems: false,
        rems: action.payload
      };
    case ADD_REMS_FAILURE:
      return {
        ...state,
        addingRems: false,
        error: action.payload
      };

    default:
      return state;
  }
};

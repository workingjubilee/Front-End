import userReducer from './userReducer.js';
import medsReducer from './medsReducer.js';
import diaryReducer from './diaryReducer.js';
import remsReducer from './remsReducer.js';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ userReducer, medsReducer, diaryReducer, remsReducer });

<<<<<<< HEAD
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
  activeMeds: [],
  inactiveMeds: [],
  med: {},
  fetchingDiary: false,
  addingDiary: false,
  editingDiary: false,
  deletingDiary: false,
  diary: [],
  fetchingRems: false,
  addingRems: false,
  rems: [],
  filteredRems: [],
  searchResults: [
    {
      author: 'Merck Sharp & Dohme Corp.',
      imprint: 'MSD;117;SINGULAIR',
      image_id: '000069117.jpg',
      medicine_name: 'SINGULAIR',
      pill_strength: '100mg',
      match: 85,
      size: 8,
      color_text: 'BROWN',
      shape_text: 'SQUARE',
      product_code: '153892',
      DEA_schedule: '34391-3',
      score: 1,
      setid: '8c166755-7711-4df9-d689-8836a1a70885'
    },
    {
      author: 'A Drug Company',
      imprint: 'EDD;635;WIS',
      image_id: '000069117.jpg',
      medicine_name: 'Proliptol',
      pill_strength: '60mg',
      match: 65,
      size: 8,
      color_text: 'BROWN',
      shape_text: 'SQUARE',
      product_code: '153892',
      DEA_schedule: '34391-3',
      score: 1,
      setid: '8c166755-7711-4df9-d689-8836a1a70885'
    }
  ],
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
        meds: action.payload,
        activeMeds: action.payload.filter(med => {
          return med.med_active;
        }),
        inactiveMeds: action.payload.filter(med => {
          return !med.med_active;
        })
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
        meds: [...state.meds, action.payload],
        med: action.payload
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

    case ADD_DIARY_REQUEST:
      return {
        ...state,
        addingDiary: true,
        error: null
      };
    case ADD_DIARY_SUCCESS:
      return {
        ...state,
        addingDiary: false,
        diary: [...state.diary, action.payload]
      };
    case ADD_DIARY_FAILURE:
      return {
        ...state,
        addingDiary: false,
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
=======
export default rootReducer;
>>>>>>> bdbd422f1ed4411975e22cde35b96ad1e603cf9e

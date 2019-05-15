import {
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
  DELETE_MED_FAILURE
} from 'actions';

import { initialState } from './initialState';

export default function medsReducer(state = initialState, action) {
  switch (action.type) {
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

    default:
      return state;
  }
}

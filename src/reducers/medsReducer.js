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
  DISCONTINUE_MED_REQUEST,
  DISCONTINUE_MED_SUCCESS,
  DISCONTINUE_MED_FAILURE,
  DELETE_MED_REQUEST,
  DELETE_MED_SUCCESS,
  DELETE_MED_FAILURE,
  UPLOAD_IMAGE_REQUEST,
  UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE_FAILURE
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
        activeMeds: action.payload.med_active
          ? [...state.activeMeds, action.payload]
          : state.activeMeds,
        inactiveMeds: !action.payload.med_active
          ? [...state.inactiveMeds, action.payload]
          : state.inactiveMeds,
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
        }),
        activeMeds: action.payload.med_active
          ? state.activeMeds.map(med => {
              if (med.id === action.payload.id) {
                return {
                  ...action.payload
                };
              } else {
                return med;
              }
            })
          : state.activeMeds,
        inactiveMeds: !action.payload.med_active
          ? state.inactiveMeds.map(med => {
              if (med.id === action.payload.id) {
                return {
                  ...action.payload
                };
              } else {
                return med;
              }
            })
          : state.inactiveMeds
      };
    case EDIT_MED_FAILURE:
      return {
        ...state,
        editingMed: false,
        error: action.payload
      };
    case DISCONTINUE_MED_REQUEST:
      return {
        ...state,
        discontinuingMed: true,
        error: null
      };
    case DISCONTINUE_MED_SUCCESS:
      return {
        ...state,
        discontinuingMed: false,
        meds: state.meds.map(med => {
          if (med.id === action.payload.id) {
            return {
              ...action.payload
            };
          } else {
            return med;
          }
        }),
        activeMeds: action.payload.med_active
          ? [...state.activeMeds, action.payload]
          : state.activeMeds.filter(med => {
              return med.id !== action.payload.id;
            }),
        inactiveMeds: !action.payload.med_active
          ? [...state.inactiveMeds, action.payload]
          : state.inactiveMeds.filter(med => {
              return med.id !== action.payload.id;
            })
      };
    case DISCONTINUE_MED_FAILURE:
      return {
        ...state,
        discontinuingMed: false,
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
        activeMeds: action.payload.med_active
          ? state.activeMeds.filter(med => med.id !== action.payload.id)
          : state.activeMeds,
        inactiveMeds: !action.payload.med_active
          ? state.inactiveMeds.filter(med => med.id !== action.payload.id)
          : state.inactiveMeds
      };
    case DELETE_MED_FAILURE:
      return {
        ...state,
        deletingMed: false,
        error: action.payload
      };
    case UPLOAD_IMAGE_REQUEST:
      return {
        ...state,
        searchingMed: true,
        error: null
      };
    case UPLOAD_IMAGE_SUCCESS:
      return {
        ...state,
        searchingMed: false,
        searchResults: action.payload
      };
    case UPLOAD_IMAGE_FAILURE:
      return {
        ...state,
        searchingMed: false,
        error: action.payload
      };

    default:
      return state;
  }
}

import {
  FETCH_REMS_REQUEST,
  FETCH_REMS_SUCCESS,
  FETCH_REMS_FAILURE,
  ADD_REMS_REQUEST,
  ADD_REMS_SUCCESS,
  ADD_REMS_FAILURE,
  FILTER_REMINDERS
} from 'actions';

import { initialState } from './initialState';

export default function remsReducer(state = initialState, action) {
  switch (action.type) {

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
    case FILTER_REMINDERS:
      return {
        ...state,
        filteredRems: state.rems.filter(rem => {
          return (
            rem.rem_date > action.startDate && rem.rem_date < action.endDate
          );
        })
      };

    default:
      return state
  }
}
import {
  FETCH_DIARY_REQUEST,
  FETCH_DIARY_SUCCESS,
  FETCH_DIARY_FAILURE,
  ADD_DIARY_REQUEST,
  ADD_DIARY_SUCCESS,
  ADD_DIARY_FAILURE,
  EDIT_DIARY_REQUEST,
  EDIT_DIARY_SUCCESS,
  EDIT_DIARY_FAILURE,
  DELETE_DIARY_REQUEST,
  DELETE_DIARY_SUCCESS,
  DELETE_DIARY_FAILURE
} from 'actions';

import { initialState } from './initialState';

export default function diaryReducer(state = initialState, action) {
  switch (action.type) {
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

    default:
      return state;
  }
}

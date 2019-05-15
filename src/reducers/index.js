import userReducer from './userReducer.js';
import medsReducer from './medsReducer.js';
import diaryReducer from './diaryReducer.js';
import remsReducer from './remsReducer.js';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  userReducer,
  medsReducer,
  diaryReducer,
  remsReducer
});

export default rootReducer;

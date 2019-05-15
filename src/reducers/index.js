import user from './userReducer.js'
import meds from './medsReducer.js'
import diary from './diaryReducer.js'
import rems from './remsReducer.js'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({ user, meds, diary, rems });

export default rootReducer;
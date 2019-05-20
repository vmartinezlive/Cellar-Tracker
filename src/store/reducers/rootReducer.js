import authReducer from './authReducer'
import wineReducer from './wineReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: authReducer,
  wine: wineReducer

});

export default rootReducer

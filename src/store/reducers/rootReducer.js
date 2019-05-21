import authReducer from './authReducer'
import wineReducer from './wineReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
  auth: authReducer,
  wine: wineReducer,
  firestore: firestoreReducer

});

export default rootReducer

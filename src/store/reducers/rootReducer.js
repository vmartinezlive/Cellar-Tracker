import authReducer from './authReducer'
import wineReducer from './wineReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
  auth: authReducer,
  wine: wineReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer

});

export default rootReducer

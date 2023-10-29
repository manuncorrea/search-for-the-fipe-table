import { combineReducers } from 'redux'
import { fipeReducer } from './reducer'

export const rootReducer = combineReducers({
  fipe: fipeReducer,
})

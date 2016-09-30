import { combineReducers } from 'redux'
import authors from './authorReducer'
import courses from './courseReducer'
import ajaxCallsInProgres from './ajaxStatusReducer'

const rootReducer = combineReducers({
  authors,
  courses,
  ajaxCallsInProgres
})

export default rootReducer;

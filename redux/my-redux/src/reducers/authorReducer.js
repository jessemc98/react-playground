import * as types from '../actions/actionTypes'
import initial from './initialState'

export default function actionReducer(state = initial.authors, action) {
  if(action.type == types.LOAD_AUTHORS_SUCCESS) {
      return action.authors
  }
      return state
}

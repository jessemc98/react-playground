import * as types from '../actions/actionTypes'
import initial from './initialState'

export default function actionReducer(state = initial.authors, action) {
  switch (action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors

    default:
      return state

  }
}

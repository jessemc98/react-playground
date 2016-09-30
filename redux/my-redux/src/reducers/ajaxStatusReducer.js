import * as types from '../actions/actionTypes'
import initial from './initialState'

function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) == '_SUCCESS'
}

export default function ajaxStatusReducer(state = initial.ajaxCallsInProgres, action) {
  if(action.type === types.BEGIN_AJAX_CALL) {
    return state + 1
  }
  if(action.type === types.AJAX_ERROR ||
     actionTypeEndsInSuccess(action.type)) {
    return state - 1
  }
  return state
}

import * as types from './actionTypes'
import authorApi from '../api/mockAuthorApi.js'
import { ajaxError, beginAjaxCall } from './ajaxStatusActions.js'

function _loadAuthorsSuccess(authors) {
  return {type: types.LOAD_AUTHORS_SUCCESS, authors}
}

export function loadAuthors() {
  return function(dispatch) {
    dispatch(beginAjaxCall())
    return authorApi.getAllAuthors().then(authors => {
      dispatch(_loadAuthorsSuccess(authors))
    }).catch(err => {
      dispatch(ajaxError)
      throw(error)
    })
  }
}

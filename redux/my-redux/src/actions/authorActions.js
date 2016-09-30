import * as types from './actionTypes'
import authorApi from '../api/mockAuthorApi.js'
import { beginAjaxCall } from './ajaxStatusActions.js'
export function loadAuthorsSuccess(authors) {

  return {type: types.LOAD_AUTHORS_SUCCESS, authors}
}

export function loadAuthors() {
  return function(dispatch) {
    dispatch(beginAjaxCall())
    return authorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSuccess(authors))
    }).catch(err => {
      throw(err)
    })
  }
}

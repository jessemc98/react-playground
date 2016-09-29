import * as types from './actionTypes'
import courseApi from '../api/mockCourseApi.js'

export function loadCoursesSuccess(courses) {
  console.log('loaded');
  return {type: types.LOAD_COURSES_SUCCESS, courses}
}

export function loadCourses() {
  return function(dispatch) {
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses))
    }).catch(err => {
      throw(err)
    })
  }
}

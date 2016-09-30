import expect from 'expect'
import * as courseActions from './courseActions'
import * as types from './actionTypes'

//test sync action
describe('Course Actions', () => {
  describe('createCourseSuccess', () => {
    it('should create a CREATE_COURSE_SUCCESS action', () => {
      //arange
      const course = {id: 'clean-code', title:'Clean Code'}
      const expectedAction = {
        type: types.CREATE_COURSE_SUCCESS,
        course: course
      }

      const action = courseActions.createCourseSuccess(course)

      expect(action).toEqual(expectedAction)
    })
  })
})

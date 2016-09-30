import expect from 'expect'
import courseReducer from './courseReducer'
import * as actions from '../actions/courseActions'

describe('Course Reducer', () => {
  it('should add course when passed CREATE_COURSE_SUCCESS', () => {
    const initialState = [
      {title: 'A'},
      {title: 'B'}
    ]

    const newCourse = {title: 'C'}

    const action = actions.createCourseSuccess(newCourse)

    const newState = courseReducer(initialState, action)

    expect(newState.length).toBe(3)
    expect(newState[2]).toEqual(newCourse)
  })

  it('should update course when passed UPDATE_COURSE_SUCCESS', () => {
    const initialState = [
      {id: 'A', title: 'A'},
      {id: 'B', title: 'B'},
      {id: 'C', title: 'C'}
    ]

    const course = {id: 'B', title: 'i have changed'}
    const action = actions.updateCourseSuccess(course)

    const newState = courseReducer(initialState, action)
    const changedCourse = newState.find(a => a.id === course.id)
    const unadultaratedCourse = newState.find(a => a.id === 'A')

    expect(unadultaratedCourse.title).toEqual('A')
    expect(changedCourse.title).toEqual('i have changed')
    expect(newState.length).toEqual(3)

  })
})

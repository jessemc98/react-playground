import expect from 'expect'
import { createStore } from 'redux'
import rootReducer from '../reducers/index'
import initialState from '../reducers/initialState'
import * as courseActions from '../actions/courseActions'

describe('Store', () => {
  it('Should handle creating courses', () => {
    // arrange
    const store = createStore(rootReducer, initialState)
    const course = {title: 'clean-code'}

    // act
    const action = courseActions.createCourseSuccess(course)
    store.dispatch(action)

    // assert
    const actual = store.getState().courses
    const expected = [course]

    expect(actual).toEqual(expected)
  })
})

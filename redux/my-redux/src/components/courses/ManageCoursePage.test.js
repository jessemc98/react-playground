import React from 'react'
import expect from 'expect'
import { mount, shallow } from 'enzyme'
import { ManageCoursePage } from './ManageCoursePage'

const props = {
  course: {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''},
  authors: [],
  actions: {saveCourse: () => {return Promise.resolve()}}
}

describe('ManageCoursePage', () => {
  it('sets error message when trying to save empty title', () => {
    const wrapper = mount(<ManageCoursePage {...props}/>)
    const saveButton = wrapper.find('input').last()
    expect(saveButton.prop('type')).toBe('submit')
    saveButton.simulate('click')
    expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters long')
  })
})

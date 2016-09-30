import expect from 'expect'
import React from 'react'
import { mount, shallow } from 'enzyme'
import TestUtils from 'react-addons-test-utils'
import CourseForm from './CourseForm'

function setup(load) {
  const props = {
    course: {}, loading: load || false, errors: {},
    onSave: () => {},
    onChange: () => {}
  }

  return shallow(<CourseForm {...props}/>)
}
describe('CourseForm test via Enzyme', () => {
  it('renders form and h1', () => {
    const wrapper = setup()
    expect(wrapper.find('form').length).toBe(1)
    expect(wrapper.find('h1').text()).toBe('Manage Course')
  })

  it('should have save button labled "Save" when not loading', () => {
    const wrapper = setup(false)
    const input = wrapper.find('input')
    expect(input.props().value).toBe('Save')
  })

  it('should have save button labled "Saving..." when loading', () => {
    const wrapper = setup(true)
    const input = wrapper.find('input')
    expect(input.props().value).toBe('Saving...')
  })
})

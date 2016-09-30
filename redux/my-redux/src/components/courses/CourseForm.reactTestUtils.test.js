import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import CourseForm from './CourseForm'

function setup(load) {
  const props = {
    course: {}, loading: load || false, errors: {},
    onSave: () => {},
    onChange: () => {}
  }

  const renderer = TestUtils.createRenderer()
  renderer.render(<CourseForm {...props}/>)
  const output = renderer.getRenderOutput()

  return {
    props,
    output,
    renderer
  }
}

describe('CourseForm via React Test Utils', () => {
  it('renders form and h1', () => {
    const { output } = setup()
    expect(output.type).toBe('form')
    const [ h1 ] = output.props.children
    expect(h1.type).toBe('h1')
  })
  it('has save button labled "Save" when not loading', () => {
    const { output } = setup(false);
    const saveButton = output.props.children[5]
    expect(saveButton.props.value).toBe('Save')
  })
  it('has save button labled "Saving..." when loading', () => {
    const { output } = setup(true);
    const saveButton = output.props.children[5]
    expect(saveButton.props.value).toBe('Saving...')
  })
})

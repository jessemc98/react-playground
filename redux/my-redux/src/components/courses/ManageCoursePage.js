import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as courseActions from '../../actions/courseActions'
import CourseForm from './CourseForm'

class ManageCoursePage extends Component {
  constructor(props, context){
    super(props, context)

    this.state = {
      course: Object.assign({}, props.course),
      errors: {}
    }

    this.updateCourseState = this.updateCourseState.bind(this)
    this.saveCourse = this.saveCourse.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.course.id !== this.props.course.id) {
      this.setState({course: Object.assign({}, nextProps.course)})
    }
  }

  saveCourse(event) {
    event.preventDefault()
    this.props.actions.saveCourse(this.state.course)
    browserHistory.push('/courses')
  }

  updateCourseState(event) {
    const field = event.target.name
    let course = this.state.course
    course[field] = event.target.value
    return this.setState({course: course})
  }

  render() {
    const { course, errors } = this.state
    return (
      <CourseForm
        allAuthors={this.props.authors}
        onChange={this.updateCourseState}
        onSave={this.saveCourse}
        course={course}
        errors={errors}/>
    )
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}


function mapStateToProps(state, ownProps) {

  const authorsFormattedForDropdown = state.authors.map(author => {
    return {
      value: author.id,
      text: `${author.firstName} ${author.lastName}`
    }
  })

  const getInitialCourse = function(){
    const defaultCourse = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''}
    const courseId = ownProps.routeParams.id
      return state.courses.filter(course => course.id === courseId)[0] || defaultCourse
  }
  return {
    course: getInitialCourse(),
    authors: authorsFormattedForDropdown
  }
}
function mapDispatchToProps(dispatch) {
  return {
  actions: bindActionCreators(courseActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage)

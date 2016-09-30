import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as courseActions from '../../actions/courseActions'
import CourseForm from './CourseForm'
import toastr from 'toastr'
import { authorsFormattedForDropdown } from '../../selectors/selectors'

export class ManageCoursePage extends Component {
  constructor(props, context){
    super(props, context)

    this.state = {
      course: Object.assign({}, props.course),
      errors: {},
      loading: false
    }

    this.updateCourseState = this.updateCourseState.bind(this)
    this.saveCourse = this.saveCourse.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.course.id !== this.props.course.id) {
      this.setState({course: Object.assign({}, nextProps.course)})
    }
  }

  courseFormIsValid() {
    let formIsValid = true
    let errors = {}

    if (this.state.course.title.length < 5) {
      errors.title = 'Title must be at least 5 characters long'
      formIsValid = false
    }

    this.setState({ errors })
    return formIsValid
  }

  saveCourse(event) {
    event.preventDefault()

    if(!this.courseFormIsValid()){
      return
    }

    this.setState({loading: true})
    this.props.actions.saveCourse(this.state.course)
      .then(() => this.redirectSuccess())
      .catch(err => this.saveCourseError(err))
  }

  redirectSuccess(){
    browserHistory.push('/courses')
    setTimeout(() => toastr.success('Course saved!'), 250)
  }

  saveCourseError(error){
    toastr.error(error,'Course Could Not be Saved!')
    this.setState({loading: false})
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
        errors={errors}
        loading={this.state.loading}/>
    )
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}


function mapStateToProps(state, ownProps) {

  const getInitialCourse = function(){
    const defaultCourse = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''}
    const courseId = ownProps.routeParams.id
      return state.courses.filter(course => course.id === courseId)[0] || defaultCourse
  }
  return {
    course: getInitialCourse(),
    authors: authorsFormattedForDropdown(state.authors)
  }
}
function mapDispatchToProps(dispatch) {
  return {
  actions: bindActionCreators(courseActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage)

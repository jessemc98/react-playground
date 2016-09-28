import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as courseActions from '../../actions/courseActions'

class CoursesPage extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      course: {title : ""}
    }
    this.onTitleChange = this.onTitleChange.bind(this)
    this.onClickSave = this.onClickSave.bind(this)
  }

  _courseRow(course, i) {
    return <div key={i}>{course.title}</div>
  }

  onClickSave() {
    this.props.actions.createCourse(this.state.course)
  }

  onTitleChange(event) {
    const { course } = this.state
    course.title = event.target.value
    this.setState({ course })
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this._courseRow)}
        <h2>Add Course</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title} />
        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave} />
      </div>
    )
  }
}

CoursesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired
}

// state here is stores state which is passed down by
// connect a react-redux function
function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  }
}
function mapDispatchToProps(dispatch) {
  //// 3 ways to do this
  //// 1 : you can ommit it which will map dispatch to props
  //// 2 :
  // return {
  //   createCourse: (course) => dispatch(courseActions.createCourse(course))
  // }
  //// 3 : must import bindActionCreators from 'redux'
  return {
  actions: bindActionCreators(courseActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage)

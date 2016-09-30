import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as courseActions from '../../actions/courseActions'
import CourseList from './CourseList'
import { browserHistory } from 'react-router'

class CoursesPage extends Component {
  constructor(props, context){
      super(props, context)
      this.redirectToAddCourse = this.redirectToAddCourse.bind(this)
  }

  redirectToAddCourse() {
    browserHistory.push('/course')
  }

  render() {
    const { courses } = this.props
    return (
      <div>
        <h1>Courses</h1>
        <input type="submit"
               value="Add Course"
               className="btn btn-primary"
               onClick={this.redirectToAddCourse} />
        <CourseList courses={courses} />
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

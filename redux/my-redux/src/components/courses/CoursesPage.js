import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as courseActions from '../../actions/courseActions'

class CoursesPage extends Component {

  _courseRow(course, i) {
    return <div key={i}>{course.title}</div>
  }

  render() {
    return (
      <div>
        {this.props.courses.map(this._courseRow)}
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

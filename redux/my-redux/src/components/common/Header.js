import React, { PropTypes } from 'react'
import { Link, IndexLink } from 'react-router'
import LoadingDots from './LoadingDots'

const Header = ({ loading }) => {
  return (
    <nav className="navbar navbar-default">
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {"|"}
      <Link to="/about" activeClassName="active">About</Link>
      {"|"}
      <Link to="/courses" activeClassName="active">Courses</Link>
      {loading && <LoadingDots interval={250} dots={5} />}
    </nav>
  )
}

Header.propTypes = {
  loading: PropTypes.bool.isRequired
}

export default Header

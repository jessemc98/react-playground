import React, { PropTypes } from 'react'
import { Link, IndexLink } from 'react-router'
import LoadingDots from './LoadingDots'

const Header = () => {
  return (
    <nav className="navbar navbar-default">
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {"|"}
      <Link to="/about" activeClassName="active">About</Link>
      {"|"}
      <Link to="/courses" activeClassName="active">Courses</Link>
      <LoadingDots interval={250} dots={5} />
    </nav>
  )
}

export default Header

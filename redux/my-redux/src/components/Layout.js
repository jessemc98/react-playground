//handles layout/template used on every page
import React, { PropTypes, Component} from 'react'
import Header from './common/Header.js'

class Layout extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        {this.props.children}
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.object.isRequired
}

export default Layout;

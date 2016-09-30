//handles layout/template used on every page
import React, { PropTypes, Component} from 'react'
import Header from './common/Header.js'
import { connect } from 'react-redux'

class Layout extends Component {
  render() {
    let { children, loading } = this.props
    return (
      <div className="container-fluid">
        <Header loading={loading}/>
        {children}
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
}

function mapStateToProps(state, ownProps){
  return {
    loading: state.ajaxCallsInProgres > 0
  }
}

export default connect(mapStateToProps)(Layout);

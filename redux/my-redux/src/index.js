import 'babel-polyfill'
import React from 'react'
import{ Provider } from 'react-redux'
import configureStore from './store/configureStore.js'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import routes from './routes'
import './styles/style.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const store = configureStore()

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} onUpdate={onUpdate}/>
  </Provider>,
  document.getElementById('root')
)

function onUpdate(){
  // console.log(this.props.history)
}

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Test.js';
import Game from './Game.js';

const App = React.createClass({
  getInitialState: function() {
    return {num: 0};
  },
  render: function() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Game />
      </div>
    );
  },
  incrementNum: function(){
    let num = this.state.num + 1;
    this.setState({ num });
  }
});

const Result = React.createClass({
  render: function() {
    return (
      <div>the num is {this.props.num}</div>
    );
  }
});

export default App;

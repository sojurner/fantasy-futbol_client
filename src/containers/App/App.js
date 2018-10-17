import React, { Component } from 'react';

import Dashboard from '../../containers/Dashboard/Dashboard';
import Players from '../../containers/Players/Players';

import './App.css';
class App extends Component {
  render() {
    return (
      <div className="master-body">
        <h1 className="logo">
          Fantasy Fútbol{' '}
          <img
            className="logo-img"
            src={require('../../images/soccer1-logo.png')}
            height="50"
          />
        </h1>
        <div className="body">
          <Dashboard />
          <Players />
        </div>
      </div>
    );
  }
}

export default App;

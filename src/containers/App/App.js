import React, { Component } from 'react';
import './App.css';

import Splash from '../../components/Splash/Splash';
import Home from '../../components/Home/Home';
import Dashboard from '../../containers/Dashboard/Dashboard';
import Players from '../../containers/Players/Players';

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
          {/* <h1 className="futbol-title">Fantasy Fútbol</h1> */}
        </div>
      </div>
    );
  }
}

export default App;

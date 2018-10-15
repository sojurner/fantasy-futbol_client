import React, { Component } from 'react';
import { NavLink, BrowserRouter, Route } from 'react-router-dom';
import './Dashboard.css';

class Dashboard extends Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
        <div className="dashboard">
          <h3 className="users"> Users</h3>
          <NavLink to="/user1">User1</NavLink>
          <NavLink to="/user2">User2</NavLink>
          <NavLink to="/user3">User3</NavLink>
        </div>
      </BrowserRouter>
    );
  }
}

export default Dashboard;

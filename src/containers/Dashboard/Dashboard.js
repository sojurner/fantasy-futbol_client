import React, { Component } from 'react';
import { NavLink, BrowserRouter, Route } from 'react-router-dom';
import Modal from 'react-responsive-modal';

import * as fetch from '../../helpers/apiCalls/apiCalls';

import './Dashboard.css';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      users: [],
      usersPlayers: [],
      newUserInput: ''
    };
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = async () => {
    const users = await fetch.getUsers();
    this.setState({ users });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    console.log({ name, value });
  };

  addUser = () => {
    this.setState({ open: true });
  };

  createUser = e => {
    e.preventDefault();
    const { newUserInput, users } = this.state;
    const newUser = {
      username: newUserInput,
      password: `${Date.now()}`
    };

    const response = fetch.addUser(newUser);
    console.log(response);
    this.setState({
      users: [...users, newUser]
    });
  };

  displayUsers = () => {
    return this.state.users.map((user, index) => {
      return (
        <div className="user-option">
          <NavLink
            to={`/user${index}`}
            onClick={this.getUsersPlayers}
            className="user"
          >
            {user.username}
          </NavLink>
          <i class="fas fa-minus-circle" />
        </div>
      );
    });
  };

  displayUsersPlayers = () => {
    return this.state.usersPlayers.map((player, index) => {
      return (
        <div>
          <img src={`${player.Photo}`} />
          <p className="dashboard-players">
            {player.Name} <span>{player.Overall}</span>
          </p>
        </div>
      );
    });
  };

  getUsersPlayers = async e => {
    const { textContent } = e.target;
    const matchedUser = this.state.users.find(
      user => user.username === textContent
    );

    const players = await fetch.getPlayersByUser(matchedUser);
    this.setState({ usersPlayers: players });
  };

  render() {
    const users = this.displayUsers();
    const usersPlayers = this.displayUsersPlayers();
    return (
      <BrowserRouter>
        <section className="dashboard">
          <div>
            <div className="user-icon">
              <h3 className="users">Users</h3>
              <i className="fas fa-plus-circle" onClick={this.addUser} />
            </div>
            <nav className="user-nav">{users}</nav>
          </div>
          <div>
            <div className="user-icon">
              <h3 className="users">Team</h3>
              <i className="fas fa-plus-circle" />
            </div>
            <nav className="user-nav">
              {this.state.usersPlayers !== [] && usersPlayers}
            </nav>
          </div>
          <Modal
            open={this.state.open}
            onClose={this.onCloseModal}
            className="modal"
            center
          >
            <form onSubmit={this.createUser}>
              <input
                autoFocus
                name="username"
                value={this.state.newUser}
                className="username-input"
                placeholder="Enter Username"
                onChange={this.handleChange}
              />
              <button className="username-button">Create User</button>
            </form>
          </Modal>
        </section>
      </BrowserRouter>
    );
  }
}

export default Dashboard;

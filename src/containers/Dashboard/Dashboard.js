import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, BrowserRouter } from 'react-router-dom';
import Modal from 'react-responsive-modal';

import { setCurrentUser } from '../../actions/userActions';
import * as fetch from '../../helpers/apiCalls/apiCalls';

import './Dashboard.css';

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      users: [],
      usersPlayers: [],
      newUserInput: '',
      message: {}
    };
  }

  componentDidMount() {
    this.setState({ message: this.props.message });
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
    const { value } = event.target;
    this.setState({ newUserInput: value });
  };

  addUser = () => {
    this.setState({ open: true });
  };

  createUser = async e => {
    e.preventDefault();
    const { newUserInput, users } = this.state;
    const newUser = {
      username: newUserInput
    };
    await fetch.addUser(newUser);
    this.setState({
      users: [...users, newUser]
    });
  };

  deleteUser = async id => {
    await fetch.deleteUser(id);
    this.getUsers();
  };

  // deletePlayer = async playerIndex => {
  //   await fetch.addPlayerToUser = async (userId, playerId)
  // }

  displayUsers = () => {
    return this.state.users.map((user, index) => {
      return (
        <div key={`user-${index}`} className="user-option">
          <NavLink
            to={`/user${index}`}
            onClick={this.getUsersPlayers}
            className="user"
          >
            {user.username}
          </NavLink>
					
          <i
            onClick={() => this.deleteUser(user.id)}
            className="fas fa-minus-circle"
          />
        </div>
      );
    });
  };

  displayUsersPlayers = () => {
    return this.state.usersPlayers.map((player, index) => {
      return (
        <div className="dashboard-players">
          <p className="dashboard-players-playername">
            {player.Name} 
          </p>
          <i
            onClick={() => this.deletePlayer(index)}
            class="fas fa-minus-circle"
          />
        </div>
      );
    });
  };

  getUsersPlayers = async e => {
    const { textContent } = e.target;
    const matchedUser = this.state.users.find(
      user => user.username === textContent
    );
    this.props.addUser(matchedUser.id);
    const players = await fetch.getPlayersByUser(matchedUser);
    this.setState({ usersPlayers: players });
  };

  render() {
    const users = this.displayUsers();
    const usersPlayers = this.displayUsersPlayers();
    const { player } = this.props;
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
              {player !== {} && (
								<div className="dashboard-players">
								<p className="dashboard-players-playername">
									{player.Name} 
								</p>
								<i onClick={() => this.deletePlayer()} class="fas fa-minus-circle" />
							</div>
              )}
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

const mapStateToProps = state => ({
  user: state.user,
  playerId: state.player.id,
  player: state.player.info
});

const mapDispatchToProps = dispatch => ({
  addUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

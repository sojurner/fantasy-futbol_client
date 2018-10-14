import React, { Component } from 'react';
import Modal from 'react-responsive-modal';

import * as fetch from '../../helpers/apiCalls/apiCalls';
import { PlayerRow } from '../../components/PlayerRow/PlayerRow';
import { PlayerModal } from '../../components/PlayerModal/PlayerModal';
import './Players.css';
class Players extends Component {
  constructor() {
    super();
    this.state = {
      currentPlayers: [],
      countries: [],
      playerModal: [],
      offset: 0,
      open: false
    };
  }

  componentDidMount() {
    this.getPlayers(0, 30);
    this.getCountryOptions();
  }

  getPlayers = async (start, end) => {
    const players = await fetch.getPlayers(start, end);
    const currentPlayers = players.map((player, index) => (
      <PlayerRow
        key={`player-${index}`}
        {...player}
        onOpenModal={this.onOpenModal}
      />
    ));
    this.setState({ currentPlayers, offset: start });
  };

  changeOffset = number => {
    this.getPlayers(number, number + 30);
  };

  getCountryOptions = async () => {
    const countries = await fetch.getCountries();
    const results = countries.map(country => (
      <option key={country.id} value={country.id}>
        {country.name}
      </option>
    ));
    this.setState({ countries: results });
  };

  filterPlayersByCountry = async value => {
    const players = await fetch.getPlayersByCountry(value);
    const currentPlayers = players.map((player, index) => (
      <PlayerRow
        key={`player-${index}`}
        {...player}
        onOpenModal={this.onOpenModal}
      />
    ));
    this.setState({ currentPlayers });
  };

  onOpenModal = async id => {
    const player = await fetch.getPlayer(id);
    this.setState({ open: true, playerModal: player });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <select
          onChange={event => this.filterPlayersByCountry(event.target.value)}
        >
          {this.state.countries}
        </select>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Photo</th>
              <th>Nationality</th>
              <th>Positions</th>
              <th>Club</th>
              <th>Overall</th>
              <th>Value</th>
              <th>Wage</th>
            </tr>
            {this.state.currentPlayers}
          </tbody>
        </table>
        <button
          className="next-page"
          onClick={() => this.changeOffset(this.state.offset + 30)}
        >
          Next Page
        </button>
        {this.state.startingPoint !== 0 && (
          <button
            className="Previouse-page"
            onClick={() => this.changeOffset(this.state.offset - 30)}
          >
            Previous Page
          </button>
        )}

        <Modal open={this.state.open} onClose={this.onCloseModal} center>
          <PlayerModal playerModal={this.state.playerModal} />
        </Modal>
      </div>
    );
  }
}

export default Players;

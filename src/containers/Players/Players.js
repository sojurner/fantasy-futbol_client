import React, { Component } from 'react';
import Modal from 'react-responsive-modal';

import * as fetch from '../../helpers/apiCalls/apiCalls';
import { PlayerRow } from '../../components/PlayerRow/PlayerRow';
import { PlayerModal } from '../../components/PlayerModal/PlayerModal';
import { FilterBar } from '../../components/FilterBar/FilterBar';

import './Players.css';
class Players extends Component {
  constructor() {
    super();
    this.state = {
      currentPlayers: [],
      playerNames: [],
      countries: [],
      playerModal: [],
      offset: 0,
      open: false,
      searchedName: '',
      searchedClub: ''
    };
  }

  async componentDidMount() {
    this.getPlayers(0, 30);
    this.getCountryOptions();
    const playerNames = await fetch.getAllPlayers();
    this.setState({ playerNames });
  }

  getPlayers = async (start, end) => {
    const players = await fetch.getPlayers(start, end);
    this.makePlayerRows(players);
    this.setState({ offset: start });
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
    this.makePlayerRows(players);
  };

  makePlayerRows = players => {
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

  searchByPlayer = async e => {
    e.preventDefault();
    const currentPlayer = await fetch.getResultsByPlayerName(
      this.state.searchedName
    );
    this.makePlayerRows(currentPlayer);
  };

  searchByClub = async e => {
    e.preventDefault();
    const currentPlayers = await fetch.getResultsByPlayerClub(
      this.state.searchedClub
    );
    this.makePlayerRows(currentPlayers);
  };

  handleChange = async e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const {
      searchedName,
      searchedClub,
      playerModal,
      offset,
      currentPlayers,
      countries,
      open
    } = this.state;

    return (
      <div>
        <FilterBar
          filterPlayersByCountry={this.filterPlayersByCountry}
          searchByClub={this.searchByClub}
          searchByPlayer={this.searchByPlayer}
          handleChange={this.handleChange}
          currentSearchName={searchedName}
          currentSearchClub={searchedClub}
          countries={countries}
        />
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
            {currentPlayers}
          </tbody>
        </table>
        <button
          className="next-page"
          onClick={() => this.changeOffset(offset + 30)}
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

        <Modal open={open} onClose={this.onCloseModal} center>
          <PlayerModal playerModal={playerModal} />
        </Modal>
      </div>
    );
  }
}

export default Players;

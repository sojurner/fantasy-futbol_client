import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-responsive-modal';

import * as fetch from '../../helpers/apiCalls/apiCalls';
import { PlayerRow } from '../../components/PlayerRow/PlayerRow';
import { PlayerModal } from '../../components/PlayerModal/PlayerModal';
import { FilterBar } from '../../components/FilterBar/FilterBar';
import * as playerActions from '../../actions/playerActions';

import './Players.css';
import playerData from '../../data/playerData.json';
import clubData from '../../data/clubData.json';
export class Players extends Component {
  constructor() {
    super();
    this.state = {
      currentPlayers: [],
      playerNames: [],
      countries: [],
      modalStats: [],
      modalStatType: [],
      modalInfo: {},
      offset: 0,
      open: false,
      searchedName: '',
      searchedClub: '',
      playerSuggestions: [],
      clubSuggestions: []
    };
  }

  componentDidUpdate() {
    // console.log(this.state);
  }

  async componentDidMount() {
    this.getPlayers(0, 30);
    this.getCountryOptions();
  }

  getPlayers = async (start, end) => {
    const players = await fetch.getPlayers(start, end);
    this.makePlayerRows(players);
    this.setState({ offset: start });
  };

  addPlayerToUser = async () => {
    const { user, player, setPlayerInfo } = this.props;

    const userMessage = await fetch.addPlayerToUser(user, player);
    setPlayerInfo(userMessage.player[0]);
    this.setState({ open: false });
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
    this.props.addPlayer(id);
    const player = await fetch.getPlayer(id);
    this.setState({
      open: true,
      modalStats: player.stats,
      modalStatType: player.statType,
      modalInfo: player.info
    });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  searchPlayers = async (e, type) => {
    e.preventDefault();
    let players;
    const { textContent } = e.target;

    type === 'name'
      ? (players = await fetch.getResultsByPlayerName(textContent))
      : (players = await fetch.getResultsByPlayerClub(textContent));
    this.makePlayerRows(players);
  };

  handleChange = async e => {
    const { name, value } = e.target;
    if (name === 'searchedName') {
      this.setState({
        [name]: value,
        playerSuggestions: this.getSuggestions(value, name)
      });
    } else {
      this.setState({
        [name]: value,
        clubSuggestions: this.getSuggestions(value, name)
      });
    }
  };

  escapeRegexCharacters = str => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  };

  getSuggestions = (value, name) => {
    const escapedValue = this.escapeRegexCharacters(value.trim());
    if (escapedValue === '') {
      return [];
    }
    const regex = new RegExp('\\b' + escapedValue, 'i');
    if (name === 'searchedName') {
      return playerData.filter(player =>
        regex.test(this.getSuggestionValue(player, name))
      );
    }
    if (name === 'searchedClub') {
      return clubData.filter(club =>
        regex.test(this.getSuggestionValue(club, name))
      );
    }
  };

  getSuggestionValue = (suggestion, name) => {
    if (name === 'searchedName') {
      return `${suggestion.Name}`;
    }

    if (name === 'searchedClub') {
      return `${suggestion}`;
    }
  };

  render() {
    const {
      searchedName,
      searchedClub,
      modalStats,
      modalStatType,
      modalInfo,
      offset,
      currentPlayers,
      countries,
      open,
      playerSuggestions,
      clubSuggestions
    } = this.state;

    return (
      <div className="players-table">
        <div className="filter-players">
          <FilterBar
            filterPlayersByCountry={this.filterPlayersByCountry}
            searchPlayers={this.searchPlayers}
            handleChange={this.handleChange}
            currentSearchName={searchedName}
            currentSearchClub={searchedClub}
            countries={countries}
            playerSuggestions={playerSuggestions.slice(0, 5)}
            clubSuggestions={clubSuggestions.slice(0, 5)}
          />

          <table>
            <tbody>
              <tr>
                <th>
                  <i className="fas fa-futbol" />
                </th>
                <th className="player-name">Player Name</th>
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
        </div>
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
          <i class="fas fa-user-circle" onClick={this.addPlayerToUser}>
            Add {modalInfo.Name}
          </i>

          <PlayerModal
            stats={modalStats}
            statType={modalStatType}
            info={modalInfo}
          />
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  player: state.player.id
});

const mapDispatchToProps = dispatch => ({
  setPlayerInfo: player => dispatch(playerActions.setPlayerInfo(player)),
  addPlayer: player => dispatch(playerActions.setCurrentPlayer(player))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Players);

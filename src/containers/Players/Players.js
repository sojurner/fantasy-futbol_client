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
      clubSuggestions: [],
      index: 0
    };
  }

  async componentDidMount() {
    this.getPlayers(0, 20);
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

  changeOffset = (number, command) => {
    command === 'dec'
      ? this.setState({ index: this.state.index++ })
      : this.setState({ index: this.state.index-- });

    this.getPlayers(number, number + 20 + this.state.index);
  };

  getCountryOptions = async () => {
    const countries = await fetch.getCountries();
    const results = countries.map(country => (
      <option key={country.id} value={country.id}>
        {country.name}
      </option>
    ));

    results.unshift(<option>Select Country</option>);
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

    if (!currentPlayers) {
      return <img src="https://mycourtcircuit.be/images/PleaseWait.gif" />;
    } else {
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
                </tr>
                {currentPlayers}
              </tbody>
            </table>
            <div className="next-prev-btns">
              {this.state.startingPoint !== 0 && (
                <button
                  className="Previouse-page"
                  onClick={() =>
                    this.changeOffset(this.state.offset - 20, 'dec')
                  }
                >
                  Previous Page
                </button>
              )}
              <button
                className="next-page"
                onClick={() => this.changeOffset(offset + 20, 'inc')}
              >
                Next Page
              </button>
            </div>
          </div>

          <Modal open={open} onClose={this.onCloseModal} center>
            <div className="modal-header">
              <button
                className="add-player-button"
                onClick={this.addPlayerToUser}
              >
                Add {'   '}
                <i className="fas fa-check-circle" />
              </button>
              <img
                className="player-img"
                height="60"
                width="60"
                src={modalInfo.Photo}
              />
              <h2 className="player-name">{modalInfo.Name}</h2>
              <h4 className="player-overall">{modalInfo.Overall}</h4>
            </div>
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

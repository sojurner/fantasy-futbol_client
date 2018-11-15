import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as fetch from '../../helpers/apiCalls/apiCalls';
import PlayerModal from '../../components/PlayerModal/PlayerModal';
import { PlayerRow } from '../../components/PlayerRow/PlayerRow';
import { PlayerTable } from '../../components/PlayerTable/PlayerTable';
import FilterBar from '../../components/FilterBar/FilterBar';
import { NavButtons } from '../../components/NavButtons/NavButtons';
import * as playerActions from '../../actions/playerActions';

import './Players.css';

export class Players extends Component {
  constructor() {
    super();
    this.state = {
      currentPlayers: [],
      index: 0,
      offset: 0,
      modalId: null,
      open: false
    };
  }

  async componentDidMount() {
    this.getPlayers(0, 20);
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

  onOpenModal = modalId => {
    this.props.addPlayer(modalId);
    this.setState({
      open: true,
      modalId
    });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { startingPoint, offset, currentPlayers, open, modalId } = this.state;

    if (!currentPlayers) {
      return <img src="https://mycourtcircuit.be/images/PleaseWait.gif" />;
    } else {
      return (
        <div className="players-table">
          <div className="filter-players">
            <FilterBar makePlayerRows={this.makePlayerRows} />
            <PlayerTable currentPlayers={currentPlayers} />
            <NavButtons
              startingPoint={startingPoint}
              changeOffset={this.changeOffset}
              offset={offset}
            />
            {open && (
              <PlayerModal
                id={modalId}
                open={open}
                addPlayerToUser={this.addPlayerToUser}
                onCloseModal={this.onCloseModal}
              />
            )}
          </div>
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

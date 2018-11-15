import React, { Component } from 'react';
import Modal from 'react-responsive-modal';

import { getPlayer } from '../../helpers/apiCalls/apiCalls';

import { PlayerStats } from '../PlayerStats/PlayerStats';

class PlayerModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalStats: [],
      modalStatType: [],
      modalInfo: {}
    };
  }

  async componentDidMount() {
    const player = await getPlayer(this.props.id);
    await this.setState({
      modalInfo: player.info,
      modalStats: player.stats,
      modalStatType: player.statType
    });
  }

  render() {
    const { modalInfo, modalStats, modalStatType } = this.state;
    const { addPlayerToUser, open, onCloseModal } = this.props;
    return (
      <Modal open={open} onClose={onCloseModal} center>
        <div className="modal-header">
          <button className="add-player-button" onClick={addPlayerToUser}>
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
        <PlayerStats
          stats={modalStats}
          statType={modalStatType}
          info={modalInfo}
        />
      </Modal>
    );
  }
}

export default PlayerModal;

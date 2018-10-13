import React, { Component } from 'react';
import * as fetch from '../../helpers/apiCalls/apiCalls';
import { PlayerRow } from '../../components/PlayerRow/PlayerRow';
class Players extends Component {
  constructor() {
    super();
    this.state = {
      players: [],
      startingPoint: 0,
      offset: 30
    };
  }
  // componentDidUpdate() {
  //   console.log(this.state.startingPoint);
  // }
  componentDidMount() {
    this.getPlayers();
  }

  getPlayers = async () => {
    const players = await fetch.getPlayers();
    this.setState({ players });
  };

  changeOffset = number => {
    this.setState({
      startingPoint: this.state.startingPoint + number,
      offset: this.state.offset + number
    });
  };

  render() {
    const displaySet = this.state.players.filter(
      (player, index) =>
        index >= this.state.startingPoint && index < this.state.offset
    );
    const playerRows = displaySet.map((player, index) => (
      <PlayerRow key={`player-${index}`} {...player} />
    ));
    console.log(this.state.offset);
    return (
      <div>
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
            {playerRows}
          </tbody>
        </table>
        <button className="next-page" onClick={() => this.changeOffset(30)}>
          Next Page
        </button>
        {this.state.startingPoint !== 0 && (
          <button
            className="Previouse-page"
            onClick={() => this.changeOffset(-30)}
          >
            Previous Page
          </button>
        )}
      </div>
    );
  }
}

export default Players;

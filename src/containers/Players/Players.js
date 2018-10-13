import React, { Component } from 'react';
import * as fetch from '../../helpers/apiCalls/apiCalls';
import { PlayerRow } from '../../components/PlayerRow/PlayerRow';
class Players extends Component {
  constructor() {
    super();
    this.state = {
      players: [],
			offset: 0,
			countries: []
    };
  }

  componentDidMount() {
		this.getPlayers(0, 30);
		this.getCountryOptions();
  }

  getPlayers = async (x, y) => {
		const players = await fetch.getPlayers(x, y);
    this.setState({ players, offset: x });
  };

  changeOffset = number => {
    this.getPlayers(number, number + 30);
	};

	getCountryOptions = async () => {
		const countries = await fetch.getCountries();
		const results =  countries.map(country => <option key={country.id} value={country.id}>{country.name}</option>);
		this.setState({countries: results});
	}

  render() {

		const displayedPlayers = this.state.players.map((player, index) => (
      <PlayerRow key={`player-${index}`} {...player} />
		));
		
    return (
      <div>
				<select onChange={this.filterPlayersByCountry}>
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
            {displayedPlayers}
          </tbody>
        </table>
        <button className="next-page" onClick={() => this.changeOffset(this.state.offset + 30)}>
          Next Page
        </button>
        {this.state.startingPoint !== 0 && (
          <button
            className="Previouse-page"
            onClick={() => this.changeOffset(this.state.offset -  30)}
          >
            Previous Page
          </button>
        )}
      </div>
    );
  }
}

export default Players;

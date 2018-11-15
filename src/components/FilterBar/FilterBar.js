import React, { Component } from 'react';

import { FilterDropDown } from '../FilterDropDown/FilterDropDown';
import { SearchInput } from '../SearchInput/SearchInput';
import { PlayerSuggestions } from '../PlayerSuggestions/PlayerSuggestions';
import { getSuggestions } from '../../helpers/autoSuggest/autoSuggest';
import * as fetch from '../../helpers/apiCalls/apiCalls';

import './FilterBar.css';

class FilterBar extends Component {
  constructor() {
    super();
    this.state = {
      selectedFilter: '',
      searchInput: '',
      suggestions: null
    };
    }

  searchPlayers = async (e, id) => {
    e.preventDefault();
    let players;
    const { textContent } = e.target;

    switch (this.state.selectedFilter) {
      case 'name':
        players = await fetch.getResultsByPlayerName(textContent);
        break;
      case 'club':
        players = await fetch.getResultsByPlayerClub(textContent);
        break;
      case 'country':
        players = await fetch.getPlayersByCountry(id);
        break;
    }
    this.props.makePlayerRows(players);
    this.setState({ suggestions: null });
  };

  });

  const clubSuggestionList = clubSuggestions.map(suggestion => {
    if (suggestion) {
      return (
        <span
          className="suggestion-row"
          onClick={event => searchPlayers(event, 'club')}
        >
          <p className="suggest-club">{suggestion}</p>
        </span>
      );
    }
  });
  return (
    <div className="filter-bar">
      <h3 className="filter-title">Filter Players</h3>
      <select onChange={event => filterPlayersByCountry(event.target.value)}>
        {countries}
      </select>
      <form>
        <input
          className="name-search"
          name="searchedName"
          value={currentSearchName}
          placeholder="Search by name"
          onChange={handleChange}
        />
      </form>
      <div className="suggestion-box">{playerSuggestionList}</div>
      <form>
        <input
          className="club-search"
          onChange={handleChange}
          name="searchedClub"
          value={currentSearchClub}
          placeholder="Search by club"
        />
      </form>
      <div className="suggestion-box">{clubSuggestionList}</div>
    </div>
  );
};

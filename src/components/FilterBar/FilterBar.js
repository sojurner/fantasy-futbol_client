import React from 'react';

import './FilterBar.css';

export const FilterBar = ({
  filterPlayersByCountry,
  searchPlayers,
  handleChange,
  currentSearchClub,
  currentSearchName,
  countries,
  playerSuggestions,
  clubSuggestions
}) => {
  const playerSuggestionList = playerSuggestions.map(suggestion => {
    if (suggestion) {
      return (
        <span
          className="suggestion-row"
          onClick={event => searchPlayers(event, 'name')}
        >
          <img className="suggest-photo" src={suggestion.Photo} height="30" />{' '}
          <p className="suggest-name">{suggestion.Name}</p>
        </span>
      );
    }
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

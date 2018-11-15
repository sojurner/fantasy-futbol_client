import React from 'react';

export const PlayerSuggestions = ({
  selectedFilter,
  suggestions,
  searchPlayers
}) => {
  const playerSuggestionList = suggestions.map(suggestion => {
    return (
      <span className="suggestion-row">
        {selectedFilter === 'club' && (
          <p className="suggest-name" onClick={e => searchPlayers(e, null)}>
            {suggestion}
          </p>
        )}
        {selectedFilter === 'name' && (
          <p className="suggest-name" onClick={e => searchPlayers(e, null)}>
            {suggestion.Name}
          </p>
        )}
        {selectedFilter === 'country' && (
          <p
            data-id={suggestion.id}
            className="suggest-name"
            onClick={e => searchPlayers(e, suggestion.id)}
          >
            {suggestion.name}
          </p>
        )}
      </span>
    );
  });
  return <div className="suggestion-box">{playerSuggestionList}</div>;
};

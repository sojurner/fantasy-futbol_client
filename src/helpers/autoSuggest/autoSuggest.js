import playerData from '../../data/playerData.json';
import clubData from '../../data/clubData.json';
import countryData from '../../data/countryData.json';

export const getSuggestions = (value, name) => {
  const escapedValue = escapeRegexCharacters(value.trim());
  if (escapedValue === '') {
    return [];
  }
  const regex = new RegExp('\\b' + escapedValue, 'i');
  if (name === 'name') {
    return playerData.filter(player =>
      regex.test(getSuggestionValue(player, name))
    );
  }
  if (name === 'club') {
    return clubData.filter(club => regex.test(getSuggestionValue(club, name)));
  }

  if (name === 'country') {
    return countryData.filter(player =>
      regex.test(getSuggestionValue(player, name))
    );
  }
};

const escapeRegexCharacters = str => {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

const getSuggestionValue = (suggestion, name) => {
  if (name === 'name') {
    return `${suggestion.Name}`;
  }

  if (name === 'club') {
    return `${suggestion}`;
  }

  if (name === 'country') {
    return `${suggestion.name}`;
  }
};

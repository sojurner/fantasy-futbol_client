import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';

import Autosuggest from 'Autosuggest';

escapeRegexCharacters = str => {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

getSuggestions = value => {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('\\b' + escapedValue, 'i');

  return people.filter(person => regex.test(getSuggestionValue(person)));
};

getSuggestionValue = suggestion => {
  return `${suggestion.first} ${suggestion.last}`;
};

renderSuggestion = (suggestion, { query }) => {
  const suggestionText = `${suggestion.first} ${suggestion.last}`;
  const matches = match(suggestionText, query);
  const parts = parse(suggestionText, matches);

  return (
    <span className={'suggestion-content ' + suggestion.twitter}>
      <span className="name">
        {parts.map((part, index) => {
          const className = part.highlight ? 'highlight' : null;

          return (
            <span className={className} key={index}>
              {part.text}
            </span>
          );
        })}
      </span>
    </span>
  );
};

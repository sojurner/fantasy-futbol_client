import React from 'react';

export const FilterDropDown = ({ setSearchOption }) => {
  return (
    <select onChange={event => setSearchOption(event.target.value)}>
      <option>Select Option</option>
      <option value="name">Player Name</option>
      <option value="club">Club</option>
      <option value="country">Country</option>
    </select>
  );
};

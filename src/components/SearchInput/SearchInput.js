import React from 'react';

export const SearchInput = ({
  handleChange,
  currentSearch,
  selectedFilter
}) => {
  return (
    <input
      ref={input => input && input.focus()}
      disabled={!selectedFilter ? true : false}
      className="name-search"
      name="searchInput"
      value={currentSearch}
      placeholder={
        !selectedFilter ? 'Select Option' : `Enter ${selectedFilter}`
      }
      onChange={handleChange}
    />
  );
};

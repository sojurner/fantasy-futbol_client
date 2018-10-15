import React from 'react';

import './FilterBar.css';

export const FilterBar = ({
  filterPlayersByCountry,
  searchByPlayer,
  handleChange,
  currentSearchClub,
  currentSearchName,
  countries,
  searchByClub
}) => {
  return (
    <div className="filter-bar">
      <select onChange={event => filterPlayersByCountry(event.target.value)}>
        {countries}
      </select>
      <form onSubmit={searchByPlayer}>
        <input
          name="searchedName"
          value={currentSearchName}
          placeholder="Search by name"
          onChange={handleChange}
        />
      </form>
      <form onSubmit={searchByClub}>
        <input
          onChange={handleChange}
          name="searchedClub"
          value={currentSearchClub}
          placeholder="search by club"
        />
      </form>
    </div>
  );
};

import React from 'react';

export const FilterBar = ({ filterPlayersByCountry, searchByPlayer, handleChange, currentSearchValue, countries }) => {

	return (
		<div>
			<select onChange={event => filterPlayersByCountry(event.target.value)}>
				{countries}
			</select>
			<form onSubmit={searchByPlayer}>
				<input name='searchInput' value={currentSearchValue} placeholder="Search by name" onChange={handleChange}/>
			</form>
		</div>
	);
};
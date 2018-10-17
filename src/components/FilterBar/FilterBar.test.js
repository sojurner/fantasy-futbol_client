import React from 'react';
import { FilterBar } from './FilterBar';

describe('FilterBar', () => {
  let wrapper;
  beforeEach(() => {
    let filterPlayers = jest.fn();
    let mockSearch = jest.fn();
    let mockHandle = jest.fn();
    let mockCountries = [{ name: 'Argentina', id: '1' }];
    let mockPlayerSuggestions = [
      {
        Name: 'L. Messi',
        Photo: 'https://cdn.sofifa.org/players/4/18/158023.png'
      },
      {
        Name: 'N. Messiniti',
        Photo: 'https://cdn.sofifa.org/players/4/18/236341.png'
      }
    ];
    let mockClubSuggestions = ['Chelsea'];

    wrapper = shallow(
      <FilterBar
        filterPlayersByCountry={filterPlayers}
        searchPlayers={mockSearch}
        handleChange={mockHandle}
        currentSearchClub={'chelsea'}
        currentSearchName={'messi'}
        countries={mockCountries}
        playerSuggestions={mockPlayerSuggestions}
        clubSuggestions={mockClubSuggestions}
      />
    );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

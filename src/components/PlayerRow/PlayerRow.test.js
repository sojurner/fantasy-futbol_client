import React from 'react';
import { PlayerRow } from './PlayerRow';

describe('PlayerRow', () => {
  let mockId = 1;
  let mockPhoto = 'https://cdn.sofifa.org/players/4/18/158023.png';
  let mockName = 'DeGea';
  let mockNationality = 'Brazil';
  let mockPositions = 'RW';
  let mockClub = 'Chelsea';
  let mockOverall = 93;
  let mockValue = '€105M';
  let mockWage = '€105M';
  let mockOpenModal = jest.fn();

  let wrapper = shallow(
    <PlayerRow
      id={mockId}
      Photo={mockPhoto}
      Name={mockName}
      Nationality={mockNationality}
      Club={mockClub}
      Overall={mockOverall}
      Value={mockValue}
      Wage={mockWage}
      onOpenModal={mockOpenModal}
    />
  );

  it('should Match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

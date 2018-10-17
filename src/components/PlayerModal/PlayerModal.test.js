import React from 'react';
import { PlayerModal } from './PlayerModal';

describe('PlayerModal', () => {
  let mockStats = [
    {
      Acceleration: 92,
      Aggression: 48,
      Agility: 90,
      Balance: 95,
      Composure: 96,
      Strength: 59,
      Sprint_speed: 87,
      Jumping: 68,
      Vision: 90,
      Stamina: 73
    },
    {
      Free_kick_accuracy: 90,
      Shot_power: 85,
      Long_shots: 88,
      Heading_accuracy: 71,
      Finishing: 95,
      Dribbling: 97,
      Ball_control: 95,
      Positioning: 93,
      Curve: 89
    },
    {
      Interceptions: 22,
      Marking: 13,
      Reactions: 95,
      Sliding_tackle: 26,
      Standing_tackle: 28,
      Crossing: 77,
      Volleys: 85,
      Short_passing: 88,
      Long_passing: 87
    },
    {
      GK_diving: 6,
      GK_handling: 11,
      GK_kicking: 15,
      GK_positioning: 14,
      GK_reflexes: 8
    }
  ];

  let mockStatType = ['Skills', 'Offense', 'Defense', 'Goal-Keeping'];

  let shallowWrapper = shallow(
    <PlayerModal stats={mockStats} statType={mockStatType} />
  );

  it('should match snapshot', () => {
    expect(shallowWrapper).toMatchSnapshot();
  });

  // it('should match mounted snapshot', () => {
  //   let mountWrapper = mount(
  //     <PlayerModal stats={mockStats} statType={mockStatType} />
  //   );
  //   expect(mountWrapper).toMatchSnapshot();
  // });
});

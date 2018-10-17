const getPlayersByUserParam = {
  id: 21,
  username: 'Paul',
  password: null,
  player_id_1: 1,
  player_id_2: null,
  player_id_3: null,
  player_id_4: null,
  player_id_5: null,
  player_id_6: null,
  player_id_7: null,
  player_id_8: null,
  player_id_9: null,
  player_id_10: null,
  player_id_11: null,
  created_at: '2018-10-17T11:38:03.733Z'
};

const mockResolve = [
  [
    {
      id: 1,
      country_id: 1,
      Name: 'L. Messi',
      Age: '30',
      Photo: 'https://cdn.sofifa.org/players/4/18/158023.png',
      Club_Logo: 'https://cdn.sofifa.org/24/18/teams/241.png',
      Nationality: 'Argentina',
      Positions: 'RW',
      Club: 'FC Barcelona',
      Overall: '93',
      Potential: '93',
      Value: '€105M',
      Wage: '€565K',
      Acceleration: '92',
      Aggression: '48',
      Agility: '90',
      Balance: '95',
      Ball_control: '95',
      Composure: '96',
      Crossing: '77',
      Curve: '89',
      Dribbling: '97',
      Finishing: '95',
      Free_kick_accuracy: '90',
      GK_diving: '6',
      GK_handling: '11',
      GK_kicking: '15',
      GK_positioning: '14',
      GK_reflexes: '8',
      Heading_accuracy: '71',
      Interceptions: '22',
      Jumping: '68',
      Long_passing: '87',
      Long_shots: '88',
      Marking: '13',
      Penalties: '74',
      Positioning: '93',
      Reactions: '95',
      Short_passing: '88',
      Shot_power: '85',
      Sliding_tackle: '26',
      Sprint_speed: '87',
      Stamina: '73',
      Standing_tackle: '28',
      Strength: '59',
      Vision: '90',
      Volleys: '85',
      created_at: '2018-10-12T19:21:43.168Z'
    }
  ],
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null
];

export const getPlayersByUser = async getPlayersByUserParam => {
  return await new Promise(resolve => {
    return resolve(async () => {
      return await new Promise(resolve => {
        return resolve({
          json: () => Promise.resolve(mockResolve)
        });
      });
    });
  });
};

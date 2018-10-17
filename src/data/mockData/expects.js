export const setCurrentPlayer = { playerId: 1, type: 'SET_CURRENT_PLAYER' };

export const setPlayerInfo = {
  player: {
    Acceleration: '76',
    Age: '26',
    Aggression: '68',
    Agility: '80',
    Balance: '75',
    Ball_control: '87',
    Club: 'Manchester City',
    Club_Logo: 'https://cdn.sofifa.org/24/18/teams/10.png',
    Composure: '84',
    Crossing: '90',
    Curve: '83',
    Dribbling: '85',
    Finishing: '83',
    Free_kick_accuracy: '83',
    GK_diving: '15',
    GK_handling: '13',
    GK_kicking: '5',
    GK_positioning: '10',
    GK_reflexes: '13',
    Heading_accuracy: '53',
    Interceptions: '56',
    Jumping: '65',
    Long_passing: '84',
    Long_shots: '86',
    Marking: '30',
    Name: 'K. De Bruyne',
    Nationality: 'Belgium',
    Overall: '89',
    Penalties: '77',
    Photo: 'https://cdn.sofifa.org/players/4/18/192985.png',
    Positioning: '84',
    Positions: 'RM CM CAM',
    Potential: '92',
    Reactions: '88',
    Short_passing: '90',
    Shot_power: '85',
    Sliding_tackle: '40',
    Sprint_speed: '75',
    Stamina: '87',
    Standing_tackle: '51',
    Strength: '73',
    Value: '€83M',
    Vision: '90',
    Volleys: '82',
    Wage: '€285K',
    country_id: 7,
    created_at: '2018-10-12T01:54:55.564Z',
    id: 7
  },
  type: 'SET_PLAYER_INFO'
};

export const setCurrentUser = { type: 'SET_CURRENT_USER', userId: 2 };

export const getPlayers = [
  {
    Name: 'L. Messi',
    id: 1,
    Photo: 'https://cdn.sofifa.org/players/4/18/158023.png',
    Nationality: 'Argentina',
    Positions: 'RW',
    Club: 'FC Barcelona',
    Overall: '93',
    Value: '€105M',
    Wage: '€565K'
  },
  {
    Name: 'Neymar',
    id: 2,
    Photo: 'https://cdn.sofifa.org/players/4/18/190871.png',
    Nationality: 'Brazil',
    Positions: 'LW',
    Club: 'Paris Saint-Germain',
    Overall: '92',
    Value: '€123M',
    Wage: '€280K'
  }
];

export const getCountries = [
  {
    id: 1,
    name: 'Argentina',
    flag: 'https://cdn.sofifa.org/flags/52.png',
    created_at: '2018-10-12T19:21:40.728Z'
  },
  {
    id: 2,
    name: 'Portugal',
    flag: 'https://cdn.sofifa.org/flags/38.png',
    created_at: '2018-10-12T19:21:40.728Z'
  },
  {
    id: 3,
    name: 'Brazil',
    flag: 'https://cdn.sofifa.org/flags/54.png',
    created_at: '2018-10-12T19:21:40.728Z'
  }
];

export const getPlayersByCountry = [
  {
    Name: 'C. Ninga',
    id: 2888,
    Photo: 'https://cdn.sofifa.org/players/4/18/231041.png',
    Nationality: 'Chad',
    Positions: 'LM ST',
    Club: 'Montpellier Hérault SC',
    Overall: '74',
    Value: '€7.5M',
    Wage: '€24K'
  },
  {
    Name: 'S. Altama',
    id: 12027,
    Photo: 'https://cdn.sofifa.org/players/4/18/200965.png',
    Nationality: 'Chad',
    Positions: 'CDM',
    Club: 'La Berrichonne de Châteauroux',
    Overall: '62',
    Value: '€325K',
    Wage: '€1K'
  }
];

export const getPlayer = {
  stats: [
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
  ],
  statType: ['Skills', 'Offense', 'Defense', 'Goal-Keeping'],
  info: { id: 1, Name: 'L. Messi' }
};

export const getPlayerByName = [
  {
    Name: 'L. Messi',
    id: 1,
    Photo: 'https://cdn.sofifa.org/players/4/18/158023.png',
    Nationality: 'Argentina',
    Positions: 'RW',
    Club: 'FC Barcelona',
    Overall: '93',
    Value: '€105M',
    Wage: '€565K'
  }
];

export const getPlayerByClub = [
  {
    Name: 'L. Reed',
    id: 10360,
    Photo: 'https://cdn.sofifa.org/players/4/18/222477.png',
    Nationality: 'England',
    Positions: 'CM',
    Club: 'Chesterfield',
    Overall: '63',
    Value: '€600K',
    Wage: '€5K'
  }
];

export const getPlayersByUser = [
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
];

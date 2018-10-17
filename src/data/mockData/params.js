export const setPlayerInfo = {
  id: 7,
  country_id: 7,
  Name: 'K. De Bruyne',
  Age: '26',
  Photo: 'https://cdn.sofifa.org/players/4/18/192985.png',
  Club_Logo: 'https://cdn.sofifa.org/24/18/teams/10.png',
  Nationality: 'Belgium',
  Positions: 'RM CM CAM',
  Club: 'Manchester City',
  Overall: '89',
  Potential: '92',
  Value: '€83M',
  Wage: '€285K',
  Acceleration: '76',
  Aggression: '68',
  Agility: '80',
  Balance: '75',
  Ball_control: '87',
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
  Penalties: '77',
  Positioning: '84',
  Reactions: '88',
  Short_passing: '90',
  Shot_power: '85',
  Sliding_tackle: '40',
  Sprint_speed: '75',
  Stamina: '87',
  Standing_tackle: '51',
  Strength: '73',
  Vision: '90',
  Volleys: '82',
  created_at: '2018-10-12T01:54:55.564Z'
};

export const getPlayers = [
  'https://fantasy-futbol.herokuapp.com/api/v1/players?start=0&end=2'
];

export const getCountries = [
  'https://fantasy-futbol.herokuapp.com/api/v1/countries'
];

export const getPlayersByCountry = [
  'https://fantasy-futbol.herokuapp.com/api/v1/countries/100/players'
];

export const getPlayer = [
  'https://fantasy-futbol.herokuapp.com/api/v1/players/1/'
];

export const getPlayerByName = [
  'https://fantasy-futbol.herokuapp.com/api/v1/players?name=L. Messi'
];

export const getPlayersByClub = [
  'https://fantasy-futbol.herokuapp.com/api/v1/players?club=Chesterfield'
];

export const addUser = [
  'https://fantasy-futbol.herokuapp.com/api/v1/users',
  {
    body: '"Paul"',
    headers: { 'Content-Type': 'application/json' },
    method: 'POST'
  }
];

export const getUsers = ['https://fantasy-futbol.herokuapp.com/api/v1/users'];

export const getPlayersByUserParam = {
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

export const getPlayersByUser = [
  'https://fantasy-futbol.herokuapp.com/api/v1/players/1'
];

export const deleteUser = [
  'https://fantasy-futbol.herokuapp.com/api/v1/users/21',
  { method: 'DELETE' }
];

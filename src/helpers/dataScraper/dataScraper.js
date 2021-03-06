export const cleanPlayers = players =>
  players.map(player => ({
    Name: player.Name,
    id: player.id,
    Photo: player.Photo,
    Nationality: player.Nationality,
    Positions: player.Positions,
    Club: player.Club,
    Overall: player.Overall,
    Value: player.Value,
    Wage: player.Wage
  }));

export const cleanPlayerNames = players => {
  return players.map(player => {
    return { Name: player.Name, Photo: player.Photo };
  });
};

export const cleanPlayerStats = player => {
  const skillKeys = [
    'Acceleration',
    'Aggression',
    'Agility',
    'Balance',
    'Composure',
    'Strength',
    'Sprint_speed',
    'Jumping',
    'Vision',
    'Stamina'
  ];

  const goalieKeys = [
    'GK_diving',
    'GK_handling',
    'GK_kicking',
    'GK_positioning',
    'GK_reflexes'
  ];

  const offensiveStats = [
    'Free_kick_accuracy',
    'Shot_power',
    'Long_shots',
    'Heading_accuracy',
    'Finishing',
    'Dribbling',
    'Ball_control',
    'Positioning',
    'Curve'
  ];

  const defensiveStats = [
    'Interceptions',
    'Marking',
    'Reactions',
    'Sliding_tackle',
    'Standing_tackle',
    'Crossing',
    'Volleys',
    'Short_passing',
    'Long_passing'
  ];

  return [
    modifyStats(player[0], skillKeys),
    modifyStats(player[0], offensiveStats),
    modifyStats(player[0], defensiveStats),
    modifyStats(player[0], goalieKeys)
  ];
};

const modifyStats = (playerStats, statArr) => {
  const skillStats = statArr.reduce((statObj, stat) => {
    statObj[stat] = Number(playerStats[stat]);
    return statObj;
  }, {});
  return skillStats;
};

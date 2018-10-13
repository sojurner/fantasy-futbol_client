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

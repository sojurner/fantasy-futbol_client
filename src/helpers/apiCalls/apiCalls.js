import * as clean from '../dataScraper/dataScraper';

export const getPlayers = async () => {
  const response = await fetch('http://localhost:3000/api/v1/players');
  const players = await response.json();
  return clean.cleanPlayers(players);
};

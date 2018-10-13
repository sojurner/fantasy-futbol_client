import * as clean from '../dataScraper/dataScraper';

export const getPlayers = async (start, end) => {
  const response = await fetch(`https://fantasy-futbol.herokuapp.com/api/v1/players?start=${start}&end=${end}`);
  const players = await response.json();
  return clean.cleanPlayers(players);
};

export const getCountries = async () => {
	const response = await fetch('https://fantasy-futbol.herokuapp.com/api/v1/countries');
	return await response.json();
};

export const getPlayersByCountry = async (id) => {
	const response = await fetch(`https://fantasy-futbol.herokuapp.com/api/v1/countries/${id}/players`);
	const players = await response.json();
  return clean.cleanPlayers(players);
};
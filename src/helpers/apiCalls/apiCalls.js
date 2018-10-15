import * as clean from '../dataScraper/dataScraper';

export const getPlayers = async (start, end) => {
  const response = await fetch(
    `https://fantasy-futbol.herokuapp.com/api/v1/players?start=${start}&end=${end}`
    // `http://localhost:3000/api/v1/players?start=${start}&end=${end}`
  );
  const players = await response.json();
  return clean.cleanPlayers(players);
};

export const getAllPlayers = async () => {
  const response = await fetch(
    `https://fantasy-futbol.herokuapp.com/api/v1/players`
  );
  const players = await response.json();
  return clean.cleanPlayerNames(players);
};

export const getCountries = async () => {
  const response = await fetch(
    'https://fantasy-futbol.herokuapp.com/api/v1/countries'
    // 'http://localhost:3000/api/v1/countries'
  );
  return await response.json();
};

export const getPlayersByCountry = async id => {
  const response = await fetch(
    `https://fantasy-futbol.herokuapp.com/api/v1/countries/${id}/players`
    // `http://localhost:3000/api/v1/countries/${id}/players`
  );
  const players = await response.json();
  return clean.cleanPlayers(players);
};

export const getPlayer = async id => {
  const response = await fetch(
    `https://fantasy-futbol.herokuapp.com/api/v1/players/${id}/`
    // `http://localhost:3000/api/v1/players/${id}/`
  );
  const player = await response.json();
  return clean.cleanPlayerStats(player);
};

export const getResultsByPlayerName = async name => {
  const response = await fetch(
    `https://fantasy-futbol.herokuapp.com/api/v1/players?name=${name}`
  );
  const players = await response.json();
  return clean.cleanPlayers(players);
};

export const getResultsByPlayerClub = async club => {
  const response = await fetch(
    `https://fantasy-futbol.herokuapp.com/api/v1/players?club=${club}`
  );
  const players = await response.json();
  return clean.cleanPlayers(players);
};

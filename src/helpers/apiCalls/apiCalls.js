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
  let array = [];
  const response = await fetch(
    `https://fantasy-futbol.herokuapp.com/api/v1/players`
  );
  const players = await response.json();
  return clean.cleanPlayers(players);
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

export const addUser = async user => {
  const optionsObject = {
    method: 'POST',
    body: {
      username: JSON.stringify(user)
    },
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  };
  const response = fetch(
    `https://fantasy-futbol.herokuapp.com/api/v1/users`,
    optionsObject
  );
  return response;
};

export const getUsers = async () => {
  const response = await fetch(
    `https://fantasy-futbol.herokuapp.com/api/v1/users`
  );
  const users = await response.json();
  return users;
};

export const getPlayersByUser = async userInfo => {
  const playerKeys = Object.keys(userInfo).filter(keys =>
    keys.includes('player')
  );
  const playerPromises = playerKeys.map(async key => {
    const response = await fetch(
      `https://fantasy-futbol.herokuapp.com/api/v1/players/${userInfo[key]}`
    );
    const player = await response.json();
    return player;
  });

  const usersPlayers = await Promise.all(playerPromises);
  return usersPlayers.reduce((playersArr, player) => {
    player.forEach(obj => {
      playersArr.push(obj);
    });
    return playersArr;
  }, []);
};

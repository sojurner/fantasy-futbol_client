import * as clean from '../dataScraper/dataScraper';

export const getPlayers = async (start, end) => {
  const response = await fetch(
    `https://fantasy-futbol.herokuapp.com/api/v1/players?start=${start}&end=${end}`
    // `http://localhost:3000/api/v1/players?start=${start}&end=${end}`
  );
  const players = await response.json();
  const allPlayers = clean.cleanPlayers(players);
  return allPlayers;
};

export const getAllPlayers = async () => {
  const response = await fetch(
    `https://fantasy-futbol.herokuapp.com/api/v1/players`
  );
  const players = await response.json();
  return clean.cleanPlayers(players);
};

export const getCountries = async () => {
  const response = await fetch(
    'https://fantasy-futbol.herokuapp.com/api/v1/countries'
  );
  const result = await response.json();
  return result;
};

export const getPlayersByCountry = async id => {
  const response = await fetch(
    `https://fantasy-futbol.herokuapp.com/api/v1/countries/${id}/players`
    // `http://localhost:3000/api/v1/countries/${id}/players`
  );
  const players = await response.json();
  const playersByCountry = clean.cleanPlayers(players);
  return playersByCountry;
};

export const getPlayer = async id => {
  const response = await fetch(
    `https://fantasy-futbol.herokuapp.com/api/v1/players/${id}/`
    // `http://localhost:3000/api/v1/players/${id}/`
  );
  const player = await response.json();
  const playerStats = clean.cleanPlayerStats(player);
  return {
    stats: playerStats,
    statType: ['Skills', 'Offense', 'Defense', 'Goal-Keeping'],
    info: {
      id: player[0].id,
      Name: player[0].Name
    }
  };
};

export const getResultsByPlayerName = async name => {
  const response = await fetch(
    `https://fantasy-futbol.herokuapp.com/api/v1/players?name=${name}`
  );
  const players = await response.json();

  const playerByName = clean.cleanPlayers(players);
  return playerByName;
};

export const getResultsByPlayerClub = async club => {
  const response = await fetch(
    `https://fantasy-futbol.herokuapp.com/api/v1/players?club=${club}`
  );
  const players = await response.json();
  const playersByClub = clean.cleanPlayers(players);
  return playersByClub;
};

export const addUser = async user => {
  const optionsObject = {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const response = await fetch(
    `https://fantasy-futbol.herokuapp.com/api/v1/users`,
    optionsObject
  );
  const addedUser = await response.json();
  return addedUser;
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
    if (userInfo[key]) {
      const response = await fetch(
        `https://fantasy-futbol.herokuapp.com/api/v1/players/${userInfo[key]}`
      );
      const player = await response.json();
      return player;
    }
  });

  const usersPlayers = await Promise.all(playerPromises);
  const playersOfUser = usersPlayers.reduce((playersArr, user) => {
    if (user) {
      user.forEach(obj => {
        playersArr.push(obj);
      });
    }
    return playersArr;
  }, []);

  return playersOfUser;
};

export const deleteUser = async id => {
  const response = await fetch(
    `https://fantasy-futbol.herokuapp.com/api/v1/users/${id}`,
    { method: 'DELETE' }
  );
  const results = await response.json();
  return results;
};

export const addPlayerToUser = async (userId, playerId) => {
  const response = await fetch(
    `https://fantasy-futbol.herokuapp.com/api/v1/users/${userId}`
  );
  const user = await response.json();
  const userInfo = user[0];
  const playerKeys = Object.keys(userInfo).filter(key =>
    key.includes('player')
  );
  const matchingKey = playerKeys.find(key => userInfo[key] === null);
  const playerIdToFill = matchingKey.slice(matchingKey.lastIndexOf('_') + 1);
  const responseMessage = await fetch(
    `https://fantasy-futbol.herokuapp.com/api/v1/users/${userId}/${playerIdToFill}/players/${playerId}`,
    { method: 'PUT' }
  );
  return await responseMessage.json();
};

export const removePlayerFromUser = async (userId, playerId) => {
  const response = await fetch(
    `https://fantasy-futbol.herokuapp.com/api/v1/users/${userId}`
	);
	const results = await response.json();
	const playerKeys = Object.keys(results[0]).filter(key => key.includes('player'));
	const matchingKey = playerKeys.find(key => results[0][key] === playerId);
	const playerIdToFill = matchingKey.slice(matchingKey.lastIndexOf('_') + 1);
		const newResponse = await fetch(`https://fantasy-futbol.herokuapp.com/api/v1/users/${userId}/${playerIdToFill}`, {method: 'PUT'});
		const newResult = await newResponse.json();
	
};

import * as fetch from './apiCalls';
import * as resolves from '../../data/mockData/resolves';
import * as params from '../../data/mockData/params';
import * as expects from '../../data/mockData/expects';

describe('API Calls', () => {
  describe('Get Players', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          json: () => Promise.resolve(resolves.getAllPlayersResult)
        });
      });
    });

    it('should call fetch with correct params', () => {
      fetch.getPlayers(0, 2);
      expect(window.fetch).toHaveBeenCalledWith(...params.getPlayers);
    });

    it('should return the proper result', async () => {
      const expected = expects.getPlayers;
      const result = await fetch.getPlayers(0, 2);
      expect(result).toEqual(expected);
    });
  });

  describe('Get Countries', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          json: () => Promise.resolve(resolves.getCountriesResult)
        });
      });
    });

    it('should call fetch with correct params', () => {
      fetch.getCountries();
      expect(window.fetch).toHaveBeenCalledWith(...params.getCountries);
    });

    it('should return the proper result', async () => {
      const expected = expects.getCountries;
      const result = await fetch.getCountries();
      expect(result).toEqual(expected);
    });
  });

  describe('Get Players By Country', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          json: () => Promise.resolve(resolves.getPlayersByCountryResult)
        });
      });
    });

    it('should call window.fetch with correct params', () => {
      fetch.getPlayersByCountry(100);

      expect(window.fetch).toHaveBeenCalledWith(...params.getPlayersByCountry);
    });

    it('should return the proper result', async () => {
      const expected = expects.getPlayersByCountry;
      const result = await fetch.getPlayersByCountry(100);

      expect(result).toEqual(expected);
    });
  });

  describe('Get Player', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          json: () => Promise.resolve(resolves.getPlayerResult)
        });
      });
    });

    it('should call window.fetch with correct params', () => {
      fetch.getPlayer(1);
      expect(window.fetch).toHaveBeenCalledWith(...params.getPlayer);
    });

    it('should return the correct response', async () => {
      const expected = expects.getPlayer;

      const result = await fetch.getPlayer(1);
      expect(result).toEqual(expected);
    });
  });

  describe('Get Results By Player Name', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          json: () => Promise.resolve(resolves.getPlayerByNameResult)
        });
      });
    });

    it('should call window.fetch with correct params', () => {
      fetch.getResultsByPlayerName('L. Messi');
      expect(window.fetch).toHaveBeenCalledWith(...params.getPlayerByName);
    });

    it('should return the proper result', async () => {
      const expected = expects.getPlayerByName;

      const result = await fetch.getResultsByPlayerName('L. Messi');

      expect(result).toEqual(expected);
    });
  });

  describe('Get Results By Player Club', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          json: () => Promise.resolve(resolves.getPlayersByClubResult)
        });
      });
    });

    it('should call fetch with correct params', () => {
      fetch.getResultsByPlayerClub('Chesterfield');

      expect(window.fetch).toHaveBeenCalledWith(...params.getPlayersByClub);
    });

    it('should return the proper result', async () => {
      const expected = expects.getPlayerByClub;

      const result = await fetch.getResultsByPlayerClub('Chesterfield');

      expect(result).toEqual(expected);
    });
  });

  describe('Add User', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          json: () =>
            Promise.resolve({ msg: 'Username: Paul was created with id of 21' })
        });
      });
    });

    it('should call window.fetch with correct params', () => {
      fetch.addUser('Paul');

      expect(window.fetch).toHaveBeenCalledWith(...params.addUser);
    });

    it('should return the proper result', async () => {
      const expected = { msg: 'Username: Paul was created with id of 21' };
      const result = await fetch.addUser('Paul');
      expect(result).toEqual(expected);
    });
  });

  describe('Get Users', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          json: () => Promise.resolve(resolves.getUsersResult)
        });
      });
    });

    it('should call window.fetch with correct params', () => {
      fetch.getUsers();
      expect(window.fetch).toHaveBeenCalledWith(...params.getUsers);
    });

    it('should return proper result', async () => {
      const expected = resolves.getUsersResult;

      const result = await fetch.getUsers();

      expect(result).toEqual(expected);
    });
  });

  describe('Get Players By User', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          json: () => Promise.resolve(resolves.getPlayersByUserResult)
        });
      });
    });

    it('should call window.fetch with correct params', () => {
      fetch.getPlayersByUser(params.getPlayersByUserParam);

      expect(window.fetch).toHaveBeenCalledWith(...params.getPlayersByUser);
    });

    // it('should return proper result', async () => {
    //   const expected = expects.getPlayersByUser;
    //   const result = await fetch.getPlayersByUser(params.getPlayersByUserParam);
    //   expect(result).toEqual(expected);
    // });
  });
  describe('Delete User', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          json: () => Promise.resolve({ msg: 'user successfully deleted' })
        });
      });
    });

    it('should call window.fetch with correct params', () => {
      fetch.deleteUser(21);
      expect(window.fetch).toHaveBeenCalledWith(...params.deleteUser);
    });

    it('should return proper result', async () => {
      const expected = { msg: 'user successfully deleted' };
      const result = await fetch.deleteUser(21);
      expect(result).toEqual(expected);
    });
  });
});

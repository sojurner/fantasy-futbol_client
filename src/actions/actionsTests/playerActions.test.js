import * as playerActions from '../playerActions';
import * as params from '../../data/mockData/params';
import * as expects from '../../data/mockData/expects';

describe('Player Actions', () => {
  let param;
  let expected;

  it('should return proper type of SET_CURRENT_PLAYER', () => {
    param = 1;
    expected = expects.setCurrentPlayer;
    expect(playerActions.setCurrentPlayer(param)).toEqual(expected);
  });

  it('should return proper type of SET_PLAYER_INFO', () => {
    param = params.setPlayerInfo;
    expected = expects.setPlayerInfo;

    expect(playerActions.setPlayerInfo(param)).toEqual(expected);
  });
});

import * as userActions from '../userActions';
import * as expects from '../../data/mockData/expects';

describe('Player Actions', () => {
  let param;
  let expected;
  it('should return proper type of SET_CURRENT_USER', () => {
    param = 2;
    expected = expects.setCurrentUser;

    expect(userActions.setCurrentUser(param)).toEqual(expected);
  });
});

import { combineReducers } from 'redux';
import { playerReducer } from './playerReducer';
import { userReducer } from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  player: playerReducer
});

export default rootReducer;

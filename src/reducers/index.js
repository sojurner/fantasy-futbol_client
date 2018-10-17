import { combineReducers } from 'redux';
import { playerReducer } from './playerReducer';
import { userReducer } from './userReducer';
import { messageReducer } from './messageReducer';

const rootReducer = combineReducers({
  user: userReducer,
  message: messageReducer,
  player: playerReducer
});

export default rootReducer;

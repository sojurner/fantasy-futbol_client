let initialState = {
  id: '',
  info: {}
};

export const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_PLAYER':
      return {
        ...state,
        id: action.playerId
      };

    case 'SET_PLAYER_INFO':
      return {
        ...state,
        info: action.player
      };

    default:
      return state;
  }
};

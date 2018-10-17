export const messageReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_MESSAGE':
      return action.msg;

    default:
      return state;
  }
};

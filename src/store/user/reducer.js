import actions from './actions';

const initialState = {
  token: '',
  profile: {}
};

const User = (state = initialState, action) => {
  switch (action.type) {
    case actions.USER_PROFILE:
      return { ...state, profile: action.payload };
    case actions.TOKEN:
      return { ...state, token: action.payload };
    default:
      return state;
  }
};

export default User;

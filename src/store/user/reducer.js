import actions from './actions';

const initialState = {
  profile: {},
  token: ''
};

const User = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      return { ...state, token: action.token };
    default:
      return state;
  }
};

export default User;

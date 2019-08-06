import actions from './actions';

const initialState = {
  profile: {}
};

const User = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      return { ...state, profile: action.profile };
    default:
      return state;
  }
};

export default User;

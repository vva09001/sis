import actions from './actions';

const initialState = {
  profile: {},
  id: '',
  token: ''
};

const User = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        profile: action.profile,
        id: action.profile.id,
        token: action.profile.token
      };
    case actions.SAVE_INFO_SUCCESS:
      return { ...state, profile: action.profile };
    case actions.LOOUT_SUCCESS:
      return { ...state, profile: {} };
    default:
      return state;
  }
};

export default User;

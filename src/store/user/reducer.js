import actions from './actions';

const initialState = {
  profile: {},
  loading: false
};

const User = (state = initialState, action) => {
  switch (action.type) {
    case actions.REGISTER_LOADING:
      return { ...state, loading: true };
    case actions.REGISTER_SUCCESS:
      return { ...state, loading: false };
    case actions.REGISTER_ERROR:
      return { ...state, loading: false };
    case actions.LOGIN_SUCCESS:
      return { ...state, profile: action.auth };
    default:
      return state;
  }
};

export default User;

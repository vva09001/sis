import actions from './actions';

const initialState = {
  profile: {},
  loading: false
};

const User = (state = initialState, action) => {
  switch (action.type) {
    case actions.REGISTER_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
};

export default User;

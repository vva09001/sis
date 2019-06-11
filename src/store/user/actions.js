const actions = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',

  USER_PROFILE: 'USER_PROFILE',
  TOKEN: 'TOKEN',

  USER_LOADING: 'DATA_LOADING',
  ERROR: 'ERROR',
  login: params => ({
    type: actions.LOGIN,
    params
  }),
  logout: () => ({
    type: actions.LOGOUT
  })
};
export default actions;

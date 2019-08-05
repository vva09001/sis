const actions = {
  REGISTER_REQUEST: 'REGISTER_REQUEST',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  REGISTER_ERROR: 'REGISTER_ERROR',
  REGISTER_LOADING: 'REGISTER_LOADING',
  register: (params, success, fail) => ({
    type: actions.REGISTER_REQUEST,
    params,
    success,
    fail
  }),

  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  login: (params, success, fail) => ({
    type: actions.LOGIN_REQUEST,
    params,
    success,
    fail
  })
};
export default actions;

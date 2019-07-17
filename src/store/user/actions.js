const actions = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGIN_LOADING: 'LOGIN_LOADING',

  REGISTER_REQUEST: 'REGISTER_REQUEST',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  REGISTER_ERROR: 'REGISTER_ERROR',
  REGISTER_LOADING: 'REGISTER_LOADING',

  register: params => ({
    type: actions.REGISTER_REQUEST,
    params
  }),
  login: params => ({
    type: actions.LOGIN_REQUEST,
    params
  })
};
export default actions;

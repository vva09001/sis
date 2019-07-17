const actions = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGIN_LOADING: 'LOGIN_LOADING',

  REGISTER_REQUEST: 'LOGIN_REQUEST',
  REGISTER_SUCCESS: 'LOGIN_SUCCESS',
  REGISTER_ERROR: 'LOGIN_ERROR',
  REGISTER_LOADING: 'REGISTER_LOADING',

  register: params => ({
    type: actions.REGISTER_REQUEST,
    params
  }),
  login: () => ({
    type: actions.LOGIN_REQUEST
  })
};
export default actions;

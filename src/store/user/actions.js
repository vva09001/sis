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
  }),

  SAVE_CODE_REQUEST: 'SAVE_CODE_REQUEST',
  SAVE_CODE_SUCCESS: 'SAVE_CODE_SUCCESS',

  saveCodeInsurance: (params, success, fail) => ({
    type: actions.Save_Code_REQUEST,
    params,
    success,
    fail
  }),
  SAVE_INFO_REQUEST: 'SAVE_INFO_REQUEST',
  SAVE_INFO_SUCCESS: ' SAVE_INFO_SUCCESS',

  saveInfo: (params, id, token, success, fail) => ({
    type: actions.SAVE_INFO_REQUEST,
    params,
    id,
    token,
    success,
    fail
  }),

  LOOUT_REQUEST: 'LOOUT_REQUEST',
  LOOUT_SUCCESS: 'LOOUT_SUCCESS',
  logout: () => ({
    type: actions.LOOUT_REQUEST
  })
};
export default actions;

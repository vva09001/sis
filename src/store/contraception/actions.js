const actions = {
  CONTRACEPTION_REQUEST: 'CONTRACEPTION_REQUEST',
  CONTRACEPTION_SUCCESS: 'CONTRACEPTION_SUCCESS',

  contraception: (params, success, fail) => ({
    type: actions.CONTRACEPTION_REQUEST,
    params,
    success,
    fail
  })
};

export default actions;

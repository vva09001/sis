const actions = {
  ACCIDENT_REQUEST: 'ACCIDENT_REQUEST',
  ACCIDENT_SUCCESS: 'ACCIDENT_SUCCESS',

  accident: (params, success, fail) => ({
    type: actions.ACCIDENT_REQUEST,
    params,
    success,
    fail
  })
};

export default actions;

const actions = {
  MISCARRIAGE_REQUEST: 'MISCARRIAGE_REQUEST',
  MISCARRIAGE_SUCCESS: 'MISCARRIAGE_SUCCESS',

  miscarriage: (params, success, fail) => ({
    type: actions.MISCARRIAGE_REQUEST,
    params,
    success,
    fail
  })
};

export default actions;

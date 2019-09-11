const actions = {
  UNEMPLOYED_REQUEST: 'UNEMPLOYED_REQUEST',
  UNEMPLOYED_SUCCESS: 'UNEMPLOYED_SUCCESS',

  unemployed: (params, success, fail) => ({
    type: actions.UNEMPLOYED_REQUEST,
    params,
    success,
    fail
  }),

  SEVERANCE_REQUEST: 'SEVERANCE_REQUEST',
  SEVERANCE_SUCCESS: 'SEVERANCE_SUCCESS',

  severance: (params, success, fail) => ({
    type: actions.SEVERANCE_REQUEST,
    params,
    success,
    fail
  }),

  LOSTMYJOB_REQUEST: 'LOSTMYJOB_REQUEST',
  LOSTMYJOB_SUCCESS: 'LOSTMYJOB_SUCCESS',

  lostmyjob: (params, success, fail) => ({
    type: actions.LOSTMYJOB_REQUEST,
    params,
    success,
    fail
  }),

  TEMPORARY_REQUEST: 'TEMPORARY_REQUEST',
  TEMPORARY_SUCCESS: 'TEMPORARY_SUCCESS',

  temporary: (params, success, fail) => ({
    type: actions.TEMPORARY_REQUEST,
    params,
    success,
    fail
  })
};

export default actions;

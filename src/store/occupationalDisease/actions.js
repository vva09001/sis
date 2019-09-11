const actions = {
  ACCIDENT_REQUEST: 'ACCIDENT_REQUEST',
  ACCIDENT_SUCCESS: 'ACCIDENT_SUCCESS',

  accident: (params, success, fail) => ({
    type: actions.ACCIDENT_REQUEST,
    params,
    success,
    fail
  }),

  SICK_REQUEST: 'SICK_REQUEST',
  SICK_SUCCESS: 'SICK_SUCCESS',

  sick: (params, success, fail) => ({
    type: actions.SICK_REQUEST,
    params,
    success,
    fail
  }),
  REHIBILITATE_REQUEST: 'REHIBILITATE_REQUEST',
  REHIBILITATE_SUCCESS: 'REHIBILITATE_SUCCESS',

  rehibilitate: (params, success, fail) => ({
    type: actions.REHIBILITATE_REQUEST,
    params,
    success,
    fail
  }),

  ALLOWANCE_REQUEST: 'ALLOWANCE_REQUEST',
  ALLOWANCE_SUCCESS: 'ALLOWANCE_SUCCESS',

  allowance: (params, success, fail) => ({
    type: actions.ALLOWANCE_REQUEST,
    params,
    success,
    fail
  })
};

export default actions;

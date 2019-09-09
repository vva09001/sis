const actions = {
  SICK_SHORT_DAY_REQUEST: 'SICK_SHORT_DAY_REQUEST',
  SICK_SHORT_DAY_SUCCESS: 'SICK_SHORT_DAY_SUCCESS',

  sickShortDay: (params, success, fail) => ({
    type: actions.SICK_SHORT_DAY_REQUEST,
    params,
    success,
    fail
  }),

  SICK_LONG_DAY_REQUEST: 'SICK_LONG_DAY_REQUEST',
  SICK_LONG_DAY_SUCCESS: 'SICK_LONG_DAY_SUCCESS',

  sickLongDay: (params, success, fail) => ({
    type: actions.SICK_LONG_DAY_REQUEST,
    params,
    success,
    fail
  }),

  SICK_RECUPERATE_REQUEST: 'SICK_RECUPERATE_REQUEST',
  SICK_RECUPERATE_SUCESS: 'SICK_RECUPERATE_SUCCESS',

  recuperate: (params, success, fail) => ({
    type: actions.SICK_RECUPERATE_REQUEST,
    params,
    success,
    fail
  }),

  SICK_CHILDREN_REQUEST: 'SICK_CHILDREN_REQUEST',
  SICK_CHILDREN_SUCESS: 'SICK_CHILDREN_SUCESS',

  sickchildren: (params, success, fail) => ({
    type: actions.SICK_CHILDREN_REQUEST,
    params,
    success,
    fail
  })
};

export default actions;

const actions = {
  NORMAL_BIRTH_REQUEST: 'NORMAL_BIRTH_REQUEST',
  NORMAL_BIRTH_SUCCESS: 'NORMAL_BIRTH_SUCCESS',

  normalBirth: (params, success, fail) => ({
    type: actions.NORMAL_BIRTH_REQUEST,
    params,
    success,
    fail
  }),

  SPECIAL_BIRTH_REQUEST: 'SPECIAL_BIRTH_REQUEST',
  SPECIAL_BIRTH_SUCCESS: 'SPECIAL_BIRTH_SUCCESS',

  specialBirth: (params, success, fail) => ({
    type: actions.SPECIAL_BIRTH_REQUEST,
    params,
    success,
    fail
  }),

  STILL_BIRTH_REQUEST: 'STILL_BIRTH_REQUEST',
  STILL_BIRTH_SUCCESS: 'STILL_BIRTH_SUCCESS',

  stillBirth: (params, success, fail) => ({
    type: actions.STILL_BIRTH_REQUEST,
    params,
    success,
    fail
  }),

  CHILD_DIED_AFTER_BIRTH_REQUEST: 'CHILD_DIED_AFTER_BIRTH_REQUEST',
  CHILD_DIED_AFTER_BIRTH_SUCCESS: 'CHILD_DIED_AFTER_BIRTH_SUCCESS',

  childDiedAfterBirth: (params, success, fail) => ({
    type: actions.CHILD_DIED_AFTER_BIRTH_REQUEST,
    params,
    success,
    fail
  }),

  MATERNITY_LEAVE_REQUEST: 'MATERNITY_LEAVE_REQUEST',
  MATERNITY_LEAVE_SUCCESS: 'MATERNITY_LEAVE_SUCCESS',

  maternityLeave: (params, success, fail) => ({
    type: actions.MATERNITY_LEAVE_REQUEST,
    params,
    success,
    fail
  }),

  MEN_SEARCH_PARTICIPATION_REQUEST: 'MEN_SEARCH_PARTICIPATION_REQUEST',
  MEN_SEARCH_PARTICIPATION_SUCCESS: 'MEN_SEARCH_PARTICIPATION_SUCCESS',

  menSearchParticipation: (params, success, fail) => ({
    type: actions.MEN_SEARCH_PARTICIPATION_REQUEST,
    params,
    success,
    fail
  }),

  MEN_SEARCH_NO_PARTICIPATION_REQUEST: 'MEN_SEARCH_NO_PARTICIPATION_REQUEST',
  MEN_SEARCH_NO_PARTICIPATION_SUCCESS: 'MEN_SEARCH_NO_PARTICIPATION_SUCCESS',

  menSearchNoParticipation: (params, success, fail) => ({
    type: actions.MEN_SEARCH_NO_PARTICIPATION_REQUEST,
    params,
    success,
    fail
  })
};

export default actions;

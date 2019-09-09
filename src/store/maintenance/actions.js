const actions = {
  MAINTENANCE_REQUEST: 'MAINTENANCE_REQUEST',
  MAINTENANCE_SUCCESS: 'MAINTENANCE_SUCCESS',

  maintenance: (params, success, fail) => ({
    type: actions.MAINTENANCE_REQUEST,
    params,
    success,
    fail
  })
};

export default actions;

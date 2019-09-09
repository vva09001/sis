const actios = {
  ADOPTED_REQUEST: 'ADOPTED_REQUEST',
  ADOPTED_SUCCESS: 'ADOPTED_SUCCESS',

  adopted: (params, success, fail) => ({
    type: actios.ADOPTED_REQUEST,
    params,
    success,
    fail
  })
};

export default actios;

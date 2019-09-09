const actions = {
  SURROGACY_REQUEST: 'SURROGACY_REQUEST',
  SURROGACY_SUCCESS: 'SURROGACY_SUCCESS',

  surrogacy: (params, success, fail) => ({
    type: actions.SURROGACY_REQUEST,
    params,
    success,
    fail
  }),

  THANK_SURROGACY_REQUEST: 'THANK_SURROGACY_REQUEST',
  THANK_SURROGACY_SUCCESS: 'THANK_SURROGACY_SUCCESS',

  thanksurrogacy: (params, success, fail) => ({
    type: actions.THANK_SURROGACY_REQUEST,
    params,
    success,
    fail
  })
};

export default actions;

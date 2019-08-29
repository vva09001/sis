const actios = {
  ANTENATALEXAMINATION_REQUEST: 'ANTENATALEXAMINATION_REQUEST',
  ANTENATALEXAMINATION_SUCCESS: 'ANTENATALEXAMINATION_SUCCESS',

  antenatalexamination: (params, success, fail) => ({
    type: actios.ANTENATALEXAMINATION_REQUEST,
    params,
    success,
    fail
  })
};

export default actios;

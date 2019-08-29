import actions from './actions';

const initialState = {
  checkBenefits: {}
};

const Maternity = (state = initialState, action) => {
  switch (action.type) {
    case actions.ANTENATALEXAMINATION_SUCCESS:
      return {
        ...state,
        checkBenefits: action.data
      };

    default:
      return state;
  }
};

export default Maternity;

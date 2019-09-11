import actions from './actions';

const innitialState = {
  unemployed: {},
  severance: {},
  lostmyjob: {},
  temporary: {}
};

const Unemployed = (state = innitialState, action) => {
  switch (action.type) {
    case actions.UNEMPLOYED_SUCCESS:
      return {
        ...state,
        unemployed: action.data
      };
    case actions.SEVERANCE_SUCCESS:
      return {
        ...state,
        severance: action.data
      };
    case actions.LOSTMYJOB_SUCCESS:
      return {
        ...state,
        lostmyjob: action.data
      };
    case actions.TEMPORARY_SUCCESS:
      return {
        ...state,
        temporary: action.data
      };
    default:
      return state;
  }
};

export default Unemployed;

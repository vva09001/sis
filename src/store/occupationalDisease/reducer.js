import actions from './actions';

const innitialState = {
  accident: {},
  sick: {},
  rehibilitate: {},
  allowance: {}
};

const OccupationalDisease = (state = innitialState, action) => {
  switch (action.type) {
    case actions.ACCIDENT_SUCCESS:
      return {
        ...state,
        accident: action.data
      };
    case actions.SICK_SUCCESS:
      return {
        ...state,
        sick: action.data
      };
    case actions.REHIBILITATE_SUCCESS:
      return {
        ...state,
        rehibilitate: action.data
      };
    case actions.ALLOWANCE_SUCCESS:
      return {
        ...state,
        allowance: action.data
      };

    default:
      return state;
  }
};

export default OccupationalDisease;

import actions from './actions';

const innitialState = {
  accident: {}
};

const OccupationalDisease = (state = innitialState, action) => {
  switch (action.type) {
    case actions.ACCIDENT_SUCCESS:
      return {
        ...state,
        accident: action.data
      };

    default:
      return state;
  }
};

export default OccupationalDisease;

import actions from './actions';

const innitialState = {
  miscarriage: {}
};

const miscarriage = (state = innitialState, action) => {
  switch (action.type) {
    case actions.MISCARRIAGE_SUCCESS:
      return {
        ...state,
        miscarriage: action.data
      };
    default:
      return state;
  }
};

export default miscarriage;

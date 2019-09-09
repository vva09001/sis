import actions from './actions';

const innitialState = {
  contraception: {}
};

const contraception = (state = innitialState, action) => {
  switch (action.type) {
    case actions.CONTRACEPTION_SUCCESS:
      return {
        ...state,
        contraception: action.data
      };
    default:
      return state;
  }
};

export default contraception;

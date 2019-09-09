import actions from './actions';

const innitialState = {
  surrogacy: {},
  thanksurrogacy: {}
};

const surrogacy = (state = innitialState, action) => {
  switch (action.type) {
    case actions.SURROGACY_SUCCESS:
      return {
        ...state,
        surrogacy: action.data
      };
    case actions.THANK_SURROGACY_SUCCESS:
      return {
        ...state,
        thanksurrogacy: action.data
      };
    default:
      return state;
  }
};

export default surrogacy;

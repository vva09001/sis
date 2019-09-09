import actions from './actions';

const initialState = {
  adoptedChild: {}
};

const adoptedChild = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADOPTED_SUCCESS:
      return {
        ...state,
        adoptedChild: action.data
      };
    default:
      return state;
  }
};

export default adoptedChild;

import actions from './actions';

const innitialState = {
  maintenance: {}
};

const Maintenance = (state = innitialState, action) => {
  switch (action.type) {
    case actions.MAINTENANCE_SUCCESS:
      return {
        ...state,
        maintenance: action.data
      };

    default:
      return state;
  }
};

export default Maintenance;

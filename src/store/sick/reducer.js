import actions from './actions';

const innitialState = {
  sickShortDay: {},
  sickLongDay: {},
  recuperate: {},
  sickchildren: {}
};

const Sick = (state = innitialState, action) => {
  switch (action.type) {
    case actions.SICK_SHORT_DAY_SUCCESS:
      return {
        ...state,
        sickShortDay: action.data
      };
    case actions.SICK_LONG_DAY_SUCCESS:
      return {
        ...state,
        sickLongDay: action.data
      };
    case actions.SICK_RECUPERATE_SUCESS:
      return {
        ...state,
        recuperate: action.data
      };
    case actions.SICK_CHILDREN_SUCESS:
      return {
        ...state,
        sickchildren: action.data
      };
    default:
      return state;
  }
};

export default Sick;

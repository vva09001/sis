import actions from './actions';

const initialState = {
  normalBirth: {},
  specailBirth: {},
  stillBirth: {},
  childDiedAfterBirth: {},
  maternityLeave: {}
};

const childBirth = (state = initialState, action) => {
  switch (action.type) {
    case actions.NORMAL_BIRTH_SUCCESS:
      return {
        ...state,
        normalBirth: action.data
      };
    case actions.SPECIAL_BIRTH_SUCCESS:
      return {
        ...state,
        specailBirth: action.data
      };
    case actions.STILL_BIRTH_SUCCESS:
      return {
        ...state,
        stillBirth: action.data
      };
    case actions.CHILD_DIED_AFTER_BIRTH_SUCCESS:
      return {
        ...state,
        childDiedAfterBirth: action.data
      };
    case actions.MATERNITY_LEAVE_SUCCESS:
      return {
        ...state,
        maternityLeave: action.data
      };

    default:
      return state;
  }
};

export default childBirth;

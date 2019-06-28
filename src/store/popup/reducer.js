import { actions } from './actions';

const init = {
  type: 'CLOSE_POPUP',
  payload: {
    pClass: 'hidden'
  }
};

export const popupReducer = (state = init, action) => {
  switch (action.type) {
    case actions.OPEN_POPUP: {
      return { ...state, ...action };
    }
    case actions.CLOSE_POPUP: {
      return { ...state, ...action };
    }
    default:
      return { ...state };
  }
};

export default popupReducer;

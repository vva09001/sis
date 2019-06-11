import actions from './actions';

const initialState = {
  branchs: [],
  packages: [],
  loading: false,
  error: {}
};

const Data = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_BRAND_SUCCESS:
      return { ...state, branchs: action.payload };
    case actions.GET_PACKAGE_SUCCESS:
      return { ...state, packages: action.payload };
    case actions.DATA_LOADING:
      return { ...state, loading: action.loading };
    case actions.ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default Data;

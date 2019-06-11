const actions = {
  GET_BRAND_REQUEST: 'GET_BRAND_REQUEST',
  GET_BRAND_SUCCESS: 'GET_BRAND_SUCCESS',

  GET_PACKAGE_REQUEST: 'GET_PACKAGE_REQUEST',
  GET_PACKAGE_SUCCESS: 'GET_PACKAGE_SUCCESS',

  DATA_LOADING: 'DATA_LOADING',
  ERROR: 'ERROR',
  getBrands: () => ({
    type: actions.GET_BRAND_REQUEST
  }),
  getPackage: params => ({
    type: actions.GET_PACKAGE_REQUEST,
    params
  })
};
export default actions;

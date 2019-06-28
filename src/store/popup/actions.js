export const actions = {
  OPEN_POPUP: 'OPEN_POPUP',
  CLOSE_POPUP: 'CLOSE_POPUP',

  openPopup: params => ({
    type: 'OPEN_POPUP',
    payload: { ...params, pClass: 'visible' }
  }),

  closePopup: {
    type: 'CLOSE_POPUP',
    payload: { pClass: 'hidden' }
  }
};

export default actions;

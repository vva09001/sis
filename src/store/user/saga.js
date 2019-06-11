import actions from './actions';
import { all, fork, put, takeEvery } from 'redux-saga/effects';
import { errorActions } from 'store/actions';

export function* signInSaga() {
  yield takeEvery(actions.LOGIN, function*() {
    try {
      yield put({ type: errorActions.ERROR, error: 'error.message' });
    } catch (error) {
      yield put({ type: errorActions.ERROR, error: error.message });
    }
  });
}
export function* logOutSaga() {
  yield takeEvery(actions.LOGOUT, function*() {
    try {
      yield put({ type: errorActions.ERROR, error: '123' });
    } catch (error) {
      yield put({ type: errorActions.ERROR, error: error.message });
    }
  });
}
export default function* rootSaga() {
  yield all([fork(signInSaga), fork(logOutSaga)]);
}

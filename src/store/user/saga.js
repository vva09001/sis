import actions from './actions';
import { all, fork, put, takeEvery } from 'redux-saga/effects';
// import { Register } from '../../services/user';
import { userActions } from '../../store/actions';
// import token from '../../utils/token';

export function* registerSaga() {
  yield takeEvery(actions.LOGIN_REQUEST, function*(data) {
    try {
      // console.log(Register(data.params, token));
      yield put({ type: userActions.REGISTER_LOADING });
      // const res = yield Register(data);
      // console.log(res);
      // yield put({ type: userActions.REGISTER_SUCCESS, error: 'error.message' });
    } catch (error) {
      // yield put({ type: userActions.REGISTER_ERROR, error: error.message });
    }
  });
}

export default function* rootSaga() {
  yield all([fork(registerSaga)]);
}

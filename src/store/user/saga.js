import actions from './actions';
import { all, fork, put, takeEvery } from 'redux-saga/effects';
import { Register, Login } from '../../services/user';
import { userActions } from '../../store/actions';

export function* registerSaga() {
  yield takeEvery(actions.REGISTER_REQUEST, function*(data) {
    const { params, success, fail } = data;
    try {
      yield put({ type: userActions.REGISTER_LOADING });
      const res = yield Register(params);
      if (res.status === 200) {
        yield success();
      } else {
        yield fail(res.data.error.message);
      }
    } catch (error) {
      yield fail();
    }
  });
}

export function* loginSaga() {
  yield takeEvery(actions.LOGIN_REQUEST, function*(data) {
    const { params, success, fail } = data;
    try {
      const res = yield Login(params);
      if (res.status === 200) {
        yield put({ type: userActions.LOGIN_SUCCESS, token: res.data.token });
        yield success();
      } else {
        yield fail(res.data.error.message);
      }
    } catch (error) {
      yield fail();
    }
  });
}

export default function* rootSaga() {
  yield all([fork(registerSaga), fork(loginSaga)]);
}

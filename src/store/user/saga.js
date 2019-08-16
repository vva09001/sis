import actions from './actions';
import { all, fork, put, takeEvery } from 'redux-saga/effects';
import { Register, Login, SaveCodeInsurance, SaveInfo } from '../../services/user';
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
      yield fail('Không thể kết nối đến Sever');
    }
  });
}

export function* loginSaga() {
  yield takeEvery(actions.LOGIN_REQUEST, function*(data) {
    const { params, success, fail } = data;
    try {
      const res = yield Login(params);
      if (res.status === 200) {
        yield put({ type: userActions.LOGIN_SUCCESS, profile: res.data });
        yield success();
      } else {
        yield fail(res.data.error.message);
      }
    } catch (error) {
      yield fail('Không thể kết nối đến Sever');
    }
  });
}

export function* saveCodeInsuranceSaga() {
  yield takeEvery(actions.SAVE_CODE_REQUEST, function*(data) {
    const { params, success, fail } = data;
    try {
      const res = yield SaveCodeInsurance(params);
      if (res.status === 204) {
        yield success();
      } else {
        yield fail(res.data.error.message);
      }
    } catch (error) {
      yield fail('Không thể kết nối đến Sever');
    }
  });
}

export function* saveInfo() {
  yield takeEvery(actions.SAVE_INFO_REQUEST, function*(data) {
    const { params, id, token, success, fail } = data;
    try {
      const res = SaveInfo(params, id, token);
      if (res.status === 2004) {
        yield success();
      } else {
        yield fail(res.data.error.message);
      }
    } catch (error) {
      yield fail('Không thể kết nối đến Sever');
    }
  });
}

export function* logoutSaga() {
  yield takeEvery(actions.LOOUT_REQUEST, function*() {
    yield put({ type: actions.LOOUT_SUCCESS });
  });
}

export default function* rootSaga() {
  yield all([
    fork(registerSaga),
    fork(loginSaga),
    fork(saveCodeInsuranceSaga),
    fork(saveInfo),
    fork(logoutSaga)
  ]);
}

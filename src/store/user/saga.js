import actions from './actions';
import { all, fork, put, select, takeLatest } from 'redux-saga/effects';
import { id, token } from '../selectors';
import { Register, Login, SaveCodeInsurance, SaveInfo, getUserByID } from '../../services/user';

export function* registerSaga() {
  yield takeLatest(actions.REGISTER_REQUEST, function*(data) {
    const { params, success, fail } = data;
    try {
      const res = yield Register(params);
      if (res.status === 200) {
        yield success();
      } else {
        yield fail(res.data.message);
      }
    } catch (error) {
      yield fail('Không thể kết nối đến Sever');
    }
  });
}

export function* loginSaga() {
  yield takeLatest(actions.LOGIN_REQUEST, function*(data) {
    const { params, success, fail } = data;
    try {
      const res = yield Login(params);
      if (res.status === 200) {
        yield put({ type: actions.LOGIN_SUCCESS, profile: res.data });
        yield success();
      } else {
        yield fail(res.data.message);
      }
    } catch (error) {
      yield fail('Không thể kết nối đến Sever');
    }
  });
}

export function* saveCodeInsuranceSaga() {
  yield takeLatest(actions.SAVE_CODE_REQUEST, function*(data) {
    const { params, success, fail } = data;
    try {
      const userToken = yield select(token);
      const res = yield SaveCodeInsurance(params, userToken);
      if (res.status === 200) {
        yield success();
      } else {
        yield fail(res.data.message);
      }
    } catch (error) {
      yield fail('Không thể kết nối đến Sever');
    }
  });
}

export function* saveInfo() {
  yield takeLatest(actions.SAVE_INFO_REQUEST, function*(data) {
    const { params, success, fail } = data;
    try {
      const userid = yield select(id);
      const userToken = yield select(token);
      const res = yield SaveInfo(params, userid, userToken);
      if (res.status === 200) {
        const getUser = yield getUserByID(userid, userToken);
        if (getUser.status === 200) {
          yield put({ type: actions.SAVE_INFO_SUCCESS, profile: res.data });
          yield success();
        } else {
          yield fail(res.data.message);
        }
      } else {
        yield fail(res.data.message);
      }
    } catch (error) {
      yield fail('Không thể kết nối đến Sever');
    }
  });
}

export function* logoutSaga() {
  yield takeLatest(actions.LOOUT_REQUEST, function*() {
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

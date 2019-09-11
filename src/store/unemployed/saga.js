import actions from './actions';
import { id } from '../selectors';
import { put, all, takeLatest, select, fork } from 'redux-saga/effects';
import { unemployed, severance, lostmyjob, temporary } from '../../services/unemployed';

export function* unemployedSaga() {
  yield takeLatest(actions.UNEMPLOYED_REQUEST, function*(data) {
    const { params, success, fail } = data;
    try {
      const userid = yield select(id);
      const res = yield unemployed(params, userid);
      if (res.status === 200) {
        yield put({ type: actions.UNEMPLOYED_SUCCESS, data: res.data });
        yield success();
      } else {
        yield fail(res.data.message);
      }
    } catch (error) {
      yield fail('Không thể kết nối đến server');
    }
  });
}

export function* severanceSaga() {
  yield takeLatest(actions.SEVERANCE_REQUEST, function*(data) {
    const { params, success, fail } = data;
    try {
      const userid = yield select(id);
      const res = yield severance(params, userid);
      if (res.status === 200) {
        yield put({ type: actions.SEVERANCE_SUCCESS, data: res.data });
        yield success();
      } else {
        yield fail(res.data.message);
      }
    } catch (error) {
      yield fail('Không thể kết nối đến server');
    }
  });
}

export function* lostmyjobSaga() {
  yield takeLatest(actions.LOSTMYJOB_REQUEST, function*(data) {
    const { params, success, fail } = data;
    try {
      const userid = yield select(id);
      const res = yield lostmyjob(params, userid);
      if (res.status === 200) {
        yield put({ type: actions.LOSTMYJOB_SUCCESS, data: res.data });
        yield success();
      } else {
        yield fail(res.data.message);
      }
    } catch (error) {
      yield fail('Không thể kết nối đến server');
    }
  });
}

export function* temporarySaga() {
  yield takeLatest(actions.TEMPORARY_REQUEST, function*(data) {
    const { params, success, fail } = data;
    try {
      const userid = yield select(id);
      const res = yield temporary(params, userid);
      if (res.status === 200) {
        yield put({ type: actions.TEMPORARY_SUCCESS, data: res.data });
        yield success();
      } else {
        yield fail(res.data.message);
      }
    } catch (error) {
      yield fail('Không thể kết nối đến server');
    }
  });
}

export default function* rootSaga() {
  yield all([fork(unemployedSaga), fork(severanceSaga), fork(lostmyjobSaga), fork(temporarySaga)]);
}

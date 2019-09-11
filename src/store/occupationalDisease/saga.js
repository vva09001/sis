import actions from './actions';
import { accident, sick, rehibilitate, allowance } from '../../services/occupationalDisease';
import { id } from '../selectors';
import { put, all, takeLatest, select, fork } from 'redux-saga/effects';

export function* accidentSaga() {
  yield takeLatest(actions.ACCIDENT_REQUEST, function*(data) {
    const { params, success, fail } = data;
    try {
      const userid = yield select(id);
      const res = yield accident(params, userid);
      if (res.status === 200) {
        yield put({ type: actions.ACCIDENT_SUCCESS, data: res.data });
        yield success();
      } else {
        yield fail(res.data.message);
      }
    } catch (error) {
      yield fail('Không thể kết nối đến server');
    }
  });
}

export function* sickSaga() {
  yield takeLatest(actions.SICK_REQUEST, function*(data) {
    const { params, success, fail } = data;
    try {
      const userid = yield select(id);
      const res = yield sick(params, userid);
      if (res.status === 200) {
        yield put({ type: actions.SICK_SUCCESS, data: res.data });
        yield success();
      } else {
        yield fail(res.data.message);
      }
    } catch (error) {
      yield fail('Không thể kết nối đến server');
    }
  });
}

export function* rehibilitateSaga() {
  yield takeLatest(actions.REHIBILITATE_REQUEST, function*(data) {
    const { params, success, fail } = data;
    try {
      const userid = yield select(id);
      const res = yield rehibilitate(params, userid);
      if (res.status === 200) {
        yield put({ type: actions.REHIBILITATE_SUCCESS, data: res.data });
        yield success();
      } else {
        yield fail(res.data.message);
      }
    } catch (error) {
      yield fail('Không thể kết nối đến server');
    }
  });
}

export function* allowanceSaga() {
  yield takeLatest(actions.ALLOWANCE_REQUEST, function*(data) {
    const { params, success, fail } = data;
    try {
      const userid = yield select(id);
      const res = yield allowance(params, userid);
      if (res.status === 200) {
        yield put({ type: actions.ALLOWANCE_SUCCESS, data: res.data });
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
  yield all([fork(accidentSaga), fork(sickSaga), fork(rehibilitateSaga), fork(allowanceSaga)]);
}

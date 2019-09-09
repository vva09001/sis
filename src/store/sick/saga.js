import actions from './actions';
import { sickShortDay, sickLongDay, recuperate, sickchildren } from '../../services/sick';
import { id } from '../selectors';
import { put, all, takeLatest, select, fork } from 'redux-saga/effects';

export function* sickShortDaySaga() {
  yield takeLatest(actions.SICK_SHORT_DAY_REQUEST, function*(data) {
    const { params, success, fail } = data;
    try {
      const userid = yield select(id);
      const res = yield sickShortDay(params, userid);
      if (res.status === 200) {
        yield put({ type: actions.SICK_SHORT_DAY_SUCCESS, data: res.data });
        yield success();
      } else {
        yield fail(res.data.message);
      }
    } catch (error) {
      yield fail('Không thể kết nối đến server');
    }
  });
}

export function* sickLongDaySaga() {
  yield takeLatest(actions.SICK_LONG_DAY_REQUEST, function*(data) {
    const { params, success, fail } = data;
    try {
      const userid = yield select(id);
      const res = yield sickLongDay(params, userid);
      if (res.status === 200) {
        yield put({ type: actions.SICK_LONG_DAY_SUCCESS, data: res.data });
        yield success();
      } else {
        yield fail(res.data.message);
      }
    } catch (error) {
      yield fail('Không thể kết nối đến server');
    }
  });
}

export function* recuperateSaga() {
  yield takeLatest(actions.SICK_RECUPERATE_REQUEST, function*(data) {
    const { params, success, fail } = data;
    try {
      const userid = yield select(id);
      const res = yield recuperate(params, userid);
      if (res.status === 200) {
        yield put({ type: actions.SICK_RECUPERATE_SUCESS, data: res.data });
        yield success();
      } else {
        yield fail(res.data.message);
      }
    } catch (error) {
      yield fail('Không thể kết nối đến server');
    }
  });
}

export function* sickchildrenSaga() {
  yield takeLatest(actions.SICK_CHILDREN_REQUEST, function*(data) {
    const { params, success, fail } = data;
    try {
      const userid = yield select(id);
      const res = yield sickchildren(params, userid);
      if (res.status === 200) {
        yield put({ type: actions.SICK_CHILDREN_SUCESS, data: res.data });
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
  yield all([
    fork(sickShortDaySaga),
    fork(sickLongDaySaga),
    fork(recuperateSaga),
    fork(sickchildrenSaga)
  ]);
}

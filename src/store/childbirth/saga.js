import actions from './actions';
import {
  normalBirth,
  specialBirth,
  stillBirth,
  childDiedAfterBirth,
  maternityLeave,
  menSearchParticipation,
  menSearchNoParticipation
} from '../../services/childbirth';
import { id } from '../selectors';
import { put, all, takeLatest, select, fork } from 'redux-saga/effects';

export function* normalBirthSaga() {
  yield takeLatest(actions.NORMAL_BIRTH_REQUEST, function*(data) {
    const { params, success, fail } = data;
    try {
      const userid = yield select(id);
      const res = yield normalBirth(params, userid);
      if (res.status === 200) {
        yield put({ type: actions.NORMAL_BIRTH_SUCCESS, data: res.data });
        yield success();
      } else {
        yield fail(res.data.message);
      }
    } catch (error) {
      yield fail('Không thể kết nối đến server');
    }
  });
}
export function* specialBirthSaga() {
  yield takeLatest(actions.SPECIAL_BIRTH_REQUEST, function*(data) {
    const { params, success, fail } = data;
    try {
      const userid = yield select(id);
      const res = yield specialBirth(params, userid);
      if (res.status === 200) {
        yield put({ type: actions.SPECIAL_BIRTH_SUCCESS, data: res.data });
        yield success();
      } else {
        yield fail(res.data.message);
      }
    } catch (error) {
      yield fail('Không thể kết nối đến server');
    }
  });
}

export function* stillBirthSaga() {
  yield takeLatest(actions.STILL_BIRTH_REQUEST, function*(data) {
    const { params, success, fail } = data;
    try {
      const userid = yield select(id);
      const res = yield stillBirth(params, userid);
      if (res.status === 200) {
        yield put({ type: actions.STILL_BIRTH_SUCCESS, data: res.data });
        yield success();
      } else {
        yield fail(res.data.message);
      }
    } catch (error) {
      yield fail('Không thể kết nối đến server');
    }
  });
}

export function* childDiedAfterBirthSaga() {
  yield takeLatest(actions.CHILD_DIED_AFTER_BIRTH_REQUEST, function*(data) {
    const { params, success, fail } = data;
    try {
      const userid = yield select(id);
      const res = yield childDiedAfterBirth(params, userid);
      if (res.status === 200) {
        yield put({ type: actions.CHILD_DIED_AFTER_BIRTH_SUCCESS, data: res.data });
        yield success();
      } else {
        yield fail(res.data.message);
      }
    } catch (error) {
      yield fail('Không thể kết nối đến server');
    }
  });
}

export function* maternityLeaveSaga() {
  yield takeLatest(actions.MATERNITY_LEAVE_REQUEST, function*(data) {
    const { params, success, fail } = data;
    try {
      const userid = yield select(id);
      const res = yield maternityLeave(params, userid);
      if (res.status === 200) {
        yield put({ type: actions.MATERNITY_LEAVE_SUCCESS, data: res.data });
        yield success();
      } else {
        yield fail(res.data.message);
      }
    } catch (error) {
      yield fail('Không thể kết nối đến server');
    }
  });
}

export function* menSearchParticipationSaga() {
  yield takeLatest(actions.MEN_SEARCH_PARTICIPATION_REQUEST, function*(data) {
    const { params, success, fail } = data;
    try {
      const userid = yield select(id);
      const res = yield menSearchParticipation(params, userid);
      if (res.status === 200) {
        yield put({ type: actions.MEN_SEARCH_PARTICIPATION_SUCCESS, data: res.data });
        yield success();
      } else {
        yield fail(res.data.message);
      }
    } catch (error) {
      yield fail('Không thể kết nối đến server');
    }
  });
}

export function* menSearchNoParticipationSaga() {
  yield takeLatest(actions.MEN_SEARCH_NO_PARTICIPATION_REQUEST, function*(data) {
    const { params, success, fail } = data;
    try {
      const userid = yield select(id);
      const res = yield menSearchNoParticipation(params, userid);
      if (res.status === 200) {
        yield put({ type: actions.MEN_SEARCH_NO_PARTICIPATION_SUCCESS, data: res.data });
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
    fork(normalBirthSaga),
    fork(specialBirthSaga),
    fork(stillBirthSaga),
    fork(childDiedAfterBirthSaga),
    fork(maternityLeaveSaga),
    fork(menSearchParticipationSaga),
    fork(menSearchNoParticipationSaga)
  ]);
}
